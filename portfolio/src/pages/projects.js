import React from 'react'


const Projects = (props) => {
    
    return(
        <div className='cards'>
            <card className="card-todo" style={{width: '18rem'}}>
                <div className="card-body">
                <h5 className="card-title">Task Manager Todo App</h5>
                <h6 className="card-subtitle mb-2 text-muted">FARM Stack</h6>
                <p className="card-text">Learning a new tech stack and built a simple todo app. FastApi, React and MongoDB. </p>
                <a href="https://adoring-kepler-8db75b.netlify.app/" className="card-link">Todo App</a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/FARM-STACK-FRONTEND" className=''>Front End Github Repo</a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/FARM-STACK-BACKEND" className=''>Back End End Github Repo</a>
                </div>
            </card>
            <card className="card-crypto" style={{width: '18rem'}}>
                <div className="card-body">
                <h5 className="card-title">Paper Trading Crypto App</h5>
                <h6 className="card-subtitle mb-2 text-muted">MERN Stack</h6>
                <p className="card-text">A paper cryptocurrency trading app built with a team. </p>
                <a href="https://mystifying-villani-51e1b2.netlify.app/" className="card-link">Crypto App</a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/cryptoApp_frontend/tree/dev" className=''>Github Repo</a>
                </div>
            </card>
            <card className="card-war" style={{width: '18rem'}}>
                <div className="card-body">
                <h5 className="card-title">Minbean.io Hackathon Cardgame Submission</h5>
                <h6 className="card-subtitle mb-2 text-muted">MERN Stack</h6>
                <p className="card-text">An attempt at War the card game which placed our group of 3 devs top 16% of projects submitted.</p>
                <a href="https://angry-volhard-52c28f.netlify.app/" className="card-link">War</a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/mintbeanCardGame/tree/master" className=''>Github Repo</a>
                </div>
            </card>
            <card className="card-portfolio" style={{width: '18rem'}}>
                <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <h6 className="card-subtitle mb-2 text-muted">React</h6>
                <p className="card-text">Hey, you're already here! Check out my code and development process on Github.</p>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/portfolio" className=''>Github Repo</a>
                </div>
            </card>
            <card className="card-concert" style={{width: '18rem'}}>
                <div className="card-body">
                <h5 className="card-title">Post Covid Worlwide Concert Tracker</h5>
                <h6 className="card-subtitle mb-2 text-muted">MERN Stack</h6>
                <p className="card-text">Showing off dynamically renderred cards using information from 3rd party API's and experimenting with far out CSS stuff.  </p>
                <a href="https://competent-bassi-408bb3.netlify.app/" className="card-link">Post Covid Worlwide Concert Tracker</a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/react-project-2" className=''>Github Repo</a>
                </div>
            </card>
            <card className="card-macros" style={{width: '18rem'}}>
                <div className="card-body">
                <h5 className="card-title">Macros and Calories Tool</h5>
                <h6 className="card-subtitle mb-2 text-muted">MERN Stack</h6>
                <p className="card-text">This is an ongoing passion project of mine. This tool will help people build a healthy long term sustainable eating guide to help them achieve their fitness goals. Please check out the ReadMe.md </p>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/Calorie-and-macro-calculation" className=''>Github Read Me</a>
                </div>
            </card>
        </div>
    )
}
export default Projects  
            