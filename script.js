setInterval(() => {
    time = new Date();
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    hrRotation = 30*hr + min/2;
    minRotation = 6*min + sec/10;
    secRotation = 6*sec;

    console.log(hrRotation, minRotation, secRotation);

    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    hour.style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);