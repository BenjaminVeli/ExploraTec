import Form from "../components/Form"

function Login() {
    return <Form route="/api/token/" method="login" />
}

export default Login









// import { useState } from "react";
// import api from "../api";
// import { useNavigate } from "react-router-dom";
// import "../styles/Form.css"

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();

//     try {
//       const res = await api.post("/api/token/", { username, password });
//       localStorage.setItem("ACCESS_TOKEN", res.data.access);
//       localStorage.setItem("REFRESH_TOKEN", res.data.refresh);
//       navigate("/");
//     } catch (error) {
//       console.log("Error al iniciar sesión:", error); 
//       alert("Error al iniciar sesión. Por favor, intenta de nuevo."); 
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <h1>Login</h1>
//       <input
//         className="form-input"
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         className="form-input"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button className="form-button" type="submit">
//         Login
//       </button>
//     </form>
//   );
// }

// export default Login;
