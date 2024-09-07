document.addEventListener("DOMContentLoaded", function() {
    const years = document.querySelectorAll('.timeline-years .year');
    const yearContainers = document.querySelectorAll('.year-container');

    years.forEach((year, index) => {
        year.addEventListener('click', function() {
            years.forEach(y => y.classList.remove('active'));
            this.classList.add('active');

            yearContainers.forEach(container => container.style.display = 'none');
            yearContainers[index].style.display = 'flex';
        });
    });
});
