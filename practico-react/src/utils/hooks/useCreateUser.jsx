import React from "react";
import { Context } from "../../context/context";
import { axiosPost } from "../api";

const useCreateUser = (userData) => {
   const [ createUser, setCreateUser ] = React.useState(); //MAIN STATE WILL BE EXPORTED TO GET API INFORMATION
   const [ loading, setLoading ] = React.useState(false); //LOADER
   const { state, addMsg, removeMsg } = React.useContext(Context); //IMPORT FROM CONTEXT TO MANAGE MSGS
   React.useEffect( async () => {// AXIOS POST REQUEST: CREATE NEW USER
      if (userData){
         setLoading(true); 
         try {
            const {data, status} = await axiosPost('users', {
               data: {
                  "name": userData.name,
                  "email": userData.email,
                  "password": userData.password,
                  "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
               }
            });
            if (status === 201) {
               setCreateUser(data); //MAIN DATA
               addMsg('A01'); //ADD SUCCESS MSG
            }
         } catch (error) {
            setCreateUser(error); //MANAGE ERRORS
         }
      };
      setLoading(false); //STOP LOADING (NON-PARAMS CASE)
   }, [userData]);

   return { createUser, loading };
};

export { useCreateUser };