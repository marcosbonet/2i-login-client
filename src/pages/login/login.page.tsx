import { Link, useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { loginRequest, profileRequest } from "../../api/auth";
import { useAuthStore } from "../../store/auth";

export function Login() {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const restLogin = await loginRequest(email, password);
    setToken(restLogin.data.token);
    const resProfile = await profileRequest();

    setProfile(resProfile.data);
    navigate("/profile");
  };

  return (
    <>
      {" "}
      <div className={`${style.container} ${style.fadeInLeft}`}>
        <h2 className={style.form__tittle}>Login</h2>
        <form onSubmit={handleSubmit} className={style.form}>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className={style.form__input}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={style.form__input}
            />
          </div>

          <button name="login" type="submit" className={style.btn}>
            Login
          </button>
        </form>
        <div className={style.form__info}>
          <p className={style["form__info--or"]}>or</p>
          <p>
            don't have an account?{" "}
            <Link to="/register" className={style.form__loginButton}>
              register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
