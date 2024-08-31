import { Popover, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../library/utils/AuthProvider";
import { useUserStore } from "../../../pages/dashboard/store";

interface HeaderProp {
  title?: string;
}

const Header = ({ title }: HeaderProp) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  // const router = useRouter();
  const navigate = useNavigate();
  const { logout, setUser } = useAuth();
  const { users } = useUserStore();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // const { profile } = useAuthStore();
  // const userDetail = profile["User Detail"];

  // const { email, first_name, last_name } = userDetail;

  const handleLogout = async () => {
    sessionStorage.clear();
    logout();
    setUser(null);
    navigate("/login", { replace: true });
    // try {
    //   await axios.get(`/api/removeToken?${Date.now()}`);
    //   dispatch(resetAuthData());
    //   dispatch(setAuthData({ authCheck: true }));
    //   // router.replace(`/auth/login`);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <header className="flex justify-between items-end pb-[20px]">
      <Typography variant="h2" className="text-darkPurple">
        {title ? title : `Hi, ${users?.user?.first_name}`}
      </Typography>
      <div className="flex gap-[10px] items-center">
        <div>
          <Typography variant="h6" className="text-right text-primary">
            {users?.user?.first_name} {users?.user?.last_name}
          </Typography>
          <Typography variant="body2" className="text-black">
            {users?.user?.email}
          </Typography>
        </div>
        <button aria-describedby={id} onClick={handleClick}>
          <img
            src={users?.user?.profile?.profile_picture}
            height={44}
            width={44}
            alt="Avatar"
            className="rounded-lg"
          />
        </button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <button className="p-2" onClick={() => handleLogout()}>
            Logout
          </button>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
