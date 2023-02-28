import { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";


// LoginContext Adında  contextimizi oluşturuyoruz.
export const LoginContext = createContext();

 const LoginContextProvider = ({ children }) => {
   //Global bir değişken tanımlıyoruz. Bunu firebase'den dönen obje'den alıyorum.
   const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
      userObserver(setCurrentUser);
    }, []);

   return (
     <LoginContext.Provider value={{ currentUser , setCurrentUser }}>
       {children}
     </LoginContext.Provider>
   );
 };

export default LoginContextProvider;