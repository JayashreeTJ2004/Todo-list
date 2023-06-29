const todoText=document.getElementById('todo-text'); 

const ultag=document.getElementById('ul');
function addTask(){
if(todoText.value.trim()===''){
    alert("Enter some text!!");
}else{
    console.log(todoText.value.trim());
    const litag=document.createElement("li");
    const spantext=document.createElement("span");
    const spanclose=document.createElement("span");
    const textNode=document.createTextNode(todoText.value.trim());
    spantext.appendChild(textNode);
    spantext.addEventListener('click',(e)=>{
        
        e.target.classList.toggle('done');
    })
    spanclose.classList.add("close");
    spanclose.innerHTML="&times;"; 
    spanclose.addEventListener('click',(e)=>{
        const li=e.target.parentElement;
       li.parentElement.removeChild(li);
    })
    litag.appendChild(spantext);
    litag.appendChild(spanclose);
    ultag.appendChild(litag);
    todoText.value="";
}

}