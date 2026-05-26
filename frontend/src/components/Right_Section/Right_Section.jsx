import './Right_Section.css'


function Right_Section({imgsrc, title ,text}) {
  return (
    <section className='Right_section'>
        <div className='leftpart'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <div className='rightpart'>
            <img src={imgsrc} alt="Avatar"></img>
           
        </div>
    </section>
  );
}

export default Right_Section;