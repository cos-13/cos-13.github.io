document.title="cos-13｜"+document.title;/*タイトル自動設定 */

const he = document.getElementById("header");/*ヘッダーのelement */


const path = location.pathname.split("/");//pathは配列
console.log(path)

const home = document.createElement("a"); //ホームページだけ特別
home.style.textDecoration = 'none';
home.setAttribute("href",location.origin);
home.textContent = "cos-13";
he.appendChild(home);

function dainari(){ //>を出力するだけのカス関数
    const dai=document.createElement("a");
    dai.textContent=">";
    he.appendChild(dai);
}

for(const p of path){
    if(p=="") continue;
    dainari();
    const f = document.createElement("a");
    f.textContent=p;
    f.setAttribute("href","index.html");
    he.appendChild(f);
} 