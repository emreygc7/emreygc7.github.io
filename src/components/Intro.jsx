import Video from './Video'
import photo from '../assets/img/photo-1.jpeg'
import { Animator, batch, Move } from "react-scroll-motion"

const Intro = () => {  
  return (
    <>
        <Video />
        <div className='intro-container'>
            <Animator animation={batch(Move(1200,0,0,0))}>
                <img src={photo} alt="profile-photo" className='profile-image' />
            </Animator>
            <div className='text-area'>
                <Animator animation={batch(Move(-600, 0,0,0))}>
                    <h1>Who I am?</h1>
                </Animator>
                <Animator animation={batch(Move(0, 500, 0,0))}>
                    <code> <strong style={{color: "red"}}>const emre =</strong>  "I'm an ordinary person who has always aimed to improve himself and to do useful works for humanity and the world. I'm working on frontend technologies and I'm focused on React. Apart from these, I'm constantly trying to learn new concepts and improve myself. By the way, I love cats so much. 🐱"</code>
                </Animator>
                <Animator animation={batch(Move(0, 500, 0,0))}>
                    <code>
                        <strong style={{color: "red"}}>const techs = </strong>
                        ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Firebase", "Tailwind", "Bootstrap"]
                    </code>
                </Animator>
                <Animator animation={batch(Move(0, 500, 0,0))}>
                    <code>
                        <strong style={{color: "red"}} >const hobbies = </strong>
                        ["playing a game", "listening to music", "literature", "watching horror movies", "blogging"]
                    </code>
                </Animator>
            </div>
        </div>
    </>
  )
}

export default Intro