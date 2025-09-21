// complete downlording in exact 5 seconds..!!!

let progress = 0;
setInterval(function()
{
    if(progress<100)
    {
        progress++;
        document.querySelector(".progress-container").style.width = `${progress}%`;
        document.querySelector("#percentText").textContent = `${progress}%`;
    }
},(5000/100))