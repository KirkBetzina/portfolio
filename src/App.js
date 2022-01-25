import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';
import './App.css';


function App() {
  return (
    <div className="App">
      
      
      <>
        <h1 className='h1'>Take a look and see what I am working on!</h1>
            <div className='Card1'>
                <img src='' className='car-image-top' alt=''/>
                <div className='card-body'></div>
                <h3 className='card-title'>Calorie and Macros Calculator</h3>
                <p className='card-text'>This app will change your life by making the most difficlut part of diet and fitness as easy as using the app. This is my Passion Project!</p>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/KirkBetzina/Calorie-and-macro-calculation' className='btn btn-danger1'>github</a>   
            </div>
            <div className='Card2'>
                <img src='' className='car-image-top' alt=''/>
                <div className='card-body'></div>
                <h2 className='card-title'>Paper Crypto Trading App</h2>
                <p className='card-text'>Learn to trade in the crypto markets with our free app. Prices are live! </p>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/KirkBetzina/cryptoApp_frontend' className='btn btn-danger2'>github</a>
                <a target="_blank" rel='noopener noreferrer' href='https://mystifying-villani-51e1b2.netlify.app/login' className='btn btn-danger22'>Live Site</a>
            </div>
            <div className='Card3'>
                <img src='' className='car-image-top' alt=''/>
                <div className='card-body'></div>
                <h2 className='card-title'>Mintbean.io Hackathon submission</h2>
                <p className='card-text'>My first Hackathon with Mintbean.io this project was rated as a top 16% of all the entries. </p>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/KirkBetzina/mintbeancardgame1' className='btn btn-danger3'>github</a>
                <a target="_blank" rel='noopener noreferrer' href='https://angry-volhard-52c28f.netlify.app' className='btn btn-danger33'>Live Site</a>
            </div>
            <div className='Card4'>
                <img src='' className='car-image-top' alt=''/>
                <div className='card-body'></div>
                <h2 className='card-title'>Portfolio Website</h2>
                <p className='card-text'>This is the portfolio webstite I am currently building! </p>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/KirkBetzina/portfolio' className='btn btn-danger3'>github</a>
                <a target="_blank" rel='noopener noreferrer' href='https://nervous-benz-0a1711.netlify.app' className='btn btn-danger44'>Live Site</a>
            </div>
            <div className='socials'>
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faTwitch} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            
        </>
        
    </div>
    
  );
}

export default App;
