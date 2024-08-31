// src/components/MeetingForm.js

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { axiosInstance } from "../../library/utils/axiosInstance";
import Button from "../Shared/Button";
import Forms from "../Shared/Forms";
import OutlineInput from "../Shared/Input/OutlineInput";
import { FormPropType } from "../Shared/Types/formPropType";
import Header from "../Dashboard/Header";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const validationSchema = Yup.object().shape({
  meeting_url: Yup.string().required("Please enter Meeting url"),
  bot_name: Yup.string().required("Please enter Bot Name"),
});
const GetMMeetings = async () => {
  const response = await axiosInstance.get("meeting/");
  return response.data;
};

const MeetingApi = async (data: any) => {
  const response = await axiosInstance.post("meeting/", data);
  return response.data;
};

const FormMeeting = (props: FormPropType & { onClose: () => void }) => {
  const { handleChange, values, isSubmitting, handleBlur } = props;

  return (
    <>
      {/* {Object.keys(errors).length > 0 ? (
        <Alert severity="error">{Object.values(errors)[0] as string}</Alert>
      ) : null} */}
      <div className=" min-h-screen inset-0 flex grow items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-1/2 p-10 relative">
          <IconButton
            aria-label="close"
            className="absolute top-2 right-2"
            onClick={props.onClose}
          >
            <CloseIcon />
          </IconButton>
          <h2 className="text-xl mb-4">Add to live meeting</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="meetingName"
            >
              Bot Name
            </label>
            <OutlineInput
              type="text"
              //   icon="email"
              name="bot_name"
              placeholder="Bot Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Meeting link
            </label>
            <OutlineInput
              type="text"
              //   icon="email"
              name="meeting_url"
              placeholder="Meeting link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-purpleNav hover:bg-purpleNav"
              disabled={isSubmitting}
              isSubmitting={isSubmitting}
            >
              Start Capturing
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const MeetingForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mutate } = useMutation({
    mutationFn: (data) => MeetingApi(data),
  });

  const { data, refetch } = useQuery({
    queryKey: ["meetings"],
    queryFn: () => GetMMeetings(),
  });

  const handleSubmit = (values: any) => {
    mutate(values, {
      onSuccess() {
        refetch();
        handleClose();
        toast.success("Meeting Join Successfully");
      },
      onError(error: any) {
        toast.error(error.response.data.message);
      },
    });
  };

  return (
    <div className=" min-h-screen grow items-center justify-center bg-gray-900 bg-opacity-50 p-10">
      <Header title="Meetings" />
      <div className="bg-white rounded-lg shadow-lg p-10">
        <div className="flex-row flex justify-between items-center mb-4">
          <h2 className="text-xl">Meetings</h2>
          <Button
            type="button"
            onClick={handleOpen}
            className="bg-purpleNav hover:bg-purpleNav"
          >
            Add Meeting
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Organizer</TableCell>
                <TableCell>Bot Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row: any) => (
                <TableRow key={row.meeting_id}>
                  <TableCell>{row.meeting_id}</TableCell>
                  <TableCell>{row.meeting_organizer}</TableCell>
                  <TableCell>{row.bot_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Forms
          initialValue={{ bot_name: "", meeting_url: "" }}
          validate={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormMeeting {...({} as FormPropType)} onClose={handleClose} />
        </Forms>
      </Modal>
    </div>
  );
};

export default MeetingForm;