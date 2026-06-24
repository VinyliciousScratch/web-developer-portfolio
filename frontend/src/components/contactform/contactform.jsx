import './contactform.css'
const apiUrl = import.meta.env.VITE_API_FORMULAIRE



function Contactform() {
  return (
    <form action = {apiUrl} method="POST">

        <label htmlFor="name">Nom</label>
        <input id="name" name="name" placeholder="Nom" required />
        <label htmlFor= "email">Email</label>
        <input id= "email" name="email" placeholder="Email" required />
        <label htmlFor="message" className='no_lb'>Message</label>
        <textarea id ="message"name="message" placeholder="Message" required />

        <button type="submit">Envoyer</button>

    </form>
  );
}

export default Contactform;