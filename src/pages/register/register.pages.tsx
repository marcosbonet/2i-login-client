import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import style from "./register.module.css";
import { registerRequest } from "../../api/auth";

import { FormikHelpers } from "formik";

export function Register() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    nickname: Yup.string().required(
      "El nickname es requerido,mayor a 3 caracteres"
    ),
    nombre: Yup.string().required(
      "El nombre es requerido,mayor a 3 caracteres"
    ),
    apellido: Yup.string().required(
      "El apellido es requerido, mayor a 3 caracteres"
    ),
    email: Yup.string()
      .email("Formato de email debe ser xxx@xxx.xxx")
      .required("El email es requerido"),
    password: Yup.string().required(
      "La contraseña debe ser de mas de 6 caracteres"
    ),
    direccion: Yup.string().required("La dirección es requerida"),
  });

  const handleSubmit = async (
    values: {
      nickname: string;
      nombre: string;
      apellido: string;
      email: string;
      password: string;
      direccion: string;
    },
    formikHelpers: FormikHelpers<{
      nickname: string;
      nombre: string;
      apellido: string;
      email: string;
      password: string;
      direccion: string;
    }>
  ) => {
    try {
      await registerRequest(
        values.nombre,
        values.email,
        values.apellido,
        values.nickname,
        values.direccion,
        values.password
      );

      navigate("/");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <div className={`${style.container} ${style.fadeInRight}`}>
      <h2 className={style.form__tittle}>Register</h2>
      <Formik
        initialValues={{
          nickname: "",
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          direccion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={style.form}>
            <div>
              <Field
                name="nickname"
                type="text"
                placeholder="Nickname"
                className={style.form__input}
              />
              <ErrorMessage
                name="nickname"
                component="div"
                className={style.error}
              />
            </div>
            <div>
              <Field
                name="nombre"
                type="text"
                placeholder="Nombre"
                className={style.form__input}
              />
              <ErrorMessage
                name="nombre"
                component="div"
                className={style.error}
              />
            </div>
            <div>
              <Field
                name="apellido"
                type="text"
                placeholder="Apellido"
                className={style.form__input}
              />
              <ErrorMessage
                name="apellido"
                component="div"
                className={style.error}
              />
            </div>
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={style.form__input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={style.error}
              />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Contraseña"
                className={style.form__input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={style.error}
              />
            </div>
            <div>
              <Field
                name="direccion"
                type="text"
                placeholder="Dirección"
                className={style.form__input}
              />
              <ErrorMessage
                name="direccion"
                component="div"
                className={style.error}
              />
            </div>
            <button type="submit" className={style.btn} disabled={isSubmitting}>
              {isSubmitting ? "Registrando..." : "Registrar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
