// Placeholder working script structure.
// Replace with your full generator logic if desired.

const input=document.getElementById("inputText");
const results=document.getElementById("results");

const normal="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const styles=[
"𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
"𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"
];

function convert(text,map){
 let out="";
 for(const ch of text){
   const i=normal.indexOf(ch);
   out += i>=0 ? map[i] : ch;
 }
 return out;
}

function copyText(t){navigator.clipboard.writeText(t);}

function generateFonts(){
 const text=input.value||"ZESR";
 results.innerHTML="";
 styles.forEach(s=>{
   const val=convert(text,s);
   const card=document.createElement("div");
   card.className="font-card";
   card.innerHTML=`<div class="font-text">${val}</div>
   <button onclick="copyText('${val}')">📋 Copy</button>`;
   results.appendChild(card);
 });
}
generateFonts();
