
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  AOS.init();


//   const backgrounds = [
//     "url('img/back-ground.jpg')",
//     "url('img/new.jpg')",
// ];

// let index = 0;
// const element = document.querySelector(".home");
 
// setInterval(() => {
//     index = (index + 1) % backgrounds.length;
//     element.style.backgroundImage = backgrounds[index];
// }, 10000); // 30000 ms = 30 seconds