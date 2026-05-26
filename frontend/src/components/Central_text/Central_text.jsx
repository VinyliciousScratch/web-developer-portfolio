import './Central_text.css'


function Central_text({text, title}) {
  return (
    <section className='Central_text_section'>
        <h2>{title}</h2>
        <p>{text}</p>
    </section>
  );
}

export default Central_text;