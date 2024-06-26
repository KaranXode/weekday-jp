import { Provider } from "react-redux";
import "./App.css";
import Layout from "./Components/Layout";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
