document.addEventListener('DOMContentLoaded', () => {
    const privacyPath = '../../../privacy.txt'

    fetch(privacyPath)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch the file: ${response.statusText}`);
        }
        return response.text();
    })
    .then(content => {
        document.getElementById('privacy').innerText = content;
    })
    .catch(error => {
        console.error(error);
    });
});