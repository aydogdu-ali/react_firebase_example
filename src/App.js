import { ToastContainer } from "react-toastify";
import "./App.css";
import LoginContextProvider from "./context/LoginContextProvider.jsx";
import AppRouter from "./router/AppRouter";

// Global olarak kullanacağımız curentUser'ın uygulamanın her yerindeçalışması için App'de sarmaladık
// ToastContainer App.js de çağırarak uygulamanın istediğimiz yerinde çağırabiliriz

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <AppRouter />
        <ToastContainer />
      </LoginContextProvider>
    </div>
  );
}

export default App;
