document.addEventListener('DOMContentLoaded', () => {
    const impressumPath = '../../../impressum.txt'

    fetch(impressumPath)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch the file: ${response.statusText}`);
        }
        return response.text();
    })
    .then(content => {
        document.getElementById('impressum').innerText = content;
    })
    .catch(error => {
        console.error(error);
    });
});