
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Comps/Home/Home'
import SharedLayout from "./Comps/SharedLayout/SharedLayout";
import Projects from './Comps/Projects/Projects'
import Skills from './Comps/Skills/Skills'
import Contact from "./Comps/Contact/Contact";
import Error404 from './Comps/err404/err404'

function App() {
  return (
    <BrowserRouter>

     <Routes>

        <Route path='/' element={<SharedLayout />}>

              <Route index element={<Home />}/>

              <Route path="projects" element={<Projects />}/>
              
              <Route path="skills" element={<Skills />}/>

              <Route path="contact" element={<Contact />}/>

              <Route path="*" element={<Error404 />}/>

        </Route>

     </Routes>

    </BrowserRouter>
  );
}

export default App;
