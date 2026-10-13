
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  AOS.init();

  (function(){
 var SINCE=1989, years=new Date().getFullYear()-SINCE;
 document.querySelectorAll('.sy').forEach(function(e){e.textContent=SINCE});
 var num=document.getElementById('num');num.textContent=years;
 var lis=document.querySelectorAll('#steps li');
 lis.forEach(function(li){li.addEventListener('click',function(){lis.forEach(function(x){x.classList.remove('on')});li.classList.add('on')})});
 if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
 num.textContent=0;var done=false;
 new IntersectionObserver(function(es,o){
  if(done||!es[0].isIntersecting)return;done=true;o.disconnect();
  var t0=performance.now();
  (function f(t){var p=Math.min((t-t0)/1400,1);num.textContent=Math.round(years*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0);
 },{threshold:.5}).observe(document.getElementById('counter'));
})();

//  const track = document.querySelector(".track");

// // نكرر المحتوى مرة واحدة
// track.innerHTML += track.innerHTML;

// let pos = 0;

// function move() {
//   pos -= 3; // السرعة

//   const halfWidth = track.scrollWidth / 2;

//   // بدل ما نرجع للصفر
//   // نخصم نصف العرض (مفيش توقف)
//   if (Math.abs(pos) >= halfWidth) {
//     pos += halfWidth;
//   }

//   track.style.transform = `translateX(${pos}px)`;

//   requestAnimationFrame(move);
// }

// move();