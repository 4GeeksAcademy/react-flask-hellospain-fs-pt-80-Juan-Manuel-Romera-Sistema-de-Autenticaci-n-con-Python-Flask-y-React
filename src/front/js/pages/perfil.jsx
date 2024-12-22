import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Perfil = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            navigate('/login'); // Redirige al inicio de sesión si no hay token
        } else {
            actions.getUserInfo();
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('token'); // Limpia el token
        navigate('/login'); // Redirige al inicio de sesión
    };

    return (
        <div>
            <h2>Perfil!</h2>
            <p>correo: {store.user?.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};



//import React, { useActionState, useContext, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
//import { Context } from "../store/appContext";
//
//export const Perfil = () => {
//const {store, actions} = useContext(Context)
//    const navigate = useNavigate()
//
//    useEffect(()=>{
//        if (!localStorage.getItem('token')) navigate('/')
//            actions.getUserInfo()
//    },[])
//
//    const handleLogout = () => {
//        localStorage.removeItem('token')
//        navigate('/')
//    }
//
//    return (
//        <div>
//            <h2>
//                Perfil!
//            </h2>
//            <p>correo: {store.user?.email}</p>
//            <button onClick={handleLogout}>
//                logout
//            </button>
//        </div>
//    )
//}