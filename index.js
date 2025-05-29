
const menuBtn = document.getElementById('btn');
const mobileBtn = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');
});

function switchText() {
    document.getElementById('para1').classList.remove('show');
    document.getElementById('para2').classList.add('show');
  }