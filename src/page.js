document.addEventListener("DOMContentLoaded",()=>{
    var template = document.getElementById('template').cloneNode(true);
    document.getElementById("new-btn").addEventListener("click",()=>{
        document.getElementById("files").appendChild(template);
        template = template.cloneNode(true);
    });
});