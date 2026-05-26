import './Left_Section.css'


function Left_Section({imgsrc, title ,text}) {
  return (
    <section className='Left_section'>
        <div className='leftpart'>
            <img src={imgsrc} alt="Avatar"></img>
        </div>
        <div className='rightpart'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </section>
  );
}

export default Left_Section;