var logo=document.getElementById("myImg");
var imgModal=document.getElementById("imgModal");
var close=document.getElementById("close");
var img=document.getElementById("img");
var description=document.getElementById("description");

logo.addEventListener("click",()=>{
    imgModal.style.display="block";
    description.innerHTML="our services";
    img.src="images_app/images"
});

close.addEventListener("click",()=>{
    imgModal.style.display = "none";
})