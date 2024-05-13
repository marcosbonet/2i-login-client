import React from "react";
import { useAuthStore } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import style from "./profile.module.css";

function ProfilePages() {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);

  const lastProfile = profile.length > 0 ? profile[profile.length - 1] : null;
  const navigate = useNavigate();
  if (lastProfile === null)
    return <div>Usuario no encontrado en la base de datos</div>;
  return (
    <div className={`${style.container} ${style.fadeInLeft}`}>
      <h2 className={style.form__tittle}>Datos de Usuario</h2>
      <div className={`${style.container} ${style.fadeInLeft}`}>
        <h3 className={style.form__tittle}>
          Nombre: {`${lastProfile!.nombre}`}
        </h3>
        <h3 className={style.form__tittle}>
          Apellido: {`${lastProfile!.apellido}`}
        </h3>
        <h3 className={style.form__tittle}>
          Nickname {`${lastProfile!.nickname}`}
        </h3>
        <h3 className={style.form__tittle}>
          Direccion: {`${lastProfile!.direccion}`}
        </h3>
        <h3 className={style.form__tittle}>Email: {`${lastProfile!.email}`}</h3>
      </div>
      <button
        className={style.btn}
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePages;
