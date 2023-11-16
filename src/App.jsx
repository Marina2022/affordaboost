import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import AppLayout from "./components/layout/AppLayout/AppLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Boosting from "./pages/Boosting.jsx";
import Coaching from "./pages/Coaching.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <AppLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/boosting' element={<Boosting/>}/>
          <Route path='/coaching' element={<Coaching/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App