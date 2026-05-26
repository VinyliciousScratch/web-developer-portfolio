import './Contact.css'
import LeftSection from '../../components/Left_Section/Left_Section.jsx'
import contactimg from '../../images/contact.webp'
import Contactform from '../../components/contactform/contactform.jsx'
import data from '../../data/contact.json'


function Contact() {
  return (
    <main className='contactbody'>
       <LeftSection imgsrc ={contactimg} title={data.title} text={data.text}></LeftSection>
       <Contactform></Contactform>
    </main>
  );
}

export default Contact;
