const navBar = document.querySelector('.navBar')
const menuBtn = document.querySelector('.menuBtn');

menuBtn.onclick = () => {
  if(navBar.offsetHeight == 0){
    navBar.style.height = "168px";
  }else{
    navBar.style.height = "0";
  }
}
