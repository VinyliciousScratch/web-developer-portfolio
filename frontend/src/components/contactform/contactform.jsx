import './contactform.css'



function Contactform() {
  return (
    <form action="https://formspree.io/f/xzdwewyr" method="POST">

        <label htmlFor="name">Nom</label>
        <input id="name" name="name" placeholder="Nom" required />
        <label htmlFor= "email">Email</label>
        <input id= "email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />

        <button type="submit">Envoyer</button>

    </form>
  );
}

export default Contactform;