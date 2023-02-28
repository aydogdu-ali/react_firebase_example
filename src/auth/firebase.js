import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../assets/ToastNotify";

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
//navigate i parametre olarak register componentinden aldık.
// başarılı giriş olursa anasayfaya yönlendirecek.

export const register = async (email, password, displayName,navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    //kullanıcı kayıt olur olmaz profilini ismini güncelleme methodu (register sayfasında parametre olarak gönderiliyor.)
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    toastSuccessNotify(" Everything is Okey");
    navigate("/");
  } catch (error) {
    toastErrorNotify("Error Your information is wrong");
    return false;
  }
};

// var olan kullanıcı giriş yaparsa
// var olan kullanıcının giriş yapması için kullanılan yöntem.
//navigate'i parametre olarak login componentinden aldık.
// başarılı giriş olursa anasayfaya yönlendirecek.
export const UserLogin = async (email, password, navigate) => {
  try {
    let uselogin = await signInWithEmailAndPassword(auth, email, password);

    navigate("/");
    toastSuccessNotify("Welcome");
    console.log(uselogin);
  } catch (error) {
    toastErrorNotify("Error Your information is wrong");
    console.log(error.message);
  }
};

//kullanıcı bilgisini takip eden yöntem
//giriş-çıkış işlemleri için

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName} = user;
      setCurrentUser({ email, displayName });
    } else {
      /*çıkış yaptığında displayname  gözükmeyecek*/
      setCurrentUser(false);
      console.log("kullanıcı çıkış yaptı");
    }
  });
};

// kullanıcı çıkış yaptığında kullanılacak yöntem
// kullanıcı çıkış yaptığında kullanılacak yöntem
// kullanıcıyı navigate ile sign in sayfasına yönlendirdik.

export const logOut = (navigate) => {
  try {
    signOut(auth);
    toastWarnNotify("now!  log out");
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};
