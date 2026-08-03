const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{
    btn.onclick = ()=>{
        alert("Service selected!");
    }
});
