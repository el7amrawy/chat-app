import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { SocketProvider } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const user = {
  id: "1",
};

const UserPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`${user.id}`);
  }, []);
  return (
    <main className="flex">
      <SideBar />
      <div className=" flex-grow">
        <SocketProvider id={user.id}>
          <Outlet />
        </SocketProvider>
      </div>
    </main>
  );
};

export default UserPage;
