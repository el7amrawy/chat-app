import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/SocketProvider";

const User = () => {
  const { user_id } = useParams();
  const [msg, setMsg] = useState("");
  const [recievedMsg, setRecievedMsg] = useState("");
  const [room, setRoom] = useState("");
  const [id, setId] = useState("");

  const socket = useContext(SocketContext);

  const clickHandler = () => {
    console.log(room);
    socket.emit("msg-from-client", { msg }, room);
  };

  socket.on("connect", () => {
    setId(socket.id);
    socket.on("recieve", (data) => {
      console.log(data);
      setRecievedMsg(data);
    });
  });
  return (
    <>
      <div className="form-control w-fit">
        <label className="">
          <span className="label-text">socket id: {id}</span>
        </label>
        <input
          type="text"
          value={msg}
          onChange={(ev) => setMsg(ev.target.value)}
          className="input input-bordered"
        />
        <button onClick={clickHandler} className="btn">
          send
        </button>
      </div>
      <div className="form-control w-fit">
        <input
          type="text"
          value={room}
          onChange={(ev) => setRoom(ev.target.value)}
          className="input input-bordered"
        />
        <button
          onClick={() => {
            socket.emit("join-room", room);
          }}
          className="btn"
        >
          Join
        </button>
      </div>
      <div>message: {recievedMsg}</div>
    </>
  );
};

export default User;
