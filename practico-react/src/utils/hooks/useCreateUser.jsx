import React from "react";
import { Context } from "../../context/context";
import { axiosPost } from "../api";

const useCreateUser = (userData) => {
   const [ createUser, setCreateUser ] = React.useState();
   const [ loading, setLoading ] = React.useState(false);
   const { state, addMsg, removeMsg } = React.useContext(Context);
   React.useEffect( async () => {
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
               setCreateUser(data);
               addMsg('A01');
            }
         } catch (error) {
            setCreateUser(error);
         }
         setLoading(false);
      };
   }, [userData]);

   return { createUser, loading };
};

export { useCreateUser };