import './Home.css'
import LeftSection from '../../components/Left_Section/Left_Section.jsx'
import RightSection from '../../components/Right_Section/Right_Section.jsx'
import Avatar from '../../images/avatar.webp'
import skillimg from '../../images/skills.webp'
import data from '../../data/home.json'

function Home() {
  return (
    <main className='homebody'>
      <h1>Mon profil</h1>
      <LeftSection imgsrc ={Avatar} title={data.title} text={data.text}></LeftSection>
      <RightSection imgsrc ={skillimg} title={data.title2} text={data.text2}></RightSection>
    </main>
  );
}

export default Home;
