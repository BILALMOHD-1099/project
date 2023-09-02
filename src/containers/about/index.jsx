import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import {Animate} from "react-simple-animate"
import './style.scss'
import {DiApple , DiBootstrap} from 'react-icons/di'
import {FaReact , FaDatabase} from 'react-icons/fa'
import ImageEight from '../../images/image8.png'

const personalDetails = [
  {
    label: "Name : ",
    value:"Bilal Ahmed",
  },

  {
    label: "Age : ",
    value:"20",
  },

  {
    label: "Address : ",
    value:"Hyderabad",
  },

  {
    label: "Email : ",
    value:"bilalfriends1099@gmail.com",
  },

  {
    label: "Contact No : ",
    value:"+91 9652610281",
  },
];

const jobSummary='Hello!, I am Mohd Bilal Ahmed.I have strong background in Computer Science and graduated in the year 2024.I am  Front End Developer from Zahirabad, India. I enjoy taking the problems and turning them into simple and beautiful interface designs . I also have the logic and structure of coding and always strive to write elegant and efficient code ,whether it be HTML, CSS , JavaScript or React Js. When  I am not doing work on pc then you will be able to find me in the playground.'
const  About=()=> {
    return (
     <section id='about' className='about'>

      <PageHeaderContent
      headerText = "About Me"
      icon={<BsInfoCircleFill size={40}/>}
      />
      
      <div className="about__content">
      {/* <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(-200px)',
          }}
          end={{
            transform: 'translatex(0px)',
          }}
        >
          <h3 className='about__content__header-text'>About Me</h3><br />
        </Animate> */}

        <div className='about__content__personalWrapper'>
          
      <Animate play
      duration={1.5}
      delay={1}
      start={{
        transform:'translateX(-900px)'
      }}
      
      end={{
        transform:'translatex(0px)'
      }}>
       
        <h3>Front End Developer</h3>
        <img src={ImageEight} alt="image" className="image8" />
        <p>{jobSummary}</p>

        </Animate>

        <Animate play
      duration={1.5}
      delay={1}
      start={{
        transform:'translateX(500px)'
      }}
      
      end={{
        transform:'translatex(0px)'
      }}>
        <h3 className='PersonalInformationHeaderText'>Personal Information</h3>
        <ul>
         {
          personalDetails.map((item,i)=>(
            <li key={i}>
              <span className='title'>{item.label}</span>
              <span className='value'>{item.value}</span>
            </li>
          ))
         }
        </ul>
        </Animate>
        
        </div>
        <div className='about__content__serviceWrapper'>

           <Animate play
      duration={1.5}
      delay={1}
      start={{
        transform:'translateX(600px)'
      }}
      
      end={{
        transform:'translatex(0px)'
      }}> 
        <div className='about__content__serviceWrapper__innerContent'>

        <div>
          <FaReact  size={60} color='var(--yellow-theme-main-color)'/>
         </div>
         <div >
          <DiApple size={60} color='var(--yellow-theme-main-color)'/>
         </div>
         <div>
          <FaDatabase size={60} color='var(--yellow-theme-main-color)'/>
         </div>
         <div>
          <DiBootstrap size={60} color='var(--yellow-theme-main-color)'/>
         </div>
        </div>
         
      </Animate>
        </div>
        

      </div>
     
     </section>
    )
  }
  
  export default About;