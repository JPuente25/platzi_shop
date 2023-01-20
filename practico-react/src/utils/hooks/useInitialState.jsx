import React from "react";

const initialValue = {
   modal: false, //MODAL TAB ON MENU
   cart: [],
   orders: false, //ORDERS TAB ON > 640PX
   userData: null, //DATA TO KNOW IF PERSISTED ACCESS TOKEN IS VALID
   userTokens: JSON.parse(localStorage.getItem('sale_user_session')), 
   error: [], //ERRORS
   msg: [], //SUCCESS
};

export const useInitialValue = () => {
   const [state, setState] = React.useState(initialValue);

   const addToCart = (payload) => { //ADD A PRODUCT TO CART
      setState({
         ...state,
         cart: [...state.cart, payload],
      });
   };

   const deleteFromCart = (payload) => { //DELETE A PRODUCT FROM CART
      const newCart = state.cart.filter(item => item.id !== payload);
      setState({
         ...state,
         cart: newCart
      });
   };

   const toggleModal = () => { //ENABLE MODAL TAB
      setState({
         ...state,
         modal: !state.modal
      });
   };

   const toggleOrders = () => { //ENABLE ORDERS TAB
      setState({
         ...state,
         orders: !state.orders
      });
   };

   const setUserData = (payload) => { //SAVES USER DATA
      setState({
         ...state,
         userData: payload,
      });
   };

   const setUserTokens = (payload) => { //SAVE USER TOKENS
      setState({
         ...state,
         userTokens: payload,
      });
   };
   
   const addError = (payload) => { //ADDS AN ERROR 
      if (!state.error.includes(payload)){
         setState({
            ...state,
            error: [...state.error, payload],
         });
      }
   };

   const removeError = (payload) => { //REMOVES AN ERROR
      if (state.error.includes(payload)) {
         const errorIndex = state.error.indexOf(payload);
         state.error.splice(errorIndex, 1);
         setState({
            ...state,
            error: state.error,
         });
      }
   };

   const addMsg = (payload) => { //ADDS A SUCESS MSG
      if (!state.msg.includes(payload)){
         setState({
            ...state,
            msg: [...state.msg, payload],
         });
      }
   };

   const removeMsg = (payload) => { //REMOVES A SUCESS MSG
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

