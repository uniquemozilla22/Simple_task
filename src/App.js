import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import fetch_data from "./Store/actions/fetch_data.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_data());
  }, []);
  return <>App</>;
}

export default App;
