import './App.css';
import Courosel from './Pages/Courosel';
import Navbar from './Pages/Navbar';
import Profile from './Pages/Profile';
import Skills from './Pages/Skills';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <Skills/>
      <Courosel/>
    </div>
  );
}

export default App;
