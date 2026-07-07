document.title="cos-13｜"+document.title;

const he = document.getElementById("header");

const pathdisp = document.createElement("a");

const path = location.pathname.split("/");

console.log(path)
pathdisp.setAttribute("href",location.href);
pathdisp.textContent = location.pathname;

he.appendChild(pathdisp);