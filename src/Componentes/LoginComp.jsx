import{useForm} from "react-hook-form"
import "./Login.css"


const LoginCom = () => {
      const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();
    
      const clickBotonIniciar = handleSubmit((data) => {
        console.log(data);
      });
    
      return (
        <div className="PAGINA">
          <form
            onSubmit={clickBotonIniciar}
            className=" d-flex justify-content-center align-items-center  Fornn"
          >
            <div className="col-4 mt-5 card p-4 shadow m-auto">
              <h1 className="text-center mb-4">bienvenido </h1>
              <label htmlFor="txtUser">Ingresa tú correo</label>
              <input
                className="form-control shadow-sm"
                type="text"
                placeholder="Usuario"
                id="txtUser"
                name="txtUser"
                {...register("userName", {
                  required: {
                    value: true,
                    message: "ingrese el usuario",
                  },
                  minLength: {
                    value: 2,
                    message: "El usuario debe tener minimo 2 caracteres",
                  },
                  pattern: {
                    value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                    message: "Por favor ingres un correo valido",
                  },
                })}
              />
              {errors.userName && (
                <span className="text-primary"> {errors.userName.message} </span>
              )}
    
              <label htmlFor="txtPass" className="mt-4">
                Ingresa tú contraseña
              </label>
    
              <input
                className="form-control shadow-sm"
                type="text"
                placeholder="Contraseña"
                id="txtPass"
                name="txtPass"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Por favor ingrese una contraseña valida",
                  },
                  minLength: {
                    value: 8,
                    message: "La contraseña debe contener minimo 8 caracteres",
                  },
                })}
              />
              {errors.password && (
                <span className="text-primary">{errors.password.message}</span>
              )}
    
              <button className="btn btn-primary mt-4">Iniciar sesión</button>
            </div>
          </form>
        </div>
    );
  };
  export default LoginCom;
  