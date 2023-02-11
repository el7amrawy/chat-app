import { createContext, useEffect, useState, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

type SocketProviderProps = {
  children: ReactNode;
  id: string;
};

export const SocketContext = createContext({} as unknown as Socket);

export const SocketProvider = (props: SocketProviderProps) => {
  const { children, id } = props;
  const [socket, setSocket] = useState(() => io(""));

  useEffect(() => {
    const newSocket = io("http://localhost:3000", { query: { id } });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
