import { useDispatch } from "react-redux";
import NavBar from "./Components/NavBar/NavBar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { useEffect } from "react";
import { fetchTickets } from "./redux/thunk";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickets());
  }, []);
  return (
    <>
      <NavBar />
      <Dashboard />
    </>
  );
}

export default App;
