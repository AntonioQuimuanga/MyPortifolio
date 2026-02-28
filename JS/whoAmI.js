const wrapper = document.querySelector(".tracker");
const emoji = document.querySelector(".emoji");
const emojiFace = document.querySelector(".emoji-face");

const moveEvent = (e) => {
    const wrapperRect = wrapper.getBoundingClientRect();

    const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
    const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

    const emojiMaxDisplacement = 50;
    const emojiFaceMaxDisplacement = 75;

    const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
    const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;

    const emojiFaceDisplacementX = (relX / wrapperRect.width) * emojiFaceMaxDisplacement
    const emojiFaceDisplacementY = (relY / wrapperRect.height) * emojiFaceMaxDisplacement

    gsap.to(emoji, {
        x: emojiDisplacementX,
        y: emojiDisplacementY,
        ease: "power3.out",
        duration: .35,
    });
    gsap.to(emojiFace, {
        x: emojiFaceDisplacementX,
        y: emojiFaceDisplacementY,
        ease: "power3.out",
        duration: .35,
    });
};

const leaveEvent = () => {
    gsap.to([emoji, emojiFace], {
        x: 0,
        y: 0,
        ease: "power3.out",
        duration: 1,
    });
};

wrapper.addEventListener("mousemove", moveEvent);
wrapper.addEventListener("mouseleave", leaveEvent);