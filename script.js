var crsr = document.querySelector("#cursor")
var blar = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets) {
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
    blar.style.left = dets.x - 250 + "px";
    blar.style.top = dets.y - 250 + "px";

})

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);



// Animate #nav background color and height on scroll
gsap.to("#nav", {
    backgroundColor: "rgba(0, 0, 0, 2)", // Initial background color change
    height: "60px", // Reduce nav height on scroll
    duration: 0.5, // Set duration for the transition
    scrollTrigger: {
        trigger: "#main", // Trigger based on #main section
        scroller: "body", // Set the scroller to the body
        start: "top top", // Start when the top of #main hits the top of the viewport
        end: "bottom top", // End when the bottom of the page hits the top of the viewport
        scrub: true, // Smooth transition during scroll
        markers: false, // Set to true for debugging if needed
        onToggle: self => {
            if (self.isActive) {
                // When scrolling down
                gsap.to("#nav", { 
                    backgroundColor: "rgba(0, 0, 0, 1)", 
                    borderBottom: "1.8px solid #d4e48b ", // Add a white border
                    duration: 0.5 
                });
            } else {
                // When scrolling back up
                gsap.to("#nav", { 
                    backgroundColor: "rgba(255, 255, 255, 0)", 
                    borderBottom: "none", // Remove the border
                    duration: 0.5 
                });
            }
        }
    },
});



gsap.to("#background-video", {
    filter: "brightness(0.1)",
    scrollTrigger: {
        trigger: "#page1",
        start: "top -18%",
        end: "top -70%",
        scrub: 0.5,
        onEnter: () => document.getElementById("background-video").play(), // Play video when entering
        onLeaveBack: () => document.getElementById("background-video").play(), // Pause when leaving back
    },
});

