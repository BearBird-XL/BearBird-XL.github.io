setInterval(() => {
    flushTime();
}, 1000);
let flushTime = function () {
    document.getElementById("span-date").innerText = new Date().toString().substr(4, 20);
}