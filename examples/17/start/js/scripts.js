function setSliderSpeed({ speed: sliderSpeed, easing } = {}) {

    let slider = {};

    slider.speed = sliderSpeed;
    slider.easing = easing;

    console.log(slider);

}

const config = {
    autoPlay: true,
    speed: 500,
    pause: 2000,
    easing: "linear",
    infinite: true
};

setSliderSpeed(config);
