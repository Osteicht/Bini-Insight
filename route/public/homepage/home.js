const navBar = document.querySelector('.navBar')
const menuBtn = document.querySelector('.menuBtn');

menuBtn.onclick = () => {
  if(navBar.offsetHeight == 0){
    navBar.style.height = "168px";
  }else{
    navBar.style.height = "0";
  }
}

// const article = document.querySelector(`.article`);

// article.addEventListener(`click`, function() {
//     console.log(`clicked`);
//     let xhr = new XMLHttpRequest();
//     xhr.open(`GET`, `/article/`, true);
//     xhr.onload = function() {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             window.location.href = window.origin + `/article/`;
//         } else {
//             console.log(`Error: `, xhr.status);
//         }
//     };
//     xhr.send();
// });

