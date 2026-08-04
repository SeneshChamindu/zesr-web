const input = document.getElementById("inputText");
const results = document.getElementById("results");

const maps = [
  {name:"Bold", style:"font-weight: 800;"},
  {name:"Italic", style:"font-style: italic;"},
  {name:"Bold Italic", style:"font-weight: 800; font-style: italic;"},
  {name:"Underline", style:"text-decoration: underline;"},
  {name:"Uppercase", style:"text-transform: uppercase;"},
  {name:"Lowercase", style:"text-transform: lowercase;"},
  {name:"Small Caps", style:"font-variant: small-caps;"},
  {name:"Letter Spacing", style:"letter-spacing: 3px;"},
  {name:"Shadow", style:"text-shadow: 2px 2px 4px #38bdf8;"},
  {name:"Gradient", style:"background: linear-gradient(90deg,#38bdf8,#06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"}
];


function convert(text, map){
  let out = "";
  for(let ch of text){
    if(ch >= 'A' && ch <= 'Z'){
      out += map.upper[ch.charCodeAt(0) - 65];
    }
    else if(ch >= 'a' && ch <= 'z'){
      out += map.lower[ch.charCodeAt(0) - 97];
    }
    else{
      out += ch;
    }
  }
  return out;
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied: " + text); // copy una kiyala penna
}

function generateFonts(){
  let txt = input.value || "ZESR";
  results.innerHTML = "";

  maps.forEach(m => {
    let val = convert(txt, m); // meka athule witharai

    results.innerHTML += `
      <div class="font-card">
        <h3>${m.name}</h3> <!-- Font name eka add kala -->
        <div class="font-text">${val}</div>
        <button onclick="copyText(\`${val}\`)"> <!-- backtick dala fix kala -->
          📋 Copy
        </button>
      </div>
    `;
  });
}

// Type karaddi auto generate wenna
input.addEventListener("input", generateFonts);

// Page load unama 1 parak run wenna
generateFonts();
function generateFonts(){
  let txt = input.value || "ZESR";
  results.innerHTML = "";

  maps.forEach(m => {
    results.innerHTML += `
      <div class="font-card">
        <h3>${m.name}</h3>
        <div class="font-text" style="${m.style}">${txt}</div>
        <button onclick="copyText('${txt}')">
          📋 Copy
        </button>
      </div>
    `;
  });
}
