
ScrollTrigger.defaults({
 toggleActions: "restart pause reverse pause",
});

// PROGRESS HEADER
gsap.from(".header", {
  scrollTrigger: ".sms2",
  trigger: ".sms2",
  y:-60,
  opacity: 0,
  duration: 1,});

const tl = gsap.timeline({
scrollTrigger: {
  id: "ProgressBar",
  trigger: ".sms3",
  endTrigger: ".register",
  end: "top",
  scrub: 1,
  markers: false,}  
});

tl.to(".progress-bar", {
  width: "100%",
})

// LOGO PANEL
gsap.from(".logo-container div", {
  scale:.5, 
  ease:Bounce.easeOut,
delay: .7,
});
gsap.to(".logo-container div", {
  y:20, 
  ease:Bounce,
delay: 2,
  duration: 1,
  repeat: -1,
  yoyo: 1,
});


// gsap.to(".logo div", {y:10, ease:Bounce.easeOut});

// PANEL ONE 

 gsap.to(".sms1 div", {
  scrollTrigger: ".sms1", 
  repeat: 1,
  duration: .75,
     delay: .25,
  y:5,
 ease:Bounce.easeOut});

 gsap.to(".sms2 div", {
  scrollTrigger: ".sms2", 
  delay: .5,
   repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

// PANEL TWO 

 gsap.to(".sms3 div", {
  scrollTrigger: ".sms3", 
  repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

 gsap.to(".sms4 div", {
  scrollTrigger: ".sms4", 
  delay: .25,
   repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

gsap.to(".sms5 div", {
  scrollTrigger: ".sms5", 
  delay: .5,
   repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

// PANEL THREE 

 gsap.to(".sms6 div", {
  scrollTrigger: ".sms6", 
  repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

// PANEL FOUR 

 gsap.to(".sms7 div", {
  scrollTrigger: ".sms7", 
  repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

 gsap.to(".sms8 div", {
  scrollTrigger: ".sms8", 
  delay: .25,
   repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

// PANEL FIVE 

 gsap.to(".sms9 div", {
  scrollTrigger: ".sms9", 
  repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

 gsap.to(".sms10 div", {
  scrollTrigger: ".sms10", 
  delay: .25,
   repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

gsap.to(".sms11 div", {
  scrollTrigger: ".sms11", 
  delay: .5,
   repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});
