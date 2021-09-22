import React from 'react'


const Projects = (props) => {
    
    return(
        <>
            <div class="card-crypto" style={{width: '18rem', border: '1px solid blk'}}>
                <div class="card-body">
                <h5 class="card-title">Task Manager Todo App</h5>
                <h6 class="card-subtitle mb-2 text-muted">FARM Stack</h6>
                <p class="card-text">Learning a new tech stack and built a simple todo app. FastApi, React and MongoDB. </p>
                <a href="https://adoring-kepler-8db75b.netlify.app/" class="card-link">Todo App</a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/FARM-STACK-FRONTEND" class=''>Front End Github Repo</a>
                <a type='link' href="https://github.com/KirkBetzina/FARM-STACK-BACKEND" class=''>Back End End Github Repo</a>
                </div>
            </div>
            <div class="card-crypto" style={{width: '18rem', border: '1px solid blk'}}>
                <div class="card-body">
                <h5 class="card-title">Paper Trading Crypto App</h5>
                <h6 class="card-subtitle mb-2 text-muted">MERN Stack</h6>
                <p class="card-text">A paper cryptocurrency trading app built with a team. </p>
                <a href="https://mystifying-villani-51e1b2.netlify.app/" class="card-link">Crypto App</a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/cryptoApp_frontend/tree/dev" class=''>Github Repo</a>
                </div>
            </div>
            <div class="card-war" style={{width: '18rem', border: '1px solid blk'}}>
                <div class="card-body">
                <h5 class="card-title">Minbean.io Hackathon Cardgame Submission</h5>
                <h6 class="card-subtitle mb-2 text-muted">MERN Stack</h6>
                <p class="card-text">An attempt at War the card game which placed our group of 3 devs top 16% of projects submitted.</p>
                <a href="https://angry-volhard-52c28f.netlify.app/" class="card-link">War</a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/mintbeanCardGame/tree/master" class=''>Github Repo</a>
                </div>
            </div>
            <div class="card-portfolio" style={{width: '18rem', border: '1px solid blk'}}>
                <div class="card-body">
                <h5 class="card-title">Portfolio Website</h5>
                <h6 class="card-subtitle mb-2 text-muted">React</h6>
                <p class="card-text">Hey, you're already here! Check out my code and development process on Github.</p>
                <a href="" class="card-link"></a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/portfolio" class=''>Github Repo</a>
                </div>
            </div>
            <div class="card-concert" style={{width: '18rem', border: '1px solid blk'}}>
                <div class="card-body">
                <h5 class="card-title">Post Covid Worlwide Concert Tracker</h5>
                <h6 class="card-subtitle mb-2 text-muted">MERN Stack</h6>
                <p class="card-text">Showing off dynamically renderred cards using information from 3rd party API's and experimenting with far out CSS stuff.  </p>
                <a href="https://competent-bassi-408bb3.netlify.app/" class="card-link">Post Covid Worlwide Concert Tracker</a>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/react-project-2" class=''>Github Repo</a>
                </div>
            </div>
            <div class="card-macros" style={{width: '18rem', border: '1px solid blk'}}>
                <div class="card-body">
                <h5 class="card-title">Macros and Calories Tool</h5>
                <h6 class="card-subtitle mb-2 text-muted">MERN Stack</h6>
                <p class="card-text">This is an ongoing passion project of mine. This tool will help people build a healthy long term sustainable eating guide to help them achieve their fitness goals. Please check out the ReadMe.md </p>
                <br></br>
                <a type='link' href="https://github.com/KirkBetzina/Calorie-and-macro-calculation" class=''>Github Read Me</a>
                </div>
            </div>
        </>
    )
}
export default Projects  
            