import './Other.css'

import Centralimgsection from '../../components/Central_img/Central_img.jsx'
import LeftSection from '../../components/Left_Section/Left_Section.jsx'
import RightSection from '../../components/Right_Section/Right_Section.jsx'
import Centraltextsection from '../../components/Central_text/Central_text.jsx'
import gif_1 from '../../images/game.gif'
import screenshot from '../../images/game_2.webp'
import data from '../../data/other.json'


function Other() {
  return (
    <main className='otherbody'>
      <h1>Projets créatifs</h1>
      <LeftSection imgsrc ={gif_1} title={data.title} text={data.text}></LeftSection>
      <RightSection imgsrc ={screenshot} title={data.title2} text={data.text2}></RightSection>
    </main>
  );
}

export default Other;
