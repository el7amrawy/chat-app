import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "./Message";
import {
  useState,
  useContext,
  Dispatch,
  SyntheticEvent,
  useEffect,
} from "react";
import { SocketContext } from "../context/SocketProvider";
import { Contact } from "./SideBar";
import { nanoid } from "nanoid";
import { useAlert } from "../context/AlertProvider";

type MessengerProps = {
  currentContact: Contact;
  setCurrentContact: Dispatch<React.SetStateAction<Contact>>;
  chat: Object;
  setChat: Dispatch<React.SetStateAction<{}>>;
};

type ChatMsg = {
  msg: string;
  status: string;
  contact: Contact;
};

const Messenger = (props: MessengerProps) => {
  const { currentContact, setCurrentContact, chat, setChat } = props;
  /* ---------------- States ---------------- */
  const [msg, setMsg] = useState("");
  const [recievedMsg, setRecievedMsg] = useState("");
  const [currentChat, setCurrentChat] = useState(
    chat[currentContact.username as keyof Object] as unknown as ChatMsg[]
  );
  /* ------------------------------ */
  const socket = useContext(SocketContext);
  socket.on("connect", () => {
    socket.on("recieve-msg", (res) => {
      setRecievedMsg(res.msg);
    });
  });
  const { setAlert } = useAlert();
  /* ---------------- effects ---------------- */
  useEffect(() => {
    setChat({
      ...chat,
      [currentContact.username as keyof Object]: currentChat,
    });
  }, [currentChat]);

  useEffect(() => {
    setCurrentChat(
      chat[currentContact.username as keyof Object] as unknown as ChatMsg[]
    );
  }, [currentContact]);

  useEffect(() => {
    if (recievedMsg.length) {
      const chatMsg: ChatMsg = {
        contact: currentContact,
        msg: recievedMsg,
        status: "recieved",
      };
      setCurrentChat([...currentChat, chatMsg]);
    }
  }, [recievedMsg]);

  /* ---------------- handlers ---------------- */
  const submitHandler = (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (msg.length) {
      try {
        socket.emit("send-msg", {
          reciever: currentContact.username,
          recieverId: currentContact.contact_id,
          senderId: currentContact.user_id,
          msg,
        });
        const sentMsg: ChatMsg = {
          contact: currentContact,
          msg,
          status: "sent",
        };
        setMsg("");
        if (currentChat?.length) {
          setCurrentChat([...currentChat, sentMsg]);
        } else {
          setCurrentChat([sentMsg]);
        }
      } catch (err) {
        setAlert({ msg: "Couldn't send message", type: "error", status: true });
        console.error(err);
      }
    } else {
      setAlert({
        msg: "Message can not be empty",
        status: true,
        type: "warning",
      });
    }
  };

  /* ---------------- */
  const chatMsgsElems = currentChat?.map((chatMsg) => (
    <Message
      status={chatMsg.status}
      contact={currentContact}
      msg={chatMsg.msg}
      key={nanoid()}
    />
  ));

  return (
    <section className="flex flex-col h-full ">
      {currentContact.name?.length ? (
        <>
          <label className="label shadow-md p-3 flex justify-center items-center">
            <span className="label-text text-lg font-bold">
              {currentContact.name}
            </span>
          </label>
          <div className="mt-10 overflow-y-auto flex-auto h-0 mx-20">
            {chatMsgsElems}
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
