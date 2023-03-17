import SideBar, { Contact } from "../components/SideBar";
import { SocketProvider } from "../context/SocketProvider";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import Messenger from "../components/Messenger";

const UserPage = () => {
  const { userData } = useContext(UserContext);
  /* --------------------- States --------------------- */
  const [currentContact, setCurrentContact] = useState(
    {} as unknown as Contact
  );
  const [chat, setChat] = useState(() => {
    if (!localStorage.getItem("chat")) {
      localStorage.setItem("chat", "{}");
    }
    return JSON.parse(localStorage.getItem("chat") as unknown as string);
  });
  /* --------------------- effects --------------------- */
  // useEffect(() => {}, [currentContact]);

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(chat));
  }, [chat]);

  return (
    <main className="flex">
      <SideBar
        currentContact={currentContact}
        setCurrentContact={setCurrentContact}
      />
      <div className=" flex-grow">
        <SocketProvider username={userData.user.username}>
          <Messenger
            chat={chat}
            setChat={setChat}
            currentContact={currentContact}
            setCurrentContact={setCurrentContact}
          />
        </SocketProvider>
      </div>
    </main>
  );
};

export default UserPage;
