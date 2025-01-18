const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getUserInfo: async () => {
				try {
					const resp = await fetch('https://bug-free-doodle-x59j9w77pprx2vqv4-3001.app.github.dev/api/user_info', {
						headers: {
							'Authorization': `Bearer ${localStorage.getItem('token')}`
						}
					})
					if (!resp.ok) throw new Error('error fetching books')
					const data = await resp.json()
					setStore({user: data.payload})
				} catch (error) {
					console.log(error);
				}
			},
			login: async formData => {
				try {
					const resp = await fetch('https://bug-free-doodle-x59j9w77pprx2vqv4-3001.app.github.dev/api/login', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
					})
					if (!resp.ok) throw new Error('error fetching books')
					const data = await resp.json()
					setStore({token: data.token})
					localStorage.setItem('token', data.token)

				} catch (error) {
				}
			},
			register: async formData => {
				try {
					const resp = await fetch('https://bug-free-doodle-x59j9w77pprx2vqv4-3001.app.github.dev/api/register', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
					})
					if (!resp.ok) throw new Error('error fetching books')
					const data = await resp.json()
					setStore({token: data.token})
					localStorage.setItem('token', data.token)
				} catch (error) {
					console.log(error);
				}
			},
			getBooks: async () => {
				try {
					const resp = await fetch('https://bug-free-doodle-x59j9w77pprx2vqv4-3001.app.github.dev/api/books')
					if (!resp.ok) throw new Error('error fetching books')
					const data = await resp.json()
					setStore({books: data.payload})
				} catch (error) {
					console.log(error);
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;


//const getState = ({ getStore, getActions, setStore }) => {
//	return {
//		store: {
//			message: null,
//			demo: [
//				{
//					title: "FIRST",
//					background: "white",
//					initial: "white"
//				},
//				{
//					title: "SECOND",
//					background: "white",
//					initial: "white"
//				}
//			]
//		},
//		actions: {
//			// Use getActions to call a function within a fuction
//			exampleFunction: () => {
//				getActions().changeColor(0, "green");
//			},
//
//			getMessage: async () => {
//				try{
//					// fetching data from the backend
//					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
//					const data = await resp.json()
//					setStore({ message: data.message })
//					// don't forget to return something, that is how the async resolves
//					return data;
//				}catch(error){
//					console.log("Error loading message from backend", error)
//				}
//			},
//			login: async (data) => {
//					try {
//					  const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
//						method: "POST",
//						headers: { "Content-Type": "application/json" },
//						body: JSON.stringify(data),
//					  });
//					  if (resp.ok) {
//						const body = await resp.json();
//						localStorage.setItem("token", body.token);
//						return true;
//					  } else {
//						alert("Error en las credenciales");
//						return false;
//					  }
//					} catch (error) {
//					  console.error("Error during login", error);
//					  return false;
//					}
//				  },
//				  register: async (data) => {
//					try {
//					  const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
//						method: "POST",
//						headers: { "Content-Type": "application/json" },
//						body: JSON.stringify(data),
//					  });
//					  if (resp.ok) {
//						alert("Usuario registrado exitosamente");
//						return true;
//					  } else {
//						alert("Error durante el registro");
//						return false;
//					  }
//					} catch (error) {
//					  console.error("Error during registration", error);
//					  return false;
//					}
//				  },
//				  getUserInfo: async () => {
//					try {
//					  const resp = await fetch(process.env.BACKEND_URL + "/api/user_info", {
//						headers: { Authorization: "Bearer " + localStorage.getItem("token") },
//					  });
//					  if (resp.ok) {
//						const body = await resp.json();
//						setStore({ ...store, user: body.payload });
//					  } else {
//						localStorage.removeItem("token");
//						console.error("Error fetching user info");
//					  }
//					} catch (error) {
//					  console.error("Error during getUserInfo", error);
//					}
//				  },
//			changeColor: (index, color) => {
//				//get the store
//				const store = getStore();
//
//				//we have to loop the entire demo array to look for the respective index
//				//and change its color
//				const demo = store.demo.map((elm, i) => {
//					if (i === index) elm.background = color;
//					return elm;
//				});
//
//				//reset the global store
//				setStore({ demo: demo });
//			}
//		}
//	};
//};
//
//export default getState;
//