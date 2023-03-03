import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "./Message";
import { useState, useContext, Dispatch, SyntheticEvent } from "react";
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
  /* ============================================== */
  const socket = useContext(SocketContext);
  /* ============================================== */
  const submitHandler = (ev: SyntheticEvent) => {
    ev.preventDefault();
    try {
      socket.emit("send-msg", { reciever: currentChat.username, msg });
      setMsg("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="flex flex-col h-full ">
      {currentChat.name?.length ? (
        <>
          <label className="label shadow-md p-3 flex justify-center items-center">
            <span className="label-text text-lg font-bold">
              {currentChat.name}
            </span>
          </label>
          <div className="mt-10 overflow-y-auto flex-auto h-0 mx-20">
            {/*  */}
          </div>
          <form className="form-control px-20 my-10" onSubmit={submitHandler}>
            <label className="input-group w-ful flex">
              <input
                type="text"
                placeholder="Type a message here"
                className="input input-bordered flex-grow"
                value={msg}
                onChange={(ev) => setMsg(ev.target.value)}
              />
              <button className="btn bg-primary border-none">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </label>
          </form>
        </>
      ) : null}
    </section>
  );
};

export default Messenger;
