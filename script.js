let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));

      document
        .querySelector('header nav a[href="#' + id + '"]')
        .classList.add('active');
    }
  });

  // sticky header
  document.querySelector('header')
    .classList.toggle('sticky', window.scrollY > 100);

  // close mobile menu
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Handle PDF button clicks
document.querySelectorAll('.click-pdf-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const pdfUrl = this.parentElement.getAttribute('data-pdf');
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  });
});