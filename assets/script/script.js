const menuTop = document.querySelector(".top-items");

const menuClose = document.querySelector(".phone-items");
function toggleMenu() {
    
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
    if(menuItems.classList.contains("show")){
    menuClose.src="./assets/images/Close.svg";}
    else{
    menuClose.src="./assets/images/Menu.svg";}

    }

function toggleTopMenu(){
    const contactInfo = document.querySelector('.contact-info');

    contactInfo.classList.toggle('show2')
        if(contactInfo.classList.contains('show2')){
            menuTop.src="./assets/images/Close.svg";
           
        }else{
            
            menuTop.src="./assets/images/Menu.svg";
        }
    }
    const links = document.querySelectorAll('.menu-items a');

    function handleNavClick(clickedName) {
        const targetElement = document.querySelector(clickedName);
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === clickedName) {
                targetElement.style.display = 'block';
            } else {
                document.querySelector(href).style.display = 'none';
            }
        });
    }
    