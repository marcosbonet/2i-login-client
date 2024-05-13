import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userTypes } from "../types/types";

type State = {
  token: string;
  profile: userTypes;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: userTypes) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: {
        nickname: "",
        nombre: "",
        apellido: "",
        direccion: "",
        password: "",
        email: "",
      },
      isAuth: false,

      setToken: (token: string) =>
        set((state) => ({
          ...state,
          token,
          isAuth: true,
        })),
      setProfile: (profile: userTypes) =>
        set((state) => ({
          ...state,
          profile,
        })),
      logout: () =>
        set((state) => ({
          ...state,
          token: "",
          profile: {
            nickname: "",
            nombre: "",
            apellido: "",
            direccion: "",
            password: "",
            email: "",
          },
          isAuth: false,
        })),
    }),
    {
      name: "auth",
      getStorage: () => localStorage,
    }
  )
);
