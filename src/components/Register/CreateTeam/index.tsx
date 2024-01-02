import axios from "@/app/utils/axiosInstance";
import Button from "@/components/Shared/Button";
import Forms from "@/components/Shared/Forms";
import Input from "@/components/Shared/Input";
import { FormPropType } from "@/components/Shared/Types/formPropType";
import { FormikValues } from "formik";
import * as Yup from "yup";

const CreateTeamForm = (props: FormPropType) => {
  const { handleChange, values, isSubmitting, errors, handleBlur } = props;

  return (
    <div className="grid grid-cols-4 gap-4">
      <Input
        type="text"
        name="name"
        placeholder="Team name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />

      <Input
        type="text"
        name="department"
        placeholder="Department"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.department}
      />
      <Input
        type="string"
        name="team_size"
        placeholder="Team Size"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.team_size}
      />

      <div className="col-span-4">
        <Button
          type="submit"
          className="bg-purpleNav hover:bg-purpleNav"
          disabled={isSubmitting}
          isSubmitting={isSubmitting}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

const validationSchema = Yup.object().shape({
  team_size: Yup.string().required("Team size is required"),
  department: Yup.string().required("Department is required"),
  name: Yup.string().required("Team name is required"),
});

const CreateTeam = () => {
  const initialValue = {
    name: "",
    department: "",
    team_size: "",
  };

  const handleCreateTeam = async (values: FormikValues) => {
    try {
      axios.post("/auth/create_team", {
        body: { ...values },
      });
    } catch (err) {}
  };

  return (
    <div className="mt-[30px]">
      <Forms
        initialValue={initialValue}
        validate={validationSchema}
        onSubmit={async values => {
          handleCreateTeam(values);
        }}
      >
        <CreateTeamForm {...({} as FormPropType)} />
      </Forms>
    </div>
  );
};

export default CreateTeam;
