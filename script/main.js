document.title="cos-13｜"+document.title;/*タイトル自動設定 */

const headercolor="lightgray";
const dispTree = true;
const he = document.getElementById("header");/*ヘッダーのelement */


const path = location.pathname.split("/");//pathは配列
console.log(path);

const lin = document.createElement("span");

const home = document.createElement("a"); //ホームページだけ特別
home.setAttribute("style","text-decoration:none");
home.setAttribute("href",location.origin);
home.textContent = "cos-13 ";
home.style.color="whitesmoke";
if(location.pathname!="/"){
    home.addEventListener("mouseover", ()=>{
        home.style.fontWeight="600";
    });
    home.addEventListener("mouseleave", ()=>{
        home.style.fontWeight="normal";
    });
}
lin.appendChild(home);

function dainari(){ //>を出力するだけのカス関数 //引数を持つ関数化して組み込めば省略できる？
    const dai=document.createElement("span");
    dai.textContent=" > ";
    dai.style.color=headercolor;
    
    dai.style.fontSize="12px";
    lin.appendChild(dai);
}

if(dispTree){
let i = -1;
for(const p of path){
    i++;
    if(p == "" || p == "index.html") continue;
    dainari();
    const f = document.createElement("a");

    const pPath = path.slice(0, i+1);
    const npPath = location.origin + pPath.join('/');
    console.log(npPath);
    fetch(npPath)
    .then(response => {
        return response.text();
    })
    .then(body => {
        const m = body.match(/<title>(.*)<\/title>/);
        f.textContent=m[1];
    });

    f.setAttribute("style","text-decoration:none");
    f.style.color=headercolor;
    f.style.fontSize="12px";
    console.log(location.href);
    if(npPath!=location.href && npPath+"/"!=location.href){
        f.addEventListener("mouseover", ()=>{
            f.style.fontWeight="600";
        });
        f.addEventListener("mouseleave", ()=>{
            f.style.fontWeight="normal";
        });
    }
    f.setAttribute("href",npPath);
    lin.appendChild(f);
}
}
he.appendChild(lin);

/*以上ヘッダー */
/* 以下フッター*/

const fo = document.getElementById("footer");
const text = document.createElement("a");

const bod=document.body;
let mode = localStorage.getItem('mode');

text.textContent="Dark" //Content
if (mode === 'dark') {
    bod.classList.add('dark');
    text.textContent="Light"
}

text.style.color="lightgray";
text.style.marginTop="5px";
text.style.position="absolute";
text.style.right="0px";
text.style.fontSize="9pt";
text.style.userSelect="none";


text.onclick=()=>{
    bod.classList.toggle("dark");
    if (mode === 'normal') {
        localStorage.setItem('mode', 'dark');
        mode = 'dark';
        text.textContent="Light"
    } else {
        localStorage.setItem('mode', 'normal');
        mode = 'normal';
        text.textContent="Dark"
  }
};

fo.appendChild(text);

//MathJax
var script = document.createElement('script'); 
script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"; //ファイルパス
document.body.appendChild(script);