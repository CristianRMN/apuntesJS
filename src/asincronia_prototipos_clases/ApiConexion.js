document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button.request").addEventListener("click", function (event) {
        requestActivity();
    })
})

function requestActivity(){
    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Fetch")
        .then(response => response.json())
        .then(data => console.log(data));
}