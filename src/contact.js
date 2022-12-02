import {createDiv} from './home.js'
function createContact(){
    const contact = createDiv('contact-container');
    contact.innerHTML = `
  <h1>Contact us</h1>
    <div class="info">
      <div class="address">
        <p>
        🏠&nbsp;3901 Elm Drive<br/> New York, NY 10004
        </p>
      </div>
      <div class="phone">
      <p>📞&nbsp;(123) 456-7891</p>
    </div>
      <div class="hours">
        <p>
        <i style="font-size:26px" class="fa">&#xf017;</i>
        <span>Mon-Thurs: </span>7am-7pm
        <br/><span>&emsp;&ensp;&ensp;Fri-Sun:&nbsp;</span>
        &nbsp;7am-11pm
        </p>
      </div>
      <div class="contact-form">
        <form onsubmit="return false">
          <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
          <div class="input-box">
            <input type="text" required />
            <span>Full Name</span>
          </div>
          <div class="input-box">
            <input type="text" required />
            <span>Email</span>
          </div>
          <div class="input-box">
            <textarea required></textarea>
            <span>Type your message...</span>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
    <iframe
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830854996!2d-74.11976404949759!3d40.69766374879398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1669929406115!5m2!1sen!2sus" 
    width="600" 
    height="450" 
    style="border:0;" a
    llowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
    `;

    return contact;
}
export function loadContact(){
    let main = document.querySelector('main');
    main.innerHTML='';
    main.setAttribute('id','contact');
    main.classList.remove('home','menu');
    main.classList.add('contact');

    main.appendChild(createContact());
}
