


const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;


let interval = setInterval(() => {
    Blurring();
}, 30)


function Blurring(){
    load++;

    // Loading increases until it has value 100
    if(load > 99){
        clearInterval(interval);
    }


    loadingText.innerHTML = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}