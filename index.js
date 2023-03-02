let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let jsonObj = document.getElementById("json-text");
let count = 0;
const d = new Date();
let time = d.getTime;
let json = {"count": count, "time": d};

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    jsonObj.textContent = JSON.stringify(json);
    countEl.textContent = 0;
    count = 0;
   
}


