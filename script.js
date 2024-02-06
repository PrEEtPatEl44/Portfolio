const menuClose = document.querySelector(".phone-items");
function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
    if(menuItems.classList.contains("show")){
    menuClose.src="./assets/images/Close.svg";}
    else{
    menuClose.src="./assets/images/Menu.svg";}

    }
