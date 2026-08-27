import './Other.css'

import { useState } from "react";


import Centralimgsection from '../../components/Central_img/Central_img.jsx'
import LeftSection from '../../components/Left_Section/Left_Section.jsx'
import RightSection from '../../components/Right_Section/Right_Section.jsx'
import gif_1 from '../../images/game.gif'
import waifishscreenshot from '../../images/Waifish_screen2.png'
import data from '../../data/other.json'
import Project_selector from '../../components/Project_selector/Project_selector.jsx'
import waifish_selector from '../../images/waifish_selector.png'
import uk_selector from '../../images/uk_site_format.png'
import steam_logo from '../../images/steam-logo.png'
import Central_text from '../../components/Central_text/Central_text.jsx'
import uk_screenshot from '../../images/Uk_screenshot.png'

function Other() {
  const [selectedProject, setSelectedProject] = useState(null);

  

  return (
    <main className="otherbody">
      <h1>Game Dev</h1>
        <p className={`text_game_dev ${selectedProject ? 'hidden' : ''}`}>{data.text}</p>
      <div className="selector_list">
        <Project_selector
          onClick={() => setSelectedProject(1)}
          imgsrc={waifish_selector}
          isActive={selectedProject === 1}
          hasSelection={selectedProject !== null}
        />

        <Project_selector
          onClick={() => setSelectedProject(2)}
          imgsrc={uk_selector}
          isActive={selectedProject === 2}
          hasSelection={selectedProject !== null}
        />
      </div>

      <div className={selectedProject === 1 ? "content visible" : "content"}>
        <LeftSection
          imgsrc={gif_1}
          title={data.waifishtitle1}
          text={data.waifishtext1}
        />

        <RightSection
          imgsrc={waifishscreenshot}
          title={data.waifishtitle2}
          text={data.waifishtext2}


          
        />
         <a 
        href={data.waifishSteamUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="steam_badge"
      >
        <img src={steam_logo} alt="Steam" />
        <span>Disponible sur Steam</span>
      </a>



      </div>
    
      <div className={selectedProject === 2 ? "content visible" : "content"}>

        <Central_text title={data.unknowncharactertitle} text={data.unknowncharactertext}></Central_text>
        <img  className ='imguk' src={uk_screenshot}></img>


      </div>

    </main>
  );
}


export default Other;
