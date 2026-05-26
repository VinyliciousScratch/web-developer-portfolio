import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Home from '../pages/Home/Home.jsx'
import Portfolio from '../pages/Portfolio/Portfolio.jsx'
import Other from '../pages/Other/Other.jsx'
import Contact from '../pages/Contact/Contact.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'
function AppRouter() {
    return(
       <Router>
            <Header />
            <Routes>
                <Route path = "/" element ={<Home />} />
                <Route path = "/Portfolio" element ={<Portfolio />} />
                <Route path = "/Other" element ={<Other />} />
                <Route path = "/Contact" element ={<Contact/>} />
                <Route path = "*" element ={<NotFound />} />
            </Routes>
        </Router>
    )
}
export default AppRouter;