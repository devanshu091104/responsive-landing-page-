
document.addEventListener('DOMContentLoaded', function () {
  var icon = document.getElementById('icon');
  var navLinks = document.querySelector('.nav-links');

  icon.addEventListener('click', function () {
    navLinks.classList.toggle('show'); /* Toggle the 'show' class for the navigation links */
  });
});
