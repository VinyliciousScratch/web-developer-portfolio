import './Portfolio.css'
import Centralimgsection from '../../components/Central_img/Central_img.jsx'
import LeftSection from '../../components/Left_Section/Left_Section.jsx'
import RightSection from '../../components/Right_Section/Right_Section.jsx'
import Centraltextsection from '../../components/Central_text/Central_text.jsx'
import Screenshot_kasa_1 from '../../images/Screenshot_kasa_1.webp'
import Screenshot_kasa_2 from '../../images/Screenshot_kasa_2.webp'
import Screenshot_kasa_3 from '../../images/Screenshot_kasa_3.webp'
import Screenshot_booki_1 from '../../images/Screenshot_booki_1.webp'
import Screenshot_booki_2 from '../../images/Screenshot_booki_2.webp'
import Screenshot_booki_3 from '../../images/Screenshot_booki_3.webp'


import data from '../../data/portfolio.json'


function Portfolio() {
  return (
    <main className='portfoliobody'>
      <Centralimgsection imgsrc ={Screenshot_kasa_1} title={data.title_project_1} text={data.text}></Centralimgsection>
      <LeftSection imgsrc ={Screenshot_kasa_2} title={data.title_text_1} text={data.project_1_text_1}></LeftSection>
      <RightSection imgsrc ={Screenshot_kasa_3} title={data.title_text_2} text={data.project_1_text_2}></RightSection>
      <Centraltextsection title={data.title_text_3} text={data.project_1_text_3}></Centraltextsection>
      <Centralimgsection imgsrc ={Screenshot_booki_1} title={data.title_project_2} text={data.text}></Centralimgsection>
      <LeftSection imgsrc ={Screenshot_booki_2} title={data.title_text_1} text={data.project_2_text_1}></LeftSection>
      <RightSection imgsrc ={Screenshot_booki_3} title={data.title_text_2} text={data.project_2_text_2}></RightSection>
      <Centraltextsection title={data.title_text_3} text={data.project_2_text_3}></Centraltextsection>

    </main>
  );
}

export default Portfolio;
