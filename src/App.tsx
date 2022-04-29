import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./routes";
import AppProvider from "./hooks";

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
