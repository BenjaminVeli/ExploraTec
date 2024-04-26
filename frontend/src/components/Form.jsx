import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/auth";

import "../styles/Form.css";

function Form({ route }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    setLoading(true);

    try {
      const res = await api.post(route, { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/formulario");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h1>Login</h1>
      <input
        className="form-input"
        type="text"
        {...register("username", { required: true })}
        placeholder="Usuario"
      />
      {errors.username?.message && (
        <p className="error-message">{errors.username?.message}</p>
      )}
      <input
        className="form-input"
        type="password"
        {...register("password", { required: true })}
        placeholder="Contraseña"
      />
      {errors.password?.message && (
        <p className="error-message">{errors.password?.message}</p>
      )}

      <button className="form-button" type="submit">
        Iniciar sesión
      </button>
      <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
    </form>
  );
}

export default Form;
