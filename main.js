// console.log(gsap);
// gsap.to(".img1", {
//     x: 100,
//     y: 100,
//     rotation: "45deg",
//     backgroundColor: "red",
//     duration: 2
// });

// gsap.from(".img2", {
//     // x: -300,
//     duration: 2,
//     // opacity: 0,
//     autoAlpha: 0,// auto xuaast hiện
//     y: 100,
//     scale: 0.5
// });


// document.querySelector(".btn-img2").addEventListener("click", () => {
//     gsap.fromTo(".img3", {

//         autoAlpha: 0
//     }, { duration: 2, autoAlpha: 1 });
// });

// gsap.from(".img4", {
//     duration: 2,
//     autoAlpha: 0,
//     y: 100,
//     scale: 0.5,
//     rotation: 90,
//     // ease: "power4.out"
//     // ease: "back.out(1.7)"
//     ease: "bounce.out",
//     delay: 0.5,
//     // repeat: 2,
//     // paused: true
//     repeat: -1, // loop
//     yoyo: true, // kết hợp với repeat
//     repeatDelay: 0.5
// });

// gsap.from("img", {
//     duration: 2,
//     autoAlpha: 0,
//     y: 100,
//     scale: 0.5,
//     rotation: 90,
//     // stagger: 0.2
//     // stagger: {
//     //     each: 0.5,
//     //     // amount: 10, // total time
//     //     // from: "end",
//     //     from: "center"
//     // }
//     stagger: (index) => {
//         console.log(index);
//     }
// });


// gsap.to(".btn", {
//     duration: 0.5,
//     stagger: 0.5,
//     // x: "random(-100,100)"
//     x: "random([20,40,50,100])"
// });

// gsap.to(".img1", {
//     keyframes: [
//         { duration: 0.3, x: 100 },
//         { duration: 0.3, y: 100 },
//         { duration: 0.3, x: 200 },
//     ],
//     repeat: 1,
//     onStart: () => { console.log("start"); },
//     onUpdate: () => { console.log("onUpdate"); },
//     onComplete: () => { console.log("onComplete"); },
//     onRepeat: () => { console.log("onRepeat"); },
// });

// gsap.registerEffect({
//     name: "imgAnimation",
//     effect: (targets, config) => {
//         return gsap.to(targets,
//             {
//                 duration: config.duration,
//                 y: 200,
//                 scale: 1.4,
//                 rotation: 360
//             });
//     },
//     defaults: { duration: 2 }
// });

// gsap.effects.imgAnimation(".img1", { duration: 0.22 });
// gsap.effects.imgAnimation(".img2", { duration: 0.22 });

gsap.set(".img1", { opacity: 0.5 });

// const tween = gsap.to(".img2", { y: 200 });
// tween.kill();
// tween.delay(1);
// tween.resume(); // cancel paused

// setTimeout(() => {
//     // tween.seek(0);
// }, 200);


// const TL = gsap.timeline();


// TL
//     .from(".img1", { autoAlpha: 0, y: 50, duration: 1 })
//     .from(".img2", { autoAlpha: 0, y: 50, duration: 1 }, "-=0.75")
//     .from(".img3", { autoAlpha: 0, y: 50, duration: 1 }, "+=0.75")
//     .from(".img4", { autoAlpha: 0, y: 50, duration: 1 }, 10)
//     .from(".img5", { autoAlpha: 0, y: 50, duration: 1 });

const TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power4.out"
    },
    // repeat: -1,
    // yoyo: true,
    // paused: true,
    onComplete: () => {
        console.log("COMPLETE");
    },
    onStart: () => {
        console.log("start");
    }
});


TL
    .from(".img1", { autoAlpha: 0, y: 50, duration: 1 })
    .from(".img2", { autoAlpha: 0, y: 50, duration: 1 })
    .from(".img3", { autoAlpha: 0, y: 50, duration: 1 })
    .from(".img4", { autoAlpha: 0, y: 50, duration: 1 })
    .from(".img5", { autoAlpha: 0, y: 50, duration: 1, ease: "power4.in" });

// setTimeout(() => {
//     TL.play();
// }, 1500);