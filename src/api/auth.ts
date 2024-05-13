import axios from "../libs/axios";

export const loginRequest = async (email: string, password: string) => {
  return await axios.post("/signin", { email, password });
};

export const profileRequest = async () => {
  return await axios.get("/profile");
};

export const registerRequest = async (
  nickname: string,
  nombre: string,
  apellido: string,
  direccion: string,
  email: string,
  password: string
) => {
  return await axios.post("/register", {
    nickname,
    nombre,
    apellido,
    direccion,
    email,
    password,
  });
};
