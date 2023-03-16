import SideBar, { Contact } from "../components/SideBar";
import { SocketProvider } from "../context/SocketProvider";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import Messenger from "../components/Messenger";
import { SocketContext } from "../context/SocketProvider";

const UserPage = () => {
  const { userData } = useContext(UserContext);
  const socket = useContext(SocketContext);
  /* ======================= States ======================= */
  const [currentContact, setCurrentContact] = useState(
    {} as unknown as Contact
  );
  // socket.on("connection", () => {
  //   socket.on("recieve-msg", (res) => {
  //     console.log(res);
  //   });
  // });
  // () => {
  // if (!localStorage.getItem("currentChat")) {
  //   localStorage.setItem("currentChat", "{}");
  // }
  // return JSON.parse(
  //   localStorage.getItem("currentChat") as unknown as string
  // ) as unknown as Contact;
  // });
  /* ======================= effects ======================= */
  useEffect(() => {
    localStorage.setItem("currentChat", JSON.stringify(currentContact));
  }, [currentContact]);
  return (
    <main className="flex">
      <SideBar
        currentContact={currentContact}
        setCurrentContact={setCurrentContact}
      />
      <div className=" flex-grow">
        <SocketProvider username={userData.user.username}>
          <Messenger
            currentContact={currentContact}
            setCurrentContact={setCurrentContact}
          />
        </SocketProvider>
      </div>
    </main>
  );
};

export default UserPage;
