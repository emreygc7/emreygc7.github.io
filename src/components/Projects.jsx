import Video from "./Video";
import { Animator, batch, MoveIn } from "react-scroll-motion"

const Projects = () => {

  return (
    <>
      <Video />
      <div className="project-main-container">
        <div style={{textAlign: "center", color:"white"}}>
          <h1>My Projects</h1>
        </div>
        <div className="project-container">
          <Animator animation={batch(MoveIn(-600, 0))} >
            <div className="project-box">
              <img src="https://i.postimg.cc/R0JktBSs/ss.png" alt="twitter-clone" />
              <div className="box-content">
                <h1>Twitter Clone</h1>
                <span>In this project, I cloned the twitter application. You can tweet with or without a photo. I used firebase firestore and cloud storage to keep the data. It is not designed to be Pixel perfect. There may be slight differences between with classic twitter.</span>
                <a href="https://github.com/emreygc7/twitter-clone" target="_blank">View Source Code</a>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(MoveIn(600, 0))}>
            <div className="project-box">
              <div className="box-content">
                <h1>Weather App</h1>
                <span>You can view instant weather information according to the city name entered in this project. You can also view the 5-day forecast on the graph.</span>
                <a href="https://github.com/emreygc7/react-weather-app" target="_blank">View Source Code</a>
              </div>
              <img src="https://i.postimg.cc/sXtJD6qv/Fire-Shot-Capture-031-Weather-App-reacttweatherapp-netlify-app.png" alt="weather-app" />
            </div>
          </Animator>
          <Animator animation={batch(MoveIn(-600,0))}>
            <div className="project-box" >
              <img src="https://i.postimg.cc/CxZ2KFRQ/dtcdesktop.png" alt="dtc" />
              <div className="box-content">
                <h1>Download Time Calculator</h1>
                <span>In this project, how long this download will take is calculated based on the entered internet speed and the file size to be downloaded.</span>
                <a href="https://github.com/emreygc7/react-download-time-calculator" target="_blank">View Source Code</a>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(MoveIn(600, 0))}>
            <div className="project-box">
              <div className="box-content">
                <h1>Todo App</h1>
                <span>A classic todo app. User can add, edit, delete or complete tasks. Tasks are keep in local storage.</span>
                <a href="https://github.com/emreygc7/react-todo-app" target="_blank">View Source Code</a>
              </div>
              <img src="https://i.postimg.cc/tCJm4hJ5/todo1.png" alt="todo-app" />
            </div>
          </Animator>
        </div>
      </div>
    </>
   
  );
};

export default Projects;
