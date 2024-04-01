document.addEventListener('DOMContentLoaded', function () {

    var sections = document.querySelectorAll('section');


    var navLinks = document.querySelectorAll('nav a');


    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();


            sections.forEach(function (section) {
                section.style.display = 'none';
            });


            var targetSectionId = link.getAttribute('href').substring(1);
            document.getElementById(targetSectionId).style.display = 'block';
        });
    });
});
