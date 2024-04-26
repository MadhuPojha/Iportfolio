// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  mybutton = document.getElementById("myBtn");

function scrollFunction() {
  console.log(document.body.scrollTop )
  console.log(document.documentElement.scrollTop)
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    mybutton.style.display = "block";
  else 
    mybutton.style.display = "none";
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  scrollFunction()
}

scrollFunction();
}
