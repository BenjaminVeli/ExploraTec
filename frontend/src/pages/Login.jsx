import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/auth";

import Header from "../components/Header";
import "../styles/Form.css";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    setLoading(true);

    try {
      const res = await api.post("/api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

      // Obtener los datos del usuario actual
      const userRes = await api.get("/api/current-user/", {
        headers: {
          Authorization: `Bearer ${res.data.access}`,
        },
      });

      const user = userRes.data;

      if (user.is_superuser) {
        navigate("/home-admin");
      } else {
        navigate("/formulario");
      }
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Las credenciales son incorrectas.");
      } else {
        setErrorMessage("Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />

      <div className="wrapper">
        <div className="container main">
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            <div className="col-md-6 side-image--login">
              <div className="text">
                <p>EXPLORATEC</p>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="input-box">
                <h2>Iniciar sesión</h2>
                <div className="input-field">
                  <input className="input" required type="text" {...register("username", { required: true })} />
                  <label>Usuario</label>
                  {errors.username?.message && (
                    <p className="error-message">{errors.username?.message}</p>
                  )}
                </div>
                <div className="input-field">
                  <input className="input" required type="password" {...register("password", { required: true })} />
                  <label>Contraseña</label>
                  {errors.password?.message && (
                    <p className="error-message">{errors.password?.message}</p>
                  )}
                </div>
                <div className="input-field">
                  <button className="submit" type="submit" disabled={loading}>
                    {loading ? "Cargando..." : "INGRESAR"}
                  </button>
                </div>
                <div className="signin">
                  <span>No tienes una cuenta? <Link to="/register">Regístrate</Link></span>
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
