
// Certifications data
const certifications = [
  {
    imageSrc: "./assets/images/C1.jpg",
    description: "The complete HTML and CSS Mastery"
  },
  {
    imageSrc: "./assets/images/C2.jpg",
    description: "Learning Linux Command Line"
  },
  {
    imageSrc: "./assets/images/C3.jpg",
    description: "Learning SQL Programming"
  },
  {
    imageSrc: "./assets/images/C4.jpg",
    description: "Data Structures and OOP with C++: CS104, CS105 Masterclass"
  }
];

// Projects data
const projects = [
  {
    name: "Sorting-visualizer",
    description: "A dynamic tool designed to illustrate the sorting algorithms of Bubble Sort, Insertion Sort, and Selection Sort. Users have the flexibility to adjust parameters such as speed and array length, providing a customizable experience.",
    link: "https://github.com/PrEEtPatEl44/Sorting-Visualizer",
    technologies: ["CSS3", "HTML5", "JavaScript"]
  },
  {
    name: "Discord-BOT",
    description: "Engineered a versatile Discord bot using Node.js and the Discord.js library to enhance server management and user engagement. Used discord.js to easily link the Discord bot with the Discord API after carefully designing the bot's backend architecture with Node.js to ensure reliable performance.",
    link: "https://github.com/PrEEtPatEl44/Discord-BOT",
    technologies: ["Nodejs"]
  },
  {
    name: "Veterinary-Clinic-Management-System",
    description: "Developed a robust Text File-based console application employing the C programming language, with a focus on CRUD (Create, Read, Update, Delete) operations.",
    link: "https://github.com/PrEEtPatEl44/Clinic",
    technologies: ["C"]
  },
  {
    name: "Aid-Management-System",
    description: "Spearheaded the development of an Aid Management System, integrating OOP principles to meticulously organize code and elevate overall functionality. This encompassed features like dynamic item listing, seamless addition/removal, real-time quantity updates, and streamlined shipping functionalities.",
    link: "https://github.com/PrEEtPatEl44/Aid-Management-system",
    technologies: ["cplusplus"]
  }
];

// Event Listeners and Functions
document.addEventListener("DOMContentLoaded", function() {
  // Menu toggle functions
  const menuTop = document.querySelector(".top-items");
  const menuClose = document.querySelector(".phone-items");

  function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
    if(menuItems.classList.contains("show")) {
      menuClose.src = "./assets/images/Close.svg";
    } else {
      menuClose.src = "./assets/images/Menu.svg";
    }
  }

  function toggleTopMenu() {
    const contactInfo = document.querySelector('.contact-info');
    contactInfo.classList.toggle('show2');
    if(contactInfo.classList.contains('show2')) {
      menuTop.src = "./assets/images/Close.svg";
    } else {
      menuTop.src = "./assets/images/Menu.svg";
    }
  }

  // Navigation function
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

  // Form validation
  const form = document.querySelector('.form');
  const formInputs = form.querySelectorAll('.form-input');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    formInputs.forEach(input => {
      if (input.checkValidity()) {
        input.classList.remove('invalid');
      } else {
        input.classList.add('invalid');
        isValid = false;
      }
    });

    if (isValid) {
      console.log('Form submitted!');
    } else {
      console.log('Form has invalid fields!');
    }
  });

  formInputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('invalid');
      } else {
        this.classList.add('invalid');
      }
    });
  });

  // Email sending function
  function sendEmail() {
    var fullname = document.querySelector('input[name="fullname"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
    var subject = "New Message from Contact Form";
    var mailtoLink = "mailto:madmaxy798@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent("Name: " + fullname + "\nEmail: " + email + "\n\n" + message);
    window.location.href = mailtoLink;
  }

  // Certification cards creation
  function createCertificationCards(certifications) {
    const container = document.getElementById("certifications-container");

    certifications.forEach(certification => {
      const card = document.createElement("div");
      card.classList.add("certification-card");
      card.style.backgroundColor = "black";

      const image = document.createElement("img");
      image.src = certification.imageSrc;
      image.alt = "Certification Image";
      image.style.width = "100%";
      card.appendChild(image);

      const desc = document.createElement("p");
      desc.textContent = certification.description;
      desc.style.color = "white";
      desc.style.padding = "10px";
      card.appendChild(desc);

      container.appendChild(card);
    });
  }

  createCertificationCards(certifications);

  // Projects creation
  const projectsSection = document.getElementById("projects-section");

  projects.forEach(project => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("project-box");

    const projectLink = document.createElement("a");
    projectLink.href = project.link;

    const projectName = document.createElement("p");
    projectName.textContent = project.name;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    const projectImgContainer = document.createElement("div");
    projectImgContainer.style.textAlign = "center";

    project.technologies.forEach(tech => {
      const img = document.createElement("img");
      img.src = `./assets/images/${tech.toLowerCase()}.svg`;
      img.alt = tech;
      img.width = 40;
      img.height = 40;
      projectImgContainer.appendChild(img);
    });

    projectLink.appendChild(projectName);
    projectLink.appendChild(projectDescription);
    projectLink.appendChild(projectImgContainer);
    projectBox.appendChild(projectLink);

    projectsSection.appendChild(projectBox);
  });
});
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});
document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});