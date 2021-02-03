// main.js
let vol_num     = document.querySelector("#volume-number");
let vol_sli     = document.querySelector("#volume-slider");
let vol_icon    = document.querySelector("#volume-image"); 
let horn_btn    = document.querySelector("#honk-btn");
let air_radio   = document.querySelector("#radio-air-horn");
let car_radio   = document.querySelector("#radio-car-horn");
let par_radio   = document.querySelector("#radio-party-horn");
let audio       = document.querySelector("#horn-sound");
let sound_icon  = document.querySelector("#sound-image");
let form        = document.querySelector("#party-horn-form");

function updateImageAndButton(){
    horn_btn.disabled = false;
    audio.volume = vol_num.value/100;
    if(vol_num.value >= 67){
        vol_icon.src = "./assets/media/icons/volume-level-3.svg";
    } else if(vol_num.value >= 34){
        vol_icon.src = "./assets/media/icons/volume-level-2.svg";
    } else if(vol_num.value >= 1){
        vol_icon.src = "./assets/media/icons/volume-level-1.svg";
    } else{
        vol_icon.src = "./assets/media/icons/volume-level-0.svg";
        horn_btn.disabled = true;
    }
}

function updateRadioButtons(){
    if(air_radio.checked){
        audio.src = "./assets/media/audio/air-horn.mp3";
        sound_icon.src = "./assets/media/images/air-horn.svg";
    } else if (car_radio.checked) {
        audio.src = "./assets/media/audio/car-horn.mp3";
        sound_icon.src = "./assets/media/images/car.svg";
    } else {
        audio.src = "./assets/media/audio/party-horn.mp3";
        sound_icon.src = "./assets/media/images/party-horn.svg";
    }
}

air_radio.addEventListener("change", updateRadioButtons);
car_radio.addEventListener("change", updateRadioButtons);
par_radio.addEventListener("change", updateRadioButtons);

vol_num.addEventListener("input", function(){
    vol_sli.value = vol_num.value;
    updateImageAndButton();
});

vol_sli.addEventListener("input", function(){
    vol_num.value = vol_sli.value;
    updateImageAndButton();
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    audio.play();
})


// TODO
