let numArray=[1,2,3,4,5,6,7,8,9,0]
let letArray=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
let charArray=["!","@","#","$","%","^","&","*","(",")","-","+","{","}","|","<",">","?"]
let letArray2=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var array=[];


var histElement=document.getElementsByClassName("history")
// console.log(histElement[0])
 
var strngEl = document.querySelectorAll(".power div");
var chckboxes = document.querySelectorAll(".input input")
var element=document.querySelector(".screen")
var clearElement=document.querySelector(".clear")
var absoluteElement=document.querySelector(".ask")
var yesElement=document.querySelector(".yes")
var noElement=document.querySelector(".no")

var allArrays=[];



//checkboxlar deyishende onun icine uygun element concat olunsun;



//numbers ucun
var numInput=document.getElementsByClassName("numbers")

numInput[0].addEventListener("change",(e)=>{
    // console.log(e.target.checked)
    if(e.target.checked){
        allArrays=allArrays.concat(numArray)
    }
    else{
        for(let k=0;k<numArray.length;k++){
            for(let m=0;m<allArrays.length;m++){
                if(numArray[k]===allArrays[m]){
                    allArrays.splice(m,1)
                }
            }
        }
    }    
    // console.log(allArrays)
})


//lowercase ucun
var lowInput=document.getElementsByClassName("lowercase")

lowInput[0].addEventListener("change",(e)=>{
    // console.log(e.target.checked)
    if(e.target.checked){
        allArrays=allArrays.concat(letArray)
    }
    else{
        for(let k=0;k<letArray.length;k++){
            for(let m=0;m<allArrays.length;m++){
                if(letArray[k]===allArrays[m]){
                    allArrays.splice(m,1)
                }
            }
        }
    }    
    // console.log(allArrays)
})


//uppercase ucun

var upInput=document.getElementsByClassName("uppercase")

upInput[0].addEventListener("change",(e)=>{
    // console.log(e.target.checked)
    if(e.target.checked){
        allArrays=allArrays.concat(letArray2)
    }
    else{
        for(let k=0;k<letArray2.length;k++){
            for(let m=0;m<allArrays.length;m++){
                if(letArray2[k]===allArrays[m]){
                    allArrays.splice(m,1)
                }
            }
        }
    }    
    // console.log(allArrays)
})


//symbols ucun
var symInput=document.getElementsByClassName("symbols")

symInput[0].addEventListener("change",(e)=>{
    // console.log(e.target.checked)
    if(e.target.checked){
        allArrays=allArrays.concat(charArray)
    }
    else{
        for(let k=0;k<charArray.length;k++){
            for(let m=0;m<allArrays.length;m++){
                if(charArray[k]===allArrays[m]){
                    allArrays.splice(m,1)
                }
            }
        }
    }    
    // console.log(allArrays)
})



















//range inputunun valuesi yanina yazilsin
var  getInput=document.getElementsByTagName("input")
var getValue=document.querySelector ("#selectValue")

// console.log(getInput[0].value)
getValue.innerHTML=getInput[0].value

getInput[0].addEventListener("input",(e)=>{
    let count = 0;
    for(let j = chckboxes.length-1 ; j>=0;j--){
         if(chckboxes[j].checked){
           count++
        }
    }
    for(let y=strngEl.length-1;y>=0;y--){
        if((3-y)<count){
        strngEl[y].style.backgroundColor ="red"
        }
        else{
            strngEl[y].style.backgroundColor ="#00F0FF"
        }

    }

    
    getValue.innerHTML=getInput[0].value
    

//concat olunmush arrayin icinde gezir ve divin icine yazir

    // var allArrays = numArray.concat(letArray, charArray,letArray2);
    var randomArray = [];


    for (let i = 0; i < getInput[0].value; i++) {
        let randomIndex = Math.floor(Math.random() * allArrays.length); //????? bu setiri basha dushmedim
        let randomElement = allArrays[randomIndex];
        randomArray.push(randomElement);
    }
    
    let randomString=randomArray.join('')
    element.innerHTML=randomString;

    if(element.innerHTML!=""){
    array.unshift(element.innerHTML)
    console.log(array)
    }

    localStorage.setItem("data",JSON.stringify(array))
    var forArray=JSON.parse(localStorage.getItem("data"))
   
   
   
    //localdan gelen elementi dive yazdirmaq 
    histElement[0].innerHTML=""
    for(var n=0; n<forArray.length;n++){
    var newDiv=document.createElement("div")
    
    newDiv.className="newDiv"
    var newContent=document.createTextNode(forArray[n])
    newDiv.appendChild(newContent)

    //divin sonuna icon elave elemek
    var newIcon=document.createElement('i')
    newIcon.className='fa-regular fa-copy'
    newDiv.appendChild(newIcon)
    histElement[0].appendChild(newDiv)
    newIcon.setAttribute("onclick",`copyItem(${n})`)
    
    }

    
})

