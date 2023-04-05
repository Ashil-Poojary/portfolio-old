
import LaunchPage from "./components/LaunchPage";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<LaunchPage />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
