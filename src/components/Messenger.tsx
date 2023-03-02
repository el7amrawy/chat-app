import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "./Message";
import { useState, useContext, Dispatch } from "react";
import { SocketContext } from "../context/SocketProvider";
import { Contact } from "./SideBar";

type MessengerProps = {
  currentChat: Contact;
  setCurrentChat: Dispatch<React.SetStateAction<Contact>>;
};

const Messenger = (props: MessengerProps) => {
  const { currentChat, setCurrentChat } = props;
  /* ======================= States ======================= */
  const [msg, setMsg] = useState("");
  const [recievedMsg, setRecievedMsg] = useState("");
  const [room, setRoom] = useState("");
  const [id, setId] = useState("");

  /* ============================================== */
  const socket = useContext(SocketContext);
  /* ======================= effects ======================= */
  socket.on("connect", () => {
    setId(socket.id);
    socket.on("recieve", (data) => {
      console.log(data);
      setRecievedMsg(data);
    });
  });

  return (
    <section className="flex flex-col h-full ">
      <label className="label shadow-md p-3 flex justify-center items-center">
        <span className="label-text text-lg font-bold">{currentChat.name}</span>
      </label>
      <div className="mt-10 overflow-y-auto flex-auto h-0 mx-20">
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
      </div>
      <div className="form-control px-20 my-10">
        <label className="input-group w-ful flex">
          <input
            type="text"
            placeholder="Type a message here"
            className="input input-bordered flex-grow"
          />
          <button className="btn bg-primary border-none">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </label>
      </div>
    </section>
  );
};

export default Messenger;
