
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/shared-layout/SharedLayout";
import Home from './pages/home/Home'
import ProfessionalExperience from './pages/professional-experience/professionalExperience'
import Projects from './pages/projects/Projects'
import Skills from './pages/skills/Skills'
import Contact from "./pages/contact/Contact";
import Error404 from './pages/err404/Error404'

function App() {
  return (
    <BrowserRouter>

     <Routes>

        <Route path='/' element={<SharedLayout />}>

              <Route index element={<Home />}/>

              <Route path="projects" element={<Projects />}/>

              <Route path="professional-experience" element={<ProfessionalExperience />}/>
              
              <Route path="skills" element={<Skills />}/>

              <Route path="contact" element={<Contact />}/>

              <Route path="*" element={<Error404 />}/>

        </Route>

     </Routes>

    </BrowserRouter>
  );
}

export default App;
