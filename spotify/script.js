function newelem(){

const page = window.open("playlist.html");
page.addEventListener('DOMContentLoaded',()=>{
    var li = document.createElement("li");
    var inputValue = document.getElementById("sg-name-2").innerHTML;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    console.log(li);
    page.document.getElementById("myul").appendChild(li);

})

}
