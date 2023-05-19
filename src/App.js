import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import { APIProvider } from "./context/ApiContext";
import Snackbar from "./components/snackbar";
import "./App.css";
import "./assets/style.css";
import { FundProvider } from "./context/FundContext";

function App() {
  return (
    <Provider store={store}>
      <APIProvider>
        <FundProvider>
          <Routes />
          <Snackbar />
        </FundProvider>
      </APIProvider>
    </Provider>
  );
}

export default App;
