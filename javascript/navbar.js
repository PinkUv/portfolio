document.addEventListener('DOMContentLoaded', function() {
    // Select all nav-link elements within the navbar
    var navLinks = document.querySelectorAll('#topNav .nav-link');
   
    // Add click event listener to each nav-link
    navLinks.forEach(function(navLink) {
       navLink.addEventListener('click', function() {
         // Remove 'active' class from all nav-links
         navLinks.forEach(function(link) {
           link.classList.remove('active');
         });
   
         // Add 'active' class to the clicked nav-link
         this.classList.add('active');
       });
    });
   });