import { useNavigate, Outlet } from "react-router-dom";

interface Props {
  isAllowed: boolean;
  children?: React.ReactNode;
}

export const ProtectedRoute = ({ isAllowed, children }: Props) => {
  const navigate = useNavigate();
  if (!isAllowed) {
    navigate("/");
    return null;
  }
  return children ? <>{children}</> : <Outlet />;
};
