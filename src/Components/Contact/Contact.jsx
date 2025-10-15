import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
function Contact() {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d387795e-895f-410b-8241-7c6a3e29b9ff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Contactez moi</h1>
       
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Mes coordonnées</h1>
          <p>Actuellement je suis disponible de prendre de nouvaux project, et mettre en pratique mes compétences, et des nouvelles compétences demandées</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt='' /><p>thawanzaboulanouar@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='' /> <p>0696 33 80 70</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='' /> <p>Ait Idriss Taskriout Bejaia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=''>Votre nom</label>
          <input type="text" placeholder='Entrer votre nom' name='name' />

          <label htmlFor=''>Votre Email</label>
          <input type="text" placeholder='Entrer votre email' name='email' />

          <label htmlFor=''>Votre numéro de téléphone</label>
          <input type="text" placeholder='Entrer Votre numéro' name='numéro' />

          <label htmlFor=''>Votre message</label>
          <textarea name="message" rows={8} placeholder='Saisir le message' />

          <button className="contact-submit">
            Envoyer
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact