import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
const App=()=>{


return(
    <div>
        <BrowserRouter>
        <Home/>
        <Routes>
            <Route element={<Login/>} path="/login"/>
        </Routes>
        </BrowserRouter>
    </div>
)
}
export default App;