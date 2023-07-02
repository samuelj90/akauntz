import { Provider } from "react-redux";
import store from "./store/configureStore";
import "./App.css";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Provider store={store}>
      <AppRouter>
      </AppRouter>
    </Provider>
  );
}

export default App;
