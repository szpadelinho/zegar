function showTime(){
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    console.clear()
    console.log(`Aktualny czas: ${currentTime}`);
}

setInterval(showTime, 1000)