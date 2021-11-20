let hours = document.querySelector('.digital');
let ph = document.querySelector('.p_h');
let pm = document.querySelector('.p_m');
let ps = document.querySelector('.p_s');

function hoursActual(){
    let novaHora = new Date();
    let h = novaHora.getHours();
    let m = novaHora.getMinutes();
    let s = novaHora.getSeconds();

    hours.innerHTML = `${moreZero(h)}:${moreZero(m)}:${moreZero(s)}`; 

   

    let sDeg = ((360 / 60) * s) -90;
    let mDeg = ((360 / 60) * m) -90;
    let hDeg = ((360 / 12) * h) -90;

    ps.style.transform = `rotate(${sDeg}deg)`
    pm.style.transform = `rotate(${mDeg}deg)`
    ph.style.transform = `rotate(${hDeg}deg)`

}
setInterval(hoursActual, 1000)
hoursActual();

function moreZero(time){
        return time < 10 ? `0${time}` : time
}