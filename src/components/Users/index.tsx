import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../library/utils/axiosInstance";
import Header from "../Dashboard/Header";

const GetUsers = async () => {
  const response = await axiosInstance.get("organization/users/");
  return response.data;
};

export const UsersComponent = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => GetUsers(),
  });

  return (
    <div className=" min-h-screen grow items-center justify-center bg-gray-900 bg-opacity-50 p-10">
      <Header title="Users" />
      <div className="bg-white rounded-lg shadow-lg p-10">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Organization</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.organization}</TableCell>
                  <TableCell>
                    <Button onClick={() => navigate(`/home/${row.id}`)}>
                      <VisibilityIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
