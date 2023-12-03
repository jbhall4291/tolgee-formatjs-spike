import { LanguageSelect } from "./components/LanguageSelect";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

// navbar links
import Home from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ServicesCitizenship from "./pages/ServicesCitizenship";
import ServicesResidences from "./pages/ServicesResidences";

// import { useTranslate, useTolgee } from "@tolgee/react"
// import { IntlProvider, FormattedNumber, FormattedPlural, FormattedDate } from 'react-intl'

function App() {

  // const tolgee = useTolgee(['language']);
  // console.log(tolgee.getLanguage())

  return (
    <>
      {/* <LanguageSelect /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/citizenship" element={<ServicesCitizenship />} />
        <Route path="/services/residences" element={<ServicesResidences />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
