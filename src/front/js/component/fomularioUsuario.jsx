import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const FormularioUsuario = ({ type }) => {
    const { store, actions } = useContext(Context);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = type === 'login'
            ? await actions.login(formData)
            : await actions.register(formData);

        if (success && type === 'register') {
            window.location.href = '/login'; // Redirige al inicio de sesión tras el registro
        } else if (success && type === 'login') {
            window.location.href = '/perfil'; // Redirige al perfil tras el inicio de sesión
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
            <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} />
            <input type="submit" />
        </form>
    );
};




//import React, { useContext, useState } from "react";
//import { Context } from "../store/appContext";
//import { useNavigate } from "react-router-dom";
//
//export const FormularioUsuario = ({ type }) => {
//  const { store, actions } = useContext(Context);
//  const navigate = useNavigate();
//
//  const [formData, setFormData] = useState({
//    email: "",
//    password: "",
//  });
//
//  const handleChange = (e) =>
//    setFormData({ ...formData, [e.target.name]: e.target.value });
//
//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    const success = type === "login" ? await actions.login(formData) : await actions.register(formData);
//    if (success) {
//      navigate(type === "login" ? "/perfil" : "/login");
//    }
//  };
//
//  return (
//    <form onSubmit={handleSubmit}>
//      <input
//        type="email"
//        placeholder="email"
//        name="email"
//        value={formData.email}
//        onChange={handleChange}
//      />
//      <input
//        type="password"
//        placeholder="password"
//        name="password"
//        value={formData.password}
//        onChange={handleChange}
//      />
//      <input type="submit" value={type === "login" ? "Iniciar sesión" : "Registrar"} />
//    </form>
//  );
//};
//