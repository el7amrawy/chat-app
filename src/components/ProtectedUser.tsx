import { ReactNode, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate, useParams } from "react-router-dom";

type ProtectedUserProps = {
  children: ReactNode;
};

const ProtectedUser = (props: ProtectedUserProps) => {
  const { children } = props;
  const { userData } = useContext(UserContext);
  const { username } = useParams();
  if (userData.token?.length && username === userData.user?.username) {
    return <>{children}</>;
  }
  return <Navigate to="/signin" />;
};

export default ProtectedUser;
