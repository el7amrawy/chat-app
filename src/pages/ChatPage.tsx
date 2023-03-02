import SideBar, { Contact } from "../components/SideBar";
import { SocketProvider } from "../context/SocketProvider";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import Messenger from "../components/Messenger";

const UserPage = () => {
  const { userData } = useContext(UserContext);
  /* ======================= States ======================= */
  const [currentChat, setCurrentChat] = useState(() => {
    if (!localStorage.getItem("currentChat")) {
      localStorage.setItem("currentChat", "{}");
    }
    return JSON.parse(
      localStorage.getItem("currentChat") as unknown as string
    ) as unknown as Contact;
  });
  /* ======================= effects ======================= */
  useEffect(() => {
    localStorage.setItem("currentChat", JSON.stringify(currentChat));
  }, [currentChat]);
  return (
    <main className="flex">
      <SideBar currentChat={currentChat} setCurrentChat={setCurrentChat} />
      <div className=" flex-grow">
        <SocketProvider userName={userData.user.username}>
          <Messenger
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
          />
        </SocketProvider>
      </div>
    </main>
  );
};

export default UserPage;
