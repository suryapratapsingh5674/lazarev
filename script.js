

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



gsap.from("#h1 h1, #h2 h1, #moving-div",{
    y:"100%",
    opacity:0,
    duration:1,
    stagger:.2
})

function circlemove(){
    document.getElementById("insight1").addEventListener("mousemove",(gets)=>{
        gsap.to("#circle",{
            y: gets.clientY - 290 + "px",
            x: gets.clientX - 800 + "px"
        })
    })

    document.getElementById("insight1").addEventListener("mouseenter",()=>{
        gsap.to("#circle",{
            opacity: 1
        })
    })

    document.getElementById("insight1").addEventListener("mouseleave",()=>{
        gsap.to("#circle",{
            opacity: 0
        })
    })
}

circlemove();

function circlemove1(){
    document.getElementById("insight2").addEventListener("mousemove",(gets)=>{
        gsap.to("#circle1",{
            y: gets.clientY - 290 + "px",
            x: gets.clientX - 800 + "px"
        })
    })

    document.getElementById("insight2").addEventListener("mouseenter",()=>{
        gsap.to("#circle1",{
            opacity: 1
        })
    })

    document.getElementById("insight2").addEventListener("mouseleave",()=>{
        gsap.to("#circle1",{
            opacity: 0
        })
    })
}

circlemove1();

function circlemove2(){
    document.getElementById("insight3").addEventListener("mousemove",(gets)=>{
        gsap.to("#circle2",{
            y: gets.clientY - 490 + "px",
            x: gets.clientX - 800 + "px"
        })
    })

    document.getElementById("insight3").addEventListener("mouseenter",()=>{
        gsap.to("#circle2",{
            opacity: 1
        })
    })

    document.getElementById("insight3").addEventListener("mouseleave",()=>{
        gsap.to("#circle2",{
            opacity: 0
        })
    })
}

circlemove2();

function circlemove3(){
    document.getElementById("insight4").addEventListener("mousemove",(gets)=>{
        gsap.to("#circle3",{
            y: gets.clientY - 590 + "px",
            x: gets.clientX - 800 + "px"
        })
    })

    document.getElementById("insight4").addEventListener("mouseenter",()=>{
        gsap.to("#circle3",{
            opacity: 1
        })
    })

    document.getElementById("insight4").addEventListener("mouseleave",()=>{
        gsap.to("#circle3",{
            opacity: 0
        })
    })
}

circlemove3();

function circlemove4(){
    document.getElementById("nodor").addEventListener("mousemove",(gets)=>{
        gsap.to("#flow",{
            y: gets.clientY - 290 + "px",
            x: gets.clientX - 600 + "px"
        })
    })

    document.getElementById("nodor").addEventListener("mouseenter",()=>{
        gsap.to("#flow",{
            opacity: 1
        })
    })

    document.getElementById("nodor").addEventListener("mouseleave",()=>{
        gsap.to("#flow",{
            opacity: 0
        })
    })
}

circlemove4();

function showreel(){
    document.querySelector("#page3 svg").addEventListener("mouseenter", ()=>{
        gsap.to("#show", {
            opacity:1,
            top:"63%"
        })
    })

    document.querySelector("#page3 svg").addEventListener("mouseleave", ()=>{
        gsap.to("#show", {
            opacity:0,
            top:"65%"
        })
    })

}
showreel();

function show(){
    gsap.to("#vid", {
        scale:1,
        height: "100%",
        stagger:.2
    })
}

function hide(){
    gsap.to("#vid", {
        height:"0%",
        scale:0,
        stagger:.2
    })
}

var video = document.getElementById("vid");

video.addEventListener("click", function() {
    video.pause();
    video.currentTime = 0;
});

var sv = document.getElementById("sv");

sv.addEventListener("click", function() {
    video.play();

});

var nodov = document.getElementById("nodov");

nodov.addEventListener("mouseover", function() {
    nodov.play();
});

nodov.addEventListener("mouseleave", function() {
    nodov.pause();
    nodov.currentTime = 0;
});

var boxvid1 = document.getElementById("back-video1");
var boxvid2 = document.getElementById("back-video2");
var video1 = document.getElementById("metavid");
var video2 = document.getElementById("sightvid");

boxvid1.addEventListener("mouseenter", function(){
    gsap.to("#bird, #meta p",{
        opacity: 0,
        duration:0.5,
    })
    gsap.to(boxvid1,{
        height: "700px",
        duration:1,
    })
    video1.play();
});

boxvid1.addEventListener("mouseleave", function(){
    gsap.to("#bird, #meta p",{
        opacity: 1,
    })
    gsap.to(boxvid1,{
        height: "270px",
        duration:.5,
    })
    video1.pause();
    video1.currentTime = 0;
})

boxvid2.addEventListener("mouseenter", function(){
    gsap.to("#gif, #sight p",{
        opacity:0,
        duration:.5,
    })
    gsap.to(boxvid2,{
        height: "700px",
        duration:1,
    })
    video2.play();
});

boxvid2.addEventListener("mouseleave", function(){
    gsap.to("#gif, #sight p",{
        opacity:1,
        duration:.5,
    })
    gsap.to(boxvid2,{
        height: "270px",
        duration:.5,
    })
    video2.pause();
    video2.currentTime = 0;
})
