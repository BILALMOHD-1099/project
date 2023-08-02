import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import emailjs from 'emailjs-com'; // Import emailjs-com library
import './style.scss';

const Contact = () => {
  const sendEmail = (e) => {

    e.preventDefault();

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your Email.js credentials
    emailjs
      .sendForm('service_89mybb3', 'template_csk2znm', e.target, 'e3_J0EWS8s4bag0fi')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.log('Error sending email:', error.text);
        }
      );

    // Clear the form after sending
    e.target.reset();
  };

  return (
    <section id='contact' className='contact'>
      <PageHeaderContent headerText='My Contact' icon={<BsInfoCircleFill size={40} />} />
      <div className='contact__content'>
        <Animate
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
          <h3 className='contact__content__header-text'>Get in Touch</h3>
        </Animate>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(200px)',
          }}
          end={{
            transform: 'translatex(0px)',
          }}
        >
          <div className='contact__content__form'>
            <form onSubmit={sendEmail}>
              <div className='contact__content__form__controlswrapper'>
                <div>
                  <input required name='name' className='inputName' type={'text'} />
                  <label htmlFor='name' className='nameLabel'>
                    Name
                  </label>
                </div>
                <div>
                  <input required name='email' className='inputEmail' type={'text'} />
                  <label htmlFor='email' className='emailLabel'>
                    Email
                  </label>
                </div>
                <div>
                  <input required name='phone' className='inputPhone' type={'text'} />
                  <label htmlFor='phone' className='phoneLabel'>
                    Phone
                  </label>
                </div>
                <div>
                <input  required name='subject' className='inputSubject' type={'text'} />
                <label htmlFor="subject" className='subjectLabel'>Subject</label>
                </div>
                <div>
                  <textarea required name='description' className='inputDescription' type={'text'} rows='5' />
                  <label htmlFor='description' className='descriptionLabel'>
                    Description
                  </label>
                </div>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
