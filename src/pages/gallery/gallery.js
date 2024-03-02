document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.prev-img');
    const image_viewer = document.getElementById('image-viewer');
    const image_viewer_image = document.getElementById('image-viewer-image');
    const overlay = document.getElementById('overlay');

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            const imgSource = img.src;
                
            image_viewer.style.display = 'block';
            overlay.style.display = 'block';

            image_viewer_image.src = imgSource;
        });
    });

    overlay.addEventListener('click', () => {
        image_viewer.style.display = 'none';
        overlay.style.display = 'none';
    });
});