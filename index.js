

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let jsonObj = document.getElementById("json-text");



console.log(d);

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    const d = new Date(); // gets new time for GMT
    // let time = d.getTime(); for current time in milliseconds
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    let json = {"count": count, "time": d};
    // jsonObj.textContent = count + d;
    jsonObj.textContent = JSON.stringify(json);
    countEl.textContent = "0";
    count = 0;
}

function send() {
    let sendEl = document.getElementById("email")
    window.open('mailto:manokel@gmail.com'  + sendEl.textContent)
    window.open('mailto:manokel@gmail.com?subject=subject&body=body')
}


