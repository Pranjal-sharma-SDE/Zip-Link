import { Routes, Route, Navigate } from "react-router-dom"
import NavMain from "./components/Nav/NavMain"
import Home from "./pages/Home"
import Analytics from "./pages/Analytics"
import Signin from "./pages/Signin"
import Footer from "./components/Footer/Footer"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import LoggedOut from "./components/LoggedOut/LoggedOut"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import TermsOfService from "./pages/TOS"
import NotFound from "./pages/NotFound"

function App() {
	return (
		<div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <NavMain />
        <div className="relative">
		{/* <div className="gradient" /> */}
        </div>
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/notfound" element={<NotFound />} /> 
          <Route path="*" element={<Navigate to="/notfound" />} />

          <Route element={<LoggedOut />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path='/:shortid' element={<Analytics />} />
          </Route>
        </Routes>

        </div>
      </main>
      <Footer />
    </div>
	)
}

export default App
