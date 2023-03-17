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
  const [contacts, setContacts] = useState([] as unknown as Contact[]);
  /* --------------------- effects --------------------- */
  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(chat));
  }, [chat]);

  return (
    <main className="flex">
      <SideBar
        contacts={contacts}
        setContacts={setContacts}
        currentContact={currentContact}
        setCurrentContact={setCurrentContact}
      />
      <div className=" flex-grow">
        <SocketProvider
          username={userData.user.username}
          userId={userData.user.id}
        >
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
