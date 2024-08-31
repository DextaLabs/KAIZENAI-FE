import Dashboard from "../../components/Dashboard";
import Sidebar from "../../components/SideBar";
import { Route, Routes } from "react-router-dom";
import Meeting from "../meeting";
import { MyTeams } from "../myTeams";
import User from "../users";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className="w-full flex flex-row">
        <div className="w-1/5 fixed left-0 bg-purple top-0  bottom-0 right-0">
          <Sidebar />
        </div>
        <div className="w-[80%] ml-auto bg-white">
          <Routes>
            <Route path="home" element={<Dashboard />} />
            <Route path="home/:id" element={<Dashboard />} />
            <Route path="meeting" element={<Meeting />} />
            <Route path="myTeams" element={<MyTeams />} />
            <Route path="users" element={<User />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
