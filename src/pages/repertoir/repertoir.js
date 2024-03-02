document.addEventListener('DOMContentLoaded', () => {
    const search_bar = document.getElementById('search-song');
    const start_search = document.getElementById('start_search');

    search_bar.addEventListener('focus', function() {
        start_search.style.transition = '.5s';
        search_bar.style.width = '37vw';
        search_bar.style.borderTopRightRadius = '10px';
        search_bar.style.borderBottomRightRadius = '10px';
        search_bar.style.borderBottomLeftRadius = '50px';
        search_bar.style.borderBottomLeftRadius = '50px';
        start_search.style.opacity = '1';
    });

    search_bar.addEventListener('blur', () => {
        start_search.style.opacity = '0';
        search_bar.style.width = '40.2vw';
        search_bar.style.borderRadius = '50px';
    });
});