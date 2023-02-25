
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

// firebase bizim için verdiği  konfigürasyon dosyasını import ediyoruz.
const firebaseConfig = {
  apiKey: "AIzaSyAME7TpxwrhqnLa8Jspr8aSocx1WTzRCF8",
  authDomain: "picture-gallery-2023.firebaseapp.com",
  projectId: "picture-gallery-2023",
  storageBucket: "picture-gallery-2023.appspot.com",
  messagingSenderId: "685111525078",
  appId: "1:685111525078:web:d7085e91c421c1b16b9377",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

// fire base ile kullanıcı oluşturmak için kullanılan yöntem

export const register = async (email, password, displayName) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    //kullanıcı kayıt olur olmaz proflini ismini güncelleme methodu (register sayfasında parametre olarak gönderiliyor.)
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    return user;
  } catch (error) {
    return false;
  }
};

// var olan kullanıcı giriş yaparsa
export const UserLogin = async (email, password, navigate) => {
  try {
    let uselogin = await signInWithEmailAndPassword(auth, email, password);

    // navigate("/");
    // toastSuccessNotify("Hoşgeldiniz");
    console.log(uselogin);
  } catch (error) {
    console.log(error.message);
  }
};

//kullanıcı bilgisini takip eden yöntem
//giriş-çıkış işlemleri için

  export const userObserver = (setCurrentUser)=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email, displayName, photoURL}= user
       setCurrentUser({ email, displayName, photoURL });
      } else {
        /*çıkış yaptığında displayname  gözükmeyecek*/
        setCurrentUser(false)
        console.log("kullanıcı çıkış yaptı")
      }
    });

  }


    // kullanıcı çıkış yaptığında kullanılacak yöntem

  export const logOut = () => {
    try {
      signOut(auth);
        
    } catch (error) {
      console.log(error);
    }
  };