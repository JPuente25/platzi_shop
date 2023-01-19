import React from "react";

const initialValue = {
   modal: false,
   cart: [],
   orders: false,
   userData: null,
   userTokens: JSON.parse(localStorage.getItem('sale_user_session')),
   error: [],
   msg: [],
};

export const useInitialValue = () => {
   const [state, setState] = React.useState(initialValue);

   const addToCart = (payload) => {
      setState({
         ...state,
         cart: [...state.cart, payload],
      });
   };

   const deleteFromCart = (payload) => {
      const newCart = state.cart.filter(item => item.id !== payload);
      setState({
         ...state,
         cart: newCart
      });
   };

   const toggleModal = () => {
      setState({
         ...state,
         modal: !state.modal
      });
   };

   const toggleOrders = () => {
      setState({
         ...state,
         orders: !state.orders
      });
   };

   const setUserData = (payload) => {
      setState({
         ...state,
         userData: payload,
      });
   };

   const setUserTokens = (payload) => {
      setState({
         ...state,
         userTokens: payload,
      });
   };

   
   const addError = (payload) => {
      if (!state.error.includes(payload)){
         setState({
            ...state,
            error: [...state.error, payload],
         });
      }
   };

   const removeError = (payload) => {
      if (state.error.includes(payload)) {
         const errorIndex = state.error.indexOf(payload);
         state.error.splice(errorIndex, 1);
         setState({
            ...state,
            error: state.error,
         });
      }
   };

   const addMsg = (payload) => {
      if (!state.msg.includes(payload)){
         setState({
            ...state,
            msg: [...state.msg, payload],
         });
      }
   };

   const removeMsg = (payload) => {
      if (state.msg.includes(payload)) {
         const msgIndex = state.msg.indexOf(payload);
         state.msg.splice(msgIndex, 1);
         setState({
            ...state,
            msg: state.msg
         });
      }
   };

   return { state, addToCart, deleteFromCart, toggleModal, toggleOrders, setUserData, setUserTokens, addError, removeError, addMsg, removeMsg };
};

export const errorCode = {
   "001": "Su sesion ha expirado, intente iniciar sesion de nuevo",
   "002": "Usuario o clave invalidos"
}

export const msgCode = {
   "A01": "Usuario creado con exito. Probemoslo!",
}

