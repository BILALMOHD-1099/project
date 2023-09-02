import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import ImageOne from '../../images/image1.png';
import ImageTwo from '../../images/image2.png';
import ImageThree from '../../images/image3.png';
import ImageFour from '../../images/image4.png';
import ImageFive from '../../images/image5.png';
import ImageSix from '../../images/image6.png';
import ImageSeven from '../../images/image7.png';
import './style.scss';
import { Animate } from 'react-simple-animate';


const projectData = [
  {
    id: 2,
    name: 'Explore AR',
    image: ImageOne,
    link:''
  },
  {
    id: 2,
    name: 'My Portfolio',
    image: ImageTwo,
    link:''
  },
  {
    id: 3,
    name: 'My app',
    image: ImageThree,
    link:''
  },
  {
    id: 2,
    name: 'Promethean2k22',
    image: ImageFour,
    link:''
  },
  {
    id: 2,
    name: 'Calculator',
    image: ImageFive,
    link:''
  },
  {
    id: 2,
    name: 'Todo App',
    image: ImageSix,
    link:''
  },
  {
    id: 2,
    name: 'Tribute Page',
    image: ImageSeven,
    link:''
  },
];

const filterData = [
  {
    filterId: 1,
    label: 'All',
  },
  {
    filterId: 2,
    label: 'Development',
  },
  {
    filterId: 3,
    label: 'Design',
  },
];

const Projects = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue,setHoveredValue]=useState(null)
  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }
  function handleHover(index){
    setHoveredValue(index)
  }
 console.log("---------")
 console.log(hoveredValue)
  const filteredItems =
    filteredValue === 1
      ? projectData
      : projectData.filter((item) => item.id === filteredValue);

  return (
    <section id="projects" className="projects">
      <PageHeaderContent headerText="My Projects" icon={<BsInfoCircleFill size={40} />} />
      <div className="projects__content">
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
          <h3 className='projects__content__header-text'>My Projects</h3>
        </Animate> */}
        <ul className="projects__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? 'active' : ''}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="projects__content__cards">
          {filteredItems.map((item,index) => (
            <div className="projects__content__cards__item" key={`cardItem${item.name.trim()}`}
            onMouseEnter={()=>handleHover(index)}
            onMouseLeave={()=>handleHover(null)}>
              <div className="projects__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="dummy data"/>
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
  );
};

export default Projects;
