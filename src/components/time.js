let currentTime = new Date();
let pe = new Date("Sat Dec 16 2023 14:00:00 GMT-0300");
//centroamerica GMT-0600
//let day = currentTime.setDate().setHours(14)-Sat Dec 16 2023 21:00:00 GMT-0300
let days = Math.floor((pe - currentTime)/(24*60*60*1000));
let hours = (Math.floor((pe - currentTime)/(60*60*1000)))-(days*24);
let minutes = (Math.floor((pe - currentTime)/(60*1000)))-(hours*60+(days*24*60));
let seconds = (Math.floor((pe - currentTime)/1000))-((days*24*60*60)+(hours*60*60)+(minutes*60));
setInterval(()=>{
    seconds--;
    if(seconds<0){
        seconds=59
        minutes--
        if(minutes<0){
            minutes=59
            hours--
            if(hours<0){
                hours=23
                days--
            }
        }
    }
     console.log(`days:${days}hours:${hours}minutes:${minutes}seconds:${seconds}`)
},1000)