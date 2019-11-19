import initTilt from './js/tilt';
import initSr from './js/sr';
import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

const sendEmail =document.getElementById("send-email");
sendEmail.addEventListener("click",function(event){
   var form = event.target.nextElementSibling.querySelector("form");
   form.classList.toggle("hide");
   console.log(form);
});

initSr();
initTilt();