//copy iconuna basanda hemin password copy olunsun
function copyItem(n){
    navigator.clipboard.writeText(array[n])
}



//buttona basanda copy elesin
var btnElement=document.getElementsByTagName("button")
// console.log(btnElement[0])
btnElement[0].addEventListener("click",()=>{
    navigator.clipboard.writeText(element.innerHTML)
})



//icona basanda tezeden yaradsin
var iconElement=document.getElementsByTagName("i")

iconElement[0].addEventListener("click",(event)=>{
    let count = 0;
    for(let j = chckboxes.length-1 ; j>=0;j--){
         if(chckboxes[j].checked){
           count++
        }
    }
    for(let y=strngEl.length-1;y>=0;y--){
        if((3-y)<count){
        strngEl[y].style.backgroundColor ="red"
        }
        else{
            strngEl[y].style.backgroundColor ="#00F0FF"
        }

    }
    // var allArrays = numArray.concat(letArray, charArray,letArray2);
    var randomArray = [];


    for (let i = 0; i < getInput[0].value; i++) {
        let randomIndex = Math.floor(Math.random() * allArrays.length); //????? bu setiri basha dushmedim
        let randomElement = allArrays[randomIndex];
        randomArray.push(randomElement);
    }
    
    let randomString=randomArray.join('')
    element.innerHTML=randomString;

    if(element.innerHTML!=""){
        array.unshift(element.innerHTML)
        console.log(array)
    }
    localStorage.setItem("data",JSON.stringify(array))
    JSON.parse(localStorage.getItem("data"))



    localStorage.setItem("data",JSON.stringify(array))
    var forArray=JSON.parse(localStorage.getItem("data"))
   
   
   
    //localdan gelen elementi dive yazdirmaq 
    histElement[0].innerHTML=""
    for(var n=0; n<forArray.length;n++){
    var newDiv=document.createElement("div")
    
    newDiv.className="newDiv"
    var newContent=document.createTextNode(forArray[n])
    newDiv.appendChild(newContent)

    //divin sonuna icon elave elemek
    var newIcon=document.createElement('i')
    newIcon.className='fa-regular fa-copy'
    newDiv.appendChild(newIcon)
    histElement[0].appendChild(newDiv)
    newIcon.setAttribute("onclick",`copyItem(${n})`)
    }
})


window.addEventListener('load',()=>{
    if(JSON.parse(localStorage.getItem("data"))){
        array =JSON.parse(localStorage.getItem("data"))
    }else{
        array = []
    }
    // histElement[0].innerHTML=""
    for(var n=0; n<array.length;n++){
    var newDiv=document.createElement("div")
    
    newDiv.className="newDiv"
    var newContent=document.createTextNode(array[n])
    newDiv.appendChild(newContent)

    //divin sonuna icon elave elemek
    var newIcon=document.createElement('i')
    newIcon.className='fa-regular fa-copy'
    newDiv.appendChild(newIcon)
    histElement[0].appendChild(newDiv)
    newIcon.setAttribute("onclick",`copyItem(${n})`)
    }

    
})
console.log(array)

clearElement.addEventListener('click',()=>{
    // let request=confirm("sil")
    
    if(JSON.parse(localStorage.getItem("data")).length==0) return;
    absoluteElement.style.display="inline-block"
})

yesElement.addEventListener("click",()=>{
    absoluteElement.style.display="none"

    element.innerHTML=" "
    array=[];
    localStorage.setItem("data",JSON.stringify([]))
    histElement[0].innerHTML=""
})

noElement.addEventListener("click",()=>{
    absoluteElement.style.display="none"
})























