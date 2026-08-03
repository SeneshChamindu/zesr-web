const results = document.getElementById("results");
const inputText = document.getElementById("inputText");


const fontStyles = [

"𝐙𝐄𝐒𝐑",
"𝑍𝐸𝑆𝑅",
"𝒁𝑬𝑺𝑹",
"𝓩𝓔𝓢𝓡",
"𝔃𝔢𝔰𝔯",
"𝕫𝕖𝕤𝕣",
"𝖅𝕰𝕾𝕽",
"𝗭𝗘𝗦𝗥",
"𝘡𝘌𝘚𝘙",
"𝙕𝙀𝙎𝙍",
"ＺＥＳＲ",
"ⓏⒺⓈⓇ",
"🅉🄴🅂🅁",
"ᴢᴇsʀ",
"ᶻᵉˢʳ",
"Z E S R",
"Z•E•S•R",
"Z丨E丨S丨R",
"★ ZESR ★",
"✦ ZESR ✦",
"⚡ ZESR ⚡",
"『ZESR』",
"【ZESR】",
"꧁ZESR꧂",
"༺ZESR༻",
"☾ ZESR ☽",
"♛ ZESR ♛",
"♚ ZESR ♚",
"✧ZESR✧",
"✪ZESR✪"

];


// Unicode Font Converter

function convertFont(text, type){

const normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const styles = [

"𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",

"𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",

"𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟",

"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"

];


let map = styles[type % styles.length];

let output="";

for(let char of text){

let index = normal.indexOf(char);

if(index !== -1){
output += map[index];
}
else{
output += char;
}

}

return output;

}



// Generate Fonts

function generateFonts(){

let text = inputText.value.trim();

if(text===""){
text="ZESR";
}


results.innerHTML="";


for(let i=0;i<50;i++){

let styled;

if(i<fontStyles.length){

styled = fontStyles[i].replaceAll("ZESR",text);

}else{

styled = convertFont(text,i);

}


let box=document.createElement("div");

box.className="font-card";


box.innerHTML=`

<div class="font-text">${styled}</div>

<button onclick="copyText('${styled.replace(/'/g,"\\'")}')">
📋 Copy
</button>

`;


results.appendChild(box);


}

}



// Copy Function

function copyText(text){

navigator.clipboard.writeText(text);

alert("Copied Successfully ⚡");

}


// Load Default

generateFonts();
