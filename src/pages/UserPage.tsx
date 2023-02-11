import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { SocketProvider } from "../context/SocketProvider";

const user = {
  id: "1",
};

const UserPage = () => {
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
