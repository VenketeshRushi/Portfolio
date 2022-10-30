import "./App.css";
import Courosel from "./Pages/Courosel";
import Navbar from "./Pages/Navbar";
import Profile from "./Pages/Profile";
import Skills from "./Pages/Skills";
import ContactMe from "./Pages/ContactMe";
import Footer from "./Pages/Footer";
import Github from "./Pages/Github";
import GoUp from "./Pages/GoUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Skills />
      <Courosel />
      <Github />
      <GoUp />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
