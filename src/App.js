
import Home from "./Comps/Home/Home";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from './Comps/Home/Home'
import SharedLayout from "./Comps/SharedLayout/SharedLayout";
import Error404 from './Comps/err404/err404'

function App() {
  return (
    <BrowserRouter>

     <Routes>

        <Route path='/' element={<SharedLayout />}>

              <Route index element={<Home />}/>

              <Route path="*" element={<Error404 />}/>

        </Route>

     </Routes>

    </BrowserRouter>
  );
}

export default App;
