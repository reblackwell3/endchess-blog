import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AboutTitle = styled.h1`
  color: #333;
  text-align: center;
`;

const AboutParagraph = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutParagraph>
        Hi I'm Robert. I am a senior software developer and I'm looking for a job. I have 7 years of expience in Java, with all projects using Spring or Spring Boot. Outside of Java, I am interested in Javascript and Python. I coded this blog to get more experience with Mongo, Express, React, and Node.
      </AboutParagraph>
      <AboutParagraph>
        In my free time, I enjoy playing chess and poker. I've traveled to over 30 countries and lived in China and Vietnam. I love learning languages and have been learning Mandarin for 10 years.
      </AboutParagraph>
    </AboutContainer>
  );
};

export default About;
