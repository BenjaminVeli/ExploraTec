import { useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import Header from "../components/Header"

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
    <div>
      <Header />

      <div className="wrapper">
        <div className="container main">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 side-image--register">
              <div className="text">
                <p>EXPLORATEC</p>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="input-box">
                <h2>Regístrate</h2>
                <div className="input-field">
                  <input className="input" required type="text" {...register("username", { required: true })} />
                  <label >Usuario</label> 
                  {errors.username?.message && (
                    <p className="error-message">{errors.username?.message}</p>
                  )}
                </div>
                <div className="input-field">
                  <input className="input" required type="password" {...register("password", { required: true })} />
                  <label >Contraseña</label> 
                  {errors.password?.message && (
                    <p className="error-message">{errors.password?.message}</p>
                  )}
                </div>
                <div className="input-field">
                  <button className="submit" type="submit">
                    REGISTRARSE
                  </button>
                </div>
                <div className="signin">
                  <span>Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></span>
                </div>
              </div>
            </div>   
          </div>
        </form>
        </div>
      </div>
      
    </div>
  );
}

export default Register;
