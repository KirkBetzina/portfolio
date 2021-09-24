import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const AboutMe = () => {
    return(
        <div>
        <img alt='pic of kirk'src='https://media-exp1.licdn.com/dms/image/C4E03AQEUr3Ec1vsC9A/profile-displayphoto-shrink_200_200/0/1622065509445?e=1637798400&v=beta&t=idopJxWtZNYSETFrldU_ByfgTKW1DMaoD9rL1LAy2rM'/>
        <p>Hello, I am Kirk Betzina. I am a Marine Corps Veteran, who served from 2005-2010. I deployed to Iraq in 2007 focusing on convoy operations in the Al Anbar Province. After the Marine Corps, I attended General Assembly's Software Engineering Immersive program, the Los Angeles Film School and the University of Vermont and have worked in sales for several small companies. I'm excited to be changing careers into Full Stack Software Development. Below are some of the projects I have worked on individually and as a member of a team. Connect with me on Linkedin, see my Github, and check me out on Twitch where I stream infrequently. I hope you enjoy your visit! </p>
        <SocialIcon url="https://www.linkedin.com/in/kirk-betzina-332a3761/" />
        <SocialIcon url="https://github.com/KirkBetzina" />
        <SocialIcon url="https://www.twitch.tv/freakiestkirk" />
        </div>
    )
}
export default AboutMe