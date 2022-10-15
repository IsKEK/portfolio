import React from 'react'
import styled from 'styled-components';
import Section from '../shared/Section';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { AnimatedSocialIcon } from 'react-animated-social-icons'

function Contact() {
  return (
    <Section id="contact">
      <ContactContent>
        <SocialMediaList>
          <SocialMediaListItem>
            <a href="">
              <AnimatedSocialIcon
                brandName="instagram"
                url=""
                animation="float"
                defaultColor="black"
                hoverColor="pink"
                width="2em"
                animationDuration={0.8}
              />
            </a>
          </SocialMediaListItem>
          <SocialMediaListItem>
            <a href="">
              <AnimatedSocialIcon
                brandName="github"
                url=""
                animation="float"
                defaultColor="black"
                hoverColor="grey"
                width="2em"
                animationDuration={0.8}
              />
            </a>
          </SocialMediaListItem>
          <SocialMediaListItem>
            <a href="">
              <AnimatedSocialIcon
                brandName="linkedin"
                url=""
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  background-color: var(--dark-pink);
`;

const SocialMediaList = styled.ul`
  position: relative;
  display: flex;
`;

const SocialMediaListItem = styled.li`
  position: relative;
  list-style: none;
  margin: 0 20px;
  cursor: pointer;

  a {
    text-decoration: none;

    &::before {
      font-family: "FontAwesome";
      position: absolute;
      top: 0;
      left: 0;
      font-size: 6em;
      height: 0;
      overflow: hidden;
      transition: 0.5s ease-in-out;
    }
  }

  a .fa-brands {
    font-size: 6em;
    color: #222;
  }

  // &:nth-child(1) a::before {
  //   content: "\f16d";
  //   background-image: linear-gradient(45deg, #f09433 -%. #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  //   border-bottom: 4px solid #dc2743;
  // }

  // &:nth-child(2) a::before {
  //   content: "\f232";
  //   color: #25D366;
  //   border-bottom: 4px solid #25D366;
  // }

  // &:nth-child(3) a::before {
  //   content: "\f099";
  //   color: #1DA1F2;
  //   border-bottom: 4px solid #1DA1F2;
  // }

  &:hover a::before {
    height: 100%;
  }
`;

export default { Contact };
export { Contact };
