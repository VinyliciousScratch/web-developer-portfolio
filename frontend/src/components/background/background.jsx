
import video from "../../images/background_video.webm"
import './background.css';

function Background(){
    return(
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video"
      >
        <source src={video} type = "video/webm"/>
      </video>
    )
}

export default Background;
