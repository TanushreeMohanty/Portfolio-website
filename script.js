/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Toggle menu when clicking on toggle button or close button */
const toggleMenu = () => {
  navMenu.classList.toggle('show-menu');
};

/* Toggle menu when clicking on toggle button */
if (navToggle) {
  navToggle.addEventListener('click', toggleMenu);
}

/* Hide menu when clicking on close button */
if (navClose) {
  navClose.addEventListener('click', toggleMenu);
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
};

navlinks.forEach((link) => link.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than or equal to 50 viewport height,
  // add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', blurHeader);


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()
}
emailjs.sendForm('service_m7jfwgg', 'template_d4i89ph', 'contact-form', 'fK_UqBylcLrUr1ARo')
  .then(() => {
    //show sent message
    contactMessage.textContent = 'Message Sent Succesfully'
    // Remove message after five seconds 
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)

    //clear input field
    contactForm.reset()
  }, () => {
    //show error message
    contactMessage.textContent = 'Error'
  })
contactForm.addEventListener('submit', sendEmail)
