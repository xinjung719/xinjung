document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('.section');
    let index = 0;

    function scrollToSection(index) {
        sections.forEach((section, i) => {
            section.style.transform = `translateY(-${index * 100}vh)`;
        });
    }

    window.addEventListener('wheel', function(e) {
        if (e.deltaY > 0 && index < sections.length - 1) {
            index++;
            scrollToSection(index);
        } else if (e.deltaY < 0 && index > 0) {
            index--;
            scrollToSection(index);
        }
    });
});
