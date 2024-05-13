import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/login.page";
import { Register } from "./pages/register/register.pages";
import ProfilePages from "./pages/profile/profile.pages";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuthStore } from "./store/auth";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path="/profile" element={<ProfilePages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
