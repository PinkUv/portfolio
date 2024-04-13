document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlTag = document.documentElement;
   
    themeToggleButton.addEventListener('click', function() {
       const currentTheme = htmlTag.getAttribute('data-bs-theme');
       const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
       htmlTag.setAttribute('data-bs-theme', newTheme);
    });
   });
   