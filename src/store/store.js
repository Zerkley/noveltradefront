import { create } from "zustand";

const UseGlobalStore = create((set, get) => ({
  variables: {
    test: "Hello World",
    person: {},
    usuario: {},
    token: "",
    userId: "",

    allNonBooks: [
      {
        _id: "661bbcb2ab493d375ee92a97",
        title: "harry potter",
        type: "string",
        state: "string",
        publishedYear: 0,
        genre: "string",
        author: "string",
        size: "string",
        picture: "string",
        owner: "661a9a8cea642e54e378c519",
        __v: 0,
      },
      {
        _id: "661bf35b7e3850be609a9035",
        title: "ESDLA",
        type: "string",
        state: "string",
        publishedYear: 0,
        genre: "string",
        author: "string",
        size: "string",
        picture: "string",
        owner: "661a9a8cea642e54e378c519",
        __v: 0,
      },
      {
        _id: "661bbcb2ab493d375ee92a97",
        title: "100 años de soledad",
        type: "string",
        state: "string",
        publishedYear: 0,
        genre: "string",
        author: "string",
        size: "string",
        picture: "string",
        owner: "661a9a8cea642e54e378c519",
        __v: 0,
      },
      {
        _id: "661bbcb2ab493d375ee92a97",
        title: "La reina libertad",
        type: "string",
        state: "string",
        publishedYear: 0,
        genre: "string",
        author: "string",
        size: "string",
        picture: "string",
        owner: "661a9a8cea642e54e378c519",
        __v: 0,
      },
    ],

    getCrearUsuario: async (email, password) => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: email,
        password: password,
      });

      const requestCrearUsuario = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch(
        "https://noveltradeback.onrender.com/users/signup",
        requestCrearUsuario
      )
        .then((response) => response.json())
        .then((result) => set({ usuario: result }))
        .catch((error) => console.log("error", error));
    },

    getLogin: async (email, password) => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type",
        "application/json");

      const raw = JSON.stringify({
        email: email,
        password: password,

      });

      const requestLogin = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch(
        "https://noveltradeback.onrender.com/users/login/",
        requestLogin
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("La solicitud no fue exitosa");
          }
          return response.json();
        })
        .then((result) => {
          set(state => ({ variables: { ...state.variables, token: result.token, userId: result.userId } }));
          console.log(get().variables.token);
        })
        .catch((error) => {
          console.log("error", error);
          alert("Hubo un error al procesar la solicitud");
        });
    },
    createOffer: async (bookId) => {
      await fetch(`https://noveltradeback.onrender.com/offers/${get().variables.userId}/book/${bookId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${get().variables.token}`
        }
      })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    },
  }}));

export default UseGlobalStore;
