### Client

Este es el cliente de la aplicación, desarrollado con React y TypeScript.

## Instalación

1- Clona el repositorio:

git clone https://github.com/marcosbonet/2i-login-client

2- Navega al directorio del cliente:

cd client

3- Instala las dependencias:

    npm install

## Scripts disponibles

- dev: Inicia el servidor de desarrollo Vite.
- build: Compila el proyecto para producción.
- lint: Ejecuta ESLint para buscar y corregir problemas de código.
- preview: Previsualiza el proyecto compilado antes de implementarlo.

## Uso

Para ejecutar el cliente en modo de desarrollo, utiliza el siguiente comando:

npm run dev

Esto abrirá el cliente en tu navegador predeterminado en http://localhost:3000.

## Dependencias principales

    axios: Cliente HTTP para realizar solicitudes al servidor.
    formik: Biblioteca para crear formularios en React de forma sencilla.
    react: Biblioteca principal de React para crear interfaces de usuario.
    react-dom: Renderizador de React para el DOM.
    react-router-dom: Enrutador para la navegación entre páginas en la aplicación React.
    yup: Biblioteca para realizar validaciones de formularios.

## Dependencias de desarrollo

    eslint: Herramienta para identificar y reportar patrones en el código JavaScript/TypeScript.
    typescript: Superset de JavaScript que añade tipado estático al lenguaje.
    vite: Herramienta de construcción rápida para proyectos web modernos.

## Estructura del proyecto

    src/: Contiene los archivos fuente del proyecto.
        api/: Contiene las funciones para realizar solicitudes al servidor.
        components/: Componentes reutilizables de la aplicación.
        pages/: Páginas principales de la aplicación.
        store/: Contiene el estado global de la aplicación gestionado con Zustand.
        styles/: Estilos globales y archivos de estilos de la aplicación.
        App.tsx: Componente principal de la aplicación.
        index.tsx: Punto de entrada de la aplicación.

## Notas adicionales

    Asegúrate de tener el servidor backend en ejecución para poder interactuar con la aplicación cliente.
