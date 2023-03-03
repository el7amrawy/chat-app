import { createContext, useEffect, useState, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import config from "../config";

type SocketProviderProps = {
  children: ReactNode;
  username: string;
};

export const SocketContext = createContext({} as unknown as Socket);

export const SocketProvider = (props: SocketProviderProps) => {
  const { children, username } = props;
  const [socket, setSocket] = useState(() => io(""));

  useEffect(() => {
    const newSocket = io(config.apiHost, { query: { username } });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [username]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
