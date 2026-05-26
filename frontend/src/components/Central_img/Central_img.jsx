import './Central_img.css'


function Central_img({imgsrc, title}) {
  return (
    <section className='Central_section'>
        <h1>{title}</h1>
        <img src={imgsrc} alt="screenshot"></img>
    </section>
  );
}

export default Central_img;