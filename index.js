
const menuBtn = document.getElementById('btn');
const mobileMenu = document.getElementById('mobileMenu');
const close = document.getElementById('close')
menuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');
  menuBtn.classList.add("hidden")
   close.classList.toggle("hidden")

});

close.addEventListener("click", function() {
  menuBtn.classList.toggle('hidden');
 mobileMenu.classList.toggle("hidden")
 close.classList.add("hidden")
});

function switchText() {
    document.getElementById('para1').classList.remove('show');
    document.getElementById('para2').classList.add('show');
  }


  // add the javascript side
  // responsiveness
  // animations
  

  // Declare variable to store navbar element
const navElement =  document.getElementById('navbar');
// Detect scroll event on document
document.addEventListener('scroll',function() {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change navbar bg to blue
 navElement.style.backgroundColor = '#9333EA'
            }else{
        // change navbar bg to transparent
       navElement.style.backgroundColor = 'transparent'
    }
    
});