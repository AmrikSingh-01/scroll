const intro=document.querySelector('.intro');
const vid=intro.querySelector('video');
const text=intro.querySelector('h1');
//End Section
const section = document.querySelector('section');
const end=section.querySelector('h1');
//Scroll Magic
const controller=new ScrollMagic.Controller();
const scene=new ScrollMagic.Scene({
    duration:7000,
    triggerElement:intro,//triggerElement ke top pe start1 aa jaayega
    triggerHook:0//element is at trigger position
    // end triggerHook se duration pixel ki duri pe hoga
})
.addIndicators()
.setPin(intro)
.addTo(controller);

const textanim=TweenMax.fromTo(text,3,{opacity:1},{opacity:0});
const scene2=new ScrollMagic.Scene({
    duration:3000,
    triggerElement:intro,//triggerElement ke top pe start1 aa jaayega
    triggerHook:0//element is at trigger position
    // end triggerHook se duration pixel ki duri pe hoga
})
.setTween(textanim)
.addTo(controller)

//video animation
let accelamount=0.1;
let scrollpos=0;
let delay=0;
let op=1;
scene.on('update',e=>{
    // alternate would be onScroll in vanilla js
    scrollpos=e.scrollPos/1000;
});
setInterval(() => {
    delay += (scrollpos-delay)*accelamount;
    vid.currentTime=delay;
    // op=1-delay/7;
    // text.style.opacity=op;
    
}, 100);//1s main 60f dikhenge, toh 1f 1/60 sec matlab 1000/60 milsec main change hoga toh har frame change ke liye video delay update karo

// study canvas to create amazing animations