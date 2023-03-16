import { createContext, useState, ReactNode, Dispatch } from "react";

type Alert = {
  status: boolean;
  msg: string;
  type: string;
};

type AlertContext = {
  alert: Alert;
  setAlert: Dispatch<React.SetStateAction<Alert>>;
};

export const alertContext = createContext({} as unknown as AlertContext);

type AlertProviderProps = {
  children: ReactNode;
};

const AlertProvider = (props: AlertProviderProps) => {
  const [alert, setAlert] = useState({
    status: false,
    msg: "",
    type: "",
  } as unknown as Alert);
  return (
    <alertContext.Provider value={{ alert, setAlert }}>
      {props.children}
    </alertContext.Provider>
  );
};
export default AlertProvider;
