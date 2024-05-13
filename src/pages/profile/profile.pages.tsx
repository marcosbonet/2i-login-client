import React from "react";
import { useAuthStore } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import style from "./profile.module.css";

function ProfilePages() {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);

  const navigate = useNavigate();

  return (
    <div className={`${style.container} ${style.fadeInLeft}`}>
      <h2 className={style.form__tittle}>Datos de Usuario</h2>
      <div className={`${style.container} ${style.fadeInLeft}`}>
        <h3 className={style.form__tittle}>Nombre: {profile.nombre}</h3>
        <h3 className={style.form__tittle}>
          Apellido: {`${profile.apellido}`}
        </h3>
        <h3 className={style.form__tittle}>Nickname: {profile.nickname}</h3>
        <h3 className={style.form__tittle}>Direccion: {profile.direccion}</h3>
        <h3 className={style.form__tittle}>Email: {profile.email}</h3>
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
