import axios from "@/library/utils/axiosInstance";
import Button from "@/components/Shared/Button";
import Forms from "@/components/Shared/Forms";
import Input from "@/components/Shared/Input";
import { FormPropType } from "@/components/Shared/Types/formPropType";
import { FormikValues } from "formik";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import * as Yup from "yup";

const TeamMemberForm = (
  props: FormPropType & { handleAddMember: () => void; memberCount: string[] }
) => {
  const {
    handleChange,
    values,
    isSubmitting,
    errors,
    handleBlur,
    handleAddMember,
    memberCount,
  } = props;

  const handleAddTeamMember = async () => {
    try {
      axios.post("/auth/add_team_member", {
        body: values.values,
      });
    } catch (err) {}
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {memberCount.map((id, index) => (
        <div key={id} className="col-span-4 grid grid-cols-4  gap-4">
          <Input
            type="text"
            name={`values[${index}].team_id`}
            placeholder="Team Id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.values[index]?.team_id}
          />

          <Input
            type="text"
            name={`values[${index}].developer_id`}
            placeholder="Developer Id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.values[index]?.developer_id}
          />
        </div>
      ))}

      <div className="col-span-4 flex gap-2">
        <Button
          type="button"
          className="bg-purpleNav hover:bg-purpleNav"
          disabled={isSubmitting}
          isSubmitting={isSubmitting}
          onClick={handleAddMember}
        >
          Add +
        </Button>
        <Button
          type="submit"
          className="bg-purpleNav hover:bg-purpleNav"
          disabled={isSubmitting}
          onClick={() => {
            handleAddTeamMember();
          }}
          isSubmitting={isSubmitting}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

const validationSchema = Yup.array().of(
  Yup.object().shape({
    team_id: Yup.string().required("Team Id is required"),
    developer_id: Yup.string().required("Developer Id is required"),
  })
);

const AddTeamMember = () => {
  const [memberCount, setMemberCount] = useState([uuidV4()]);

  const initialValue = [
    {
      developer_id: "",
      team_id: "",
    },
  ];

  const handleAddTeamMember = async (values: FormikValues) => {
    try {
      axios.post("/auth/add_team_member", {
        body: { ...values },
      });
    } catch (err) {}
  };

  const handleAddMember = () => {
    setMemberCount(prev => [...prev, uuidV4()]);
  };

  return (
    <div className="mt-[30px]">
      <Forms
        initialValue={initialValue}
        validate={validationSchema}
        onSubmit={async values => {
          // await handleAddTeamMember(values);
        }}
      >
        <TeamMemberForm
          {...({} as FormPropType)}
          handleAddMember={handleAddMember}
          memberCount={memberCount}
        />
      </Forms>
    </div>
  );
};

export default AddTeamMember;
