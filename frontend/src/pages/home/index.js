document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const view_choir = document.getElementById('view-choir');
    const view_choir_popup = document.getElementById('view_choir_popup');
    const choir_popup = document.getElementById('choir-popup');
    const close_choir_popup = document.getElementById('close_choir_popup');

    const overlay = document.getElementById('overlay');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0)
        {
            header.style.backgroundColor = 'var(--background)';
        }
        else
        {
            header.style.backgroundColor = 'var(--header-overlay)'
        }
    })

    view_choir.addEventListener('click', () => {
        var targetSection = document.getElementById('choir');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

    view_choir_popup.addEventListener('click', () => {
        document.body.classList.add('scroll-disabled');

        overlay.style.display = 'block';
        choir_popup.style.display = 'flex';
    });

    close_choir_popup.addEventListener('click', () => {
        document.body.classList.remove('scroll-disabled');

        overlay.style.display = 'none';
        choir_popup.style.display = 'none';
    });
});