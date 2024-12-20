import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { FormularioUsuario } from "../component/fomularioUsuario.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	const handleClick = () => {
		if (localStorage.getItem('token')) navigate('/perfil') 
	}

	return (
		<div className="text-center mt-5">
			<h2>register</h2>
			<FormularioUsuario type={'register'} />
			<h2>login</h2>
			<FormularioUsuario type={'login'} />
			<p onClick={handleClick}>
			ir a perfil
			</p>
		</div>
	);
};

//import React, { useContext } from "react";
//import { Context } from "../store/appContext";
//import rigoImageUrl from "../../img/rigo-baby.jpg";
//import "../../styles/home.css";
//
//export const Home = () => {
//	const { store, actions } = useContext(Context);
//
//	return (
//		<div className="text-center mt-5">
//			<h1>Hello Rigo!!</h1>
//			<p>
//				<img src={rigoImageUrl} />
//			</p>
//			<div className="alert alert-info">
//				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
//			</div>
//			<p>
//				This boilerplate comes with lots of documentation:{" "}
//				<a href="https://start.4geeksacademy.com/starters/react-flask">
//					Read documentation
//				</a>
//			</p>
//		</div>
//	);
//};
//