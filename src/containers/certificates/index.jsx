import React, {useState} from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import ImageOne from '../../certi/img1.png';
// import ImageTwo from '../../certi/img2.png';
import './style.scss';

const projectData = [
  {
    id: 2,
    name: 'Oasis Infobyte',
    image: ImageOne,
    link:''
  },
  // {
  //   id: 2,
  //   name: 'The one',
  //   image: ImageTwo,
  //   link:''
  // },
  // {
  //   id: 2,
  //   name: 'The two',
  //   image: ImageTwo,
  //   link:''
  // },
]

// const seperateData = [
  
//   {
//     seperateId: 1,
//     label: 'certificates',
//   },
  

// ];


const  Certificates=()=> {

  const [seperatedValue, setSeperatedValue] = useState(1);
  const [hoveredValue,setHoveredValue]=useState(null)
  function handleSeperate(currentId) {
    setSeperatedValue(currentId);
  }
  function handleHover(index){
    setHoveredValue(index)
  }
 console.log("---------")
 console.log(seperatedValue)
 const seperatedItems =
 seperatedValue === 1
   ? projectData
   : projectData.filter((item) => item.id === seperatedValue);
    return (
      <section id='certificates' className='certificates'>

      <PageHeaderContent
      headerText = "My Certificates"
      icon={<BsInfoCircleFill size={40}/>}
      />
      <div className="certificate__content">
        <ul className="certificate__content__filter">
          {/* {seperateData.map((item) => (
            <li
              className={item.seperateId === seperatedValue ? 'active' : ''}
              onClick={() => handleSeperate(item.seperateId)}
              key={item.seperateId}
            >
              {item.label}
            </li>
          ))} */}
        </ul>

        <div className="certificate__content__cards">
          {seperatedItems.map((item,index) => (
            <div className="certificate__content__cards__item" key={`cardItem${item.name.trim()}`}
            onMouseEnter={()=>handleHover(index)}
            onMouseLeave={()=>handleHover(null)}>
              <div className="certificate__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>
              <div className='overlay'>
                {index===hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
     </section>
    )
  }
  
  export default Certificates;