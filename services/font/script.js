const input = document.getElementById("inputText");
const results = document.getElementById("results");


const fonts = [
"𝐁𝐨𝐥𝐝",
"𝑰𝒕𝒂𝒍𝒊𝒄",
"𝓢𝓬𝓻𝓲𝓹𝓽",
"𝔊𝔬𝔱𝔥𝔦𝔠",
"𝕯𝖆𝖗𝖐",
"𝗠𝗼𝗱𝗲𝗿𝗻",
"𝘚𝘵𝘺𝘭𝘦",
"Ｗｉｄｅ",
"ⓒⓘⓡⓒⓛⓔ",
"🅱🅾🆇",
"『TEXT』",
"꧁TEXT꧂",
"★ TEXT ★",
"⚡ TEXT ⚡"
];


function generateFonts(){

let text = input.value || "ZESR";


results.innerHTML="";


fonts.forEach(style=>{

let output = style.replace("TEXT",text);


let div=document.createElement("div");

div.className="font-card";


div.innerHTML=`

<div class="font-text">${output}</div>

<button onclick="copyText('${output}')">
📋 Copy
</button>

`;


results.appendChild(div);


});

}



function copyText(text){

navigator.clipboard.writeText(text);

alert("Copied ⚡");

}


generateFonts();
