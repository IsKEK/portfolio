import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Section } from '../shared/Section';
import { AnimatedSocialIcon } from 'react-animated-social-icons';
import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const form = useRef();
  const [hint, setHint] = useState('');
  const [color, setColor] = useState('green');

  useEffect(() => {

  }, [hint]);

  const displayHint = () => {
    if (hint === '')
    {
      return null;
    }
    return (
      <span style={{ color: `${color}` }}>
        {hint}
      </span>
    )
  }

  const sendEmail = (e: any) => {
    e.preventDefault();
    const values = e.target;
    for (let i = 0; i < values.length-1; i++) {
      if (values[i].value === '' || values[i].value === null)
      {
        setColor('red');
        switch (values[i].placeholder) {
          case 'Name...':
            setHint('Please input your name');
            break;
          case 'Email...':
            setHint('Please input your email');
            break;
          case 'Type a message...':
            setHint('Message cannot be empty');
            break;
          default:
            setHint('Form cannot be empty');
            break;
        }
        return;
      }
    }

    emailjs.sendForm('service_emw509c', 'template_86u65c3', form.current as any, 'I_civ3jAO0zM_geSy')
      .then((result) => {
        setColor('green');
        console.log(result);
        setHint('Your message was successfully sent. Thank you!');
      }, (error) => {
        setColor('red');
        console.log(error);
        setHint('There was an error sending your email. Please try again later or contact me via my social media below.');
      });
  };

  return (
    <Section id="contact">
      <ContactContent>
        <FormContainer>
          <FormTitle>Send me an email :)</FormTitle>
          <EmailForm ref={form as any} onSubmit={sendEmail} id="email-form">
            <FormLabel>Your Name</FormLabel>
            <FormInput type="text" placeholder="Name..." name="from_name" />
            <FormLabel>Your Email</FormLabel>
            <FormInput type="email" placeholder="Email..." name="email" />
            <FormLabel>Message</FormLabel>
            <FormTextArea rows={4} cols={50} placeholder="Type a message..." name="message" />
            <FormHint>
              {displayHint()}
            </FormHint>
            <Button 
              endIcon={<SendIcon sx={{ display: 'flex', position: 'relative', width: 'calc(5px + 0.6vw)', height: 'calc(5px + 0.6vw)'}} />}
              type="submit"
              form="email-form"
              sx={{ position: 'relative', marginTop: '20px', height: 'calc(20px + 2vw)', width: 'calc(70px + 5vw)', fontSize: 'calc(4px + 0.7vw)', border: '1px solid var(--light-grey)', backgroundColor: 'var(--dark-pink)', color: 'white' }}
            >
              Send email
            </Button>
          </EmailForm>
        </FormContainer>
        <SocialMediaList>
          <SocialMediaListItem>
            <a href="">
              <AnimatedSocialIcon
                brandName="instagram"
                url="https://www.instagram.com/iskaktoltay/"
                animation="float"
                defaultColor="black"
                hoverColor="var(--dark-pink)"
                width="4vh"
                animationDuration={0.8}
              />
            </a>
          </SocialMediaListItem>
          <SocialMediaListItem>
            <a href="">
              <AnimatedSocialIcon
                brandName="github"
                url="https://github.com/IsKEK"
                animation="float"
                defaultColor="black"
                hoverColor="var(--light-grey)"
                width="4vh"
                animationDuration={0.8}
              />
            </a>
          </SocialMediaListItem>
          <SocialMediaListItem>
            <a href="">
              <AnimatedSocialIcon
                brandName="linkedin"
                url="https://www.linkedin.com/in/iskak-toltay/"
                animation="float"
                defaultColor="black"
                hoverColor="blue"
                width="4vh"
                animationDuration={0.8}
              />
            </a>
          </SocialMediaListItem>
        </SocialMediaList>
      </ContactContent>
    </Section>
  )
}

const ContactContent = styled.div`
  height: 100%;
  width: 100%;
  text-align: center; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(var(--light-grey), var(--grey));
  overflow-y: auto;
`;

const FormContainer = styled.div`
  background-color: var(--light-black);
  width: 60%;
  min-heigth: 200px;
  margin-top: 10vh;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.7);
`;

const EmailForm = styled.form`
  width: 100%;
  height: 100%;
`;

const FormTitle = styled.h1`
  color: var(--white);
  margin-bottom: 1vh;
  font-size: calc(10px + 1vw);
`;

const FormLabel = styled.label`
  display: block;
  padding-bottom: 0.5vh;
  font-family: "Tahoma", "Arial";
  font-size: calc(5px + 0.9vw);
  color: var(--white);
`;

const FormInput = styled.input`
  position: relative;
  margin-bottom: 2vh;
  width: 100%;
  height: 10%;
  padding-left: 20px;

  font-size: 2vh;
  font-family: "Tahoma", "Arial";

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--grey);
  }
  :-ms-input-placeholder {
    color: var(--grey);
  }
`;

const FormTextArea = styled.textarea`
  position: relative;
  width: 100%;
  height: 25%;
  padding: 10px 20px;
  
  font-size: 2vh;
  font-family: "Tahoma", "Arial";

  resize: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--grey);
  }
  :-ms-input-placeholder {
    color: var(--grey);
  }
`;

const FormHint = styled.div`
  font-size: calc(5px + 0.8vw);
`;

const SocialMediaList = styled.ul`
  margin-top: 10vh;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SocialMediaListItem = styled.li`
  height: 4vh;
  position: relative;
  list-style: none;
  margin: 0 3vh;
  cursor: pointer;
`;

export default { Contact };
export { Contact };
