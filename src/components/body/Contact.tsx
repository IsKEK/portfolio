import React, { useRef } from 'react'
import styled from 'styled-components';
import Section from '../shared/Section';
import { AnimatedSocialIcon } from 'react-animated-social-icons';
import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_emw509c', 'template_86u65c3', form.current as any, 'I_civ3jAO0zM_geSy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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
            <Button endIcon={<SendIcon />} type="submit" form="email-form" sx={{ position: 'relative', marginTop: '30px', border: '1px solid var(--light-grey)', backgroundColor: 'var(--dark-pink)', color: 'white' }}>
              Send email
            </Button>
          </EmailForm>
        </FormContainer>
        <SocialMediaList>
          <SocialMediaListItem>
            <a href="">
              <AnimatedSocialIcon
                brandName="instagram"
                url=""
                animation="float"
                defaultColor="black"
                hoverColor="var(--dark-pink)"
                width="2em"
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
                width="2em"
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
                width="2em"
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  background-image: linear-gradient(var(--light-blue), var(--pink), var(--purple));
`;

const FormContainer = styled.div`
  background-color: var(--light-black);
  width: 100vh;
  height: 50vh;
  padding: 30px 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const EmailForm = styled.form`
  width: 100%;
  height: 100%;
`;

const FormTitle = styled.h1`
  color: var(--white);
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 3vh;
`;

const FormLabel = styled.label`
  display: block;
  // margin-right: 83vh;
  padding-bottom: 5px;
  // position: relative;
  font-family: "Tahoma", "Arial";
  font-size: 2vh;
  color: var(--white);
`;

const FormInput = styled.input`
  position: relative;
  margin-bottom: 20px;
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
  height: 20%;
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

const FormSubmit = styled.input`
  // position: relative;
  // display: inherit;
  width: 15%;
  height: 40px;
  margin-top: 20px;
  background-color: var(--pink);
  border: 2px solid var(--light-grey);
`;

const SocialMediaList = styled.ul`
  margin-top: 20vh;
  position: relative;
  display: flex;
`;

const SocialMediaListItem = styled.li`
  position: relative;
  list-style: none;
  margin: 0 20px;
  cursor: pointer;
  &:hover a::before {
    height: 100%;
  }
`;

export default { Contact };
export { Contact };
