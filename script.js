var tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.4,
});
tl.from(".line1-part1 ", {
  opacity: 0,
  onStart: function () {
    var count = "";
    var h3Timer = document.querySelector(".line1-part1 h5");
     setInterval(function () {
      if (count < 100) {
        h3Timer.innerHTML = count++;
      } else {
        h3Timer.innerHTML = count;
      }
    }, 35);
  },
});
tl.to(".line h2",{
    animationName:"nowAnimation",
    opacity:1
})
tl.to(".loader", {
  opacity: 0,
  duration: 0.2,
  delay: 4,
});
tl.from(".page1",{
    delay:0.2,
    y:1200,
    opacity:0
});
tl.to(".loader",{
    display:"none"
})
