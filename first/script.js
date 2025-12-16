console.log("EnvIn Application");
const mainHeading=document.querySelector("h1");
const subHeadings=document.querySelection("h2");
const dropdown=document.querySelection("dropdown");
document.addEventListener("DOMContentLoaded",function()
{
    console.log("DOM loaded");
    console.log("main",mainHeading.textContent);

});
function handleClick(event){
    console.log("button click",event.target);
    alert("you clicked a button");
}
if(dropdown){
    dropdown.addEventListener("change",function(e){
        console.log("dropdown",e.target.value);
    });
}window.handleClick=handleClick;