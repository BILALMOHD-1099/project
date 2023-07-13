// import logo from './logo.svg';
import './App.scss';
// import Headers from './components/Headers';
import {Routes , Route, useLocation} from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Certificates from './containers/certificates';
import Skills from './containers/skills';
import Projects from './containers/projects';
import Contact from './containers/contact';
import Navbar from './components/Navbar';
import particles from './utils.js/particles';
function App() {
  const location=useLocation();
  console.log(location);
  const handleInit = async (main) => {
   await loadFull(main)
  }


  const renderParticleJsInHomePage = location.pathname === "/";

  return (
   <>
    {/* <h1>App works well</h1> */}
    <div className="App">
      {/* particles */}
    {renderParticleJsInHomePage && (
      <Particles id='particles' options={particles} init={handleInit}/>
    )}
      

      {/* Navbar */}
      <Navbar/>

      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/certificates' element={<Certificates/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
    </div>
    </>
  );
 
}


export default App;
