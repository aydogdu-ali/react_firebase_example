
import './App.css';
import LoginContextProvider from './context/LoginContextProvider.jsx';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <AppRouter />
      </LoginContextProvider>
    </div>
  );
}

export default App;
