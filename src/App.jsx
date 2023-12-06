import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import AppLayout from "./components/layout/AppLayout/AppLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Boosting from "./pages/Boosting/Boosting.jsx";
import Coaching from "./pages/Coaching/Coaching.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import FaqPage from "./pages/FaqPage/FaqPage.jsx";
import Legal from "@/pages/Legal/Legal.jsx";
import TermsOfUse from "@/pages/TermsOfUse/TermsOfUse.jsx";
import Privacy from "@/pages/Privacy/Privacy.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <AppLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/boosting' element={<Boosting/>}/>
          <Route path='/coaching' element={<Coaching/>}/>
          <Route path='/faq' element={<FaqPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/legal' element={<Legal/>}/>
          <Route path='/terms' element={<TermsOfUse/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
