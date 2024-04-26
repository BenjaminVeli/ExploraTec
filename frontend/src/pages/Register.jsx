import { useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import "../styles/Form.css"

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema), 
  });
  const [loading, setLoading] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await api.post("/api/user/register/", data);
      navigate("/login");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h1>Register</h1>
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
        Registrarse
      </button>
      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
    </form>
  );
}

export default Register;
