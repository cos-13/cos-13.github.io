document.title="cos-13｜"+document.title;/*タイトル自動設定 */

const headercolor="lightgray";

const he = document.getElementById("header");/*ヘッダーのelement */


const path = location.pathname.split("/");//pathは配列
console.log(path);

const home = document.createElement("a"); //ホームページだけ特別
home.setAttribute("style","text-decoration:none");
home.setAttribute("href",location.origin);
home.textContent = "cos-13 ";
home.style.color="whitesmoke";
he.appendChild(home);

function dainari(){ //>を出力するだけのカス関数
    const dai=document.createElement("a");
    dai.textContent=">";
    dai.style.color=headercolor;
    
    dai.style.fontSize="12px";
    he.appendChild(dai);
}

let i = -1;
for(const p of path){
    i++;
    if(p == "" || p == "index.html") continue;
    dainari();
    const f = document.createElement("a");

    const pPath = path.slice(0,i+1);
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
    f.setAttribute("href",npPath);
    he.appendChild(f);
}