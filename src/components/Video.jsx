import videoBg from '../assets/video/bg-5.mp4'

const Video = () => {
  return (
    <video src={videoBg} autoPlay muted loop></video>
  )
}

export default Video