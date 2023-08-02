import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { Animate } from 'react-simple-animate'; 
import particles from '../../utils.js/particles';
import { Link } from 'react-scroll';
const  Home=()=> {

  const navigate = useNavigate();
  console.log(navigate);

  // const handleNavigateToContactMePage = () => {

  //   navigate('/contact');
  
  // }
    return (
      
     <section id='home' className='home'>
      <div className="home__text-wrapper">
        
        <h1>
          Hello , I'm Mohd Bilal Ahmed
          <br />
          Front end Developer | <br />
          Computer Science UnderGraduate
        </h1>
      </div>
      <Animate play
      duration={1.5}
      delay={1}
      start={{
        transform:'translateY(550px)'
      }}
      
      end={{
        transform:'translatex(0px)'
      }}>
      <div className="home__contact-me">
      <Link to="/contact" smooth={true} duration={200} offset={-50}>
        <button>Hire Me</button>
      </Link>

      </div>
      </Animate>
      
      
     </section>
    )
  }
  
  export default Home;
