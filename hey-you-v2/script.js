
ScrollTrigger.defaults({
  toggleActions: "restart pause reverse pause",
 });
 
 // PROGRESS HEADER
 gsap.from(".header", {
   scrollTrigger: ".sms1",
   trigger: ".sms1",
   y:-60,
   opacity: 0,
   duration: 3,});
 
 const tl = gsap.timeline({
 scrollTrigger: {
   id: "ProgressBar",
   trigger: "top",
   endTrigger: ".sms11",
   end: "top",
   scrub: 1,
   markers: false,}  
 });
 
 tl.to(".progress-bar", {
   width: "105%",
 })
 

 gsap.to(".scroll-down", {
   y:-20, 
   ease:Bounce,
 delay: 2,
   duration: 1,
   repeat: -1,
   yoyo: 1,
 });
 
 
 // gsap.to(".logo div", {y:10, ease:Bounce.easeOut});
 
 // PANEL ONE 
 
  gsap.from(".sms1 div", {

    scrollTrigger: ".sms1", 
   duration: 1,
   scale: 1.2,
   ease:Elastic.easeOut});
 
  gsap.from(".sms2 div", {

    scrollTrigger: ".sms2", 
   duration: 1.25,
   scale: 1.2,
  ease:Elastic.easeOut});
 
 
  gsap.from(".sms3 div", {

    scrollTrigger: ".sms3", 
   duration: 1.75,
   scale: 1.2,
  ease:Elastic.easeOut});
 
  gsap.from(".sms4 div", {

    scrollTrigger: ".sms4", 
   duration: 2,
   scale: 1.2,
  ease:Elastic.easeOut});
 

 // PANEL TWO  
 gsap.to(".logo-container div", {
  scrollTrigger: ".sms6", 
  repeat: 1,
  duration: .75,
  y:5,
 ease:Bounce.easeOut});

 // PANEL THREE 

 gsap.to(".sms5 div", {
   scrollTrigger: ".sms5", 
   delay: .5,
    repeat: 1,
   duration: .75,
   y:5,
  ease:Bounce.easeOut});

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
 
 // PANEL FOUR 
 //  Animation for registration section goes here

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
 