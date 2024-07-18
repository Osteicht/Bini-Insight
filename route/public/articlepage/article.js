const home = document.querySelector(`.home`);

home.addEventListener(`click`, function() {
    console.log(`clicked`);
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, `/home/`, true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            window.location.href = window.origin + `/home/`;
        } else {
            console.log(`Error: `, xhr.status);
        }
    };
    xhr.send();
});