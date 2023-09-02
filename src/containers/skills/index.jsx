import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import './style.scss';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import ImageNine from '../../images/image9.png';
import ImageTen from '../../images/image10.png';
import ImageEleven from '../../images/image11.png';
import ImageTwelve from '../../images/image12.png';
import ImageThirteen from '../../images/image13.png';
import ImageFourteen from '../../images/image14.png';
import ImageFifteen from '../../images/image15.png';
import ImageSixteen from '../../images/image16.png';
import ImageSeventeen from '../../images/image17.png';
import ImageEighteen from '../../images/image18.png';

const Skills = () => {
  const skillsData = [
    {
      label: 'FRONT END',
      data: [
        {
          skillName: 'HTML',
          image: ImageNine,
        },
        {
          skillName: 'CSS',
          image: ImageTen,
        },
        {
          skillName: 'JAVASCRIPT',
          image: ImageEleven,
        },
      ],
    },
    {
      label: 'PROGRAMMING',
      data: [
        {
          skillName: 'C',
          image: ImageTwelve,
        },
        {
          skillName: 'JAVA',
          image: ImageThirteen,
        },
        {
          skillName: 'PYTHON',
          image: ImageFourteen,
        },
        {
          skillName: 'C++',
          image: ImageFifteen,
        },
      ],
    },
    {
      label: 'FRAMEWORKS',
      data: [
        {
          skillName: 'REACT JS',
          image: ImageSixteen,
        },
        {
          skillName: 'ANGULAR JS',
          image: ImageSeventeen,
        },
        {
          skillName: 'FIGMA',
          image: ImageEighteen,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<BsInfoCircleFill size={40} />} />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: 'translateX(-200px)',
              }}
              end={{}}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
              <div>
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    key={`${item.label}-${skillItem.skillName}`}
                    keyframes={['opacity: 1', 'opacity: 0']}
                    iterationCount={1}
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <img src={skillItem.image} alt={skillItem.skillName} className="skill-image" />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
