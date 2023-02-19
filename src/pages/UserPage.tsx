import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { SocketProvider } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../context/UserProvider";

const UserPage = () => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  useEffect(() => {
    if (userData.user.username) {
      navigate("chat");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <main className="flex">
      <SideBar />
      <div className=" flex-grow">
        <SocketProvider userName={userData.user.username}>
          <Outlet />
        </SocketProvider>
      </div>
    </main>
  );
};

export default UserPage;
