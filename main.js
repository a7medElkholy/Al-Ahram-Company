
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  AOS.init();

 const track = document.querySelector(".track");

// نكرر المحتوى مرة واحدة
track.innerHTML += track.innerHTML;

let pos = 0;

function move() {
  pos -= 3; // السرعة

  const halfWidth = track.scrollWidth / 2;

  // بدل ما نرجع للصفر
  // نخصم نصف العرض (مفيش توقف)
  if (Math.abs(pos) >= halfWidth) {
    pos += halfWidth;
  }

  track.style.transform = `translateX(${pos}px)`;

  requestAnimationFrame(move);
}

move();