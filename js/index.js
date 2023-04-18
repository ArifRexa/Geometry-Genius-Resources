// ============================= Area Calculation Function ====================================
function getResult(btn, width, height) {
    const widthValue = width.value;
    const heightValue = height.value;
    const  Areas = document.getElementById("areaContainer");
    const li = document.createElement('li');

    if (btn=='Triangle' || btn=='Rhombus' || btn=='Pentagon') {
        li.innerHTML = `<div class="flex items-center text-base  rounded-lg  group">
    <div class="flex-1 whitespace-nowrap" id="areaName">${btn}</div>
    <div class="flex-1 ml-3 whitespace-nowrap"> <span id="areaValue">${0.5*widthValue*heightValue}</span>cm<sup>2</sup></div>
    <button class="flex-1 ml-3 whitespace-nowrap text-white  hover:bg-blue-800 rounded text-sm text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-sky-600 w-64 p-[5px]">convert to m<sup>2</sup></button>


</div>`
    }
    else if(btn=='Rectangle' || btn=='Parallelogram'){
    li.innerHTML = `<div class="flex items-center text-base  rounded-lg  group">
    <div class="flex-1 whitespace-nowrap" id="areaName">${btn}</div>
    <div class="flex-1 ml-3 whitespace-nowrap"> <span id="areaValue">${widthValue*heightValue}</span>cm<sup>2</sup></div>
    <button class="flex-1 ml-3 whitespace-nowrap text-white  hover:bg-blue-800 rounded text-sm text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-sky-600 w-64 p-[5px]">convert to m<sup>2</sup></button>


</div>`

    }
    else {
        li.innerHTML = `<div class="flex items-center text-base  rounded-lg  group">
    <div class="flex-1 whitespace-nowrap" id="areaName">${btn}</div>
    <div class="flex-1 ml-3 whitespace-nowrap"> <span id="areaValue">${3.1416*widthValue*heightValue}</span>cm<sup>2</sup></div>
    <button class="flex-1 ml-3 whitespace-nowrap text-white  hover:bg-blue-800 rounded text-sm text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-sky-600 w-64 p-[5px]">convert to m<sup>2</sup></button>


</div>`
    }
    
    Areas.appendChild(li);
    width.value= ""
    height.value = ""
}

// ============================= Area Calculation ====================================
document.getElementById("triangleBtn").addEventListener("click", function () {
    const widthValue1 = document.getElementById("width1");
    const heightValue1 = document.getElementById("height1");
    if(widthValue1.value.length==0, heightValue1.value.length==0){
        alert("Please enter proper input")
    }
    else getResult("Triangle", widthValue1, heightValue1);
 
})



document.getElementById("rectangleBtn").addEventListener("click", function () {
    const widthValue1 = document.getElementById("rectangleWidth");
    const heightValue1 = document.getElementById("rectangleHeight");
    if(widthValue1.value.length==0, heightValue1.value.length==0){
        alert("Please enter proper input")
    }
    else getResult("Rectangle", widthValue1, heightValue1);
 
})


document.getElementById("parallelogramBtn").addEventListener("click", function () {
    const widthValue1 = document.getElementById("parallelogramWidth");
    const heightValue1 = document.getElementById("parallelogramHeight");
    if(widthValue1.value.length==0, heightValue1.value.length==0){
        alert("Please enter proper input")
    }
    else getResult("Parallelogram", widthValue1, heightValue1);
 
})


document.getElementById("RhombusBtn").addEventListener("click", function () {
    const widthValue1 = document.getElementById("RhombusWidth");
    const heightValue1 = document.getElementById("RhombusHeight");
    if(widthValue1.value.length==0, heightValue1.value.length==0){
        alert("Please enter proper input");
    }
    else getResult("Rhombus", widthValue1, heightValue1);

})

document.getElementById("PentagonBtn").addEventListener("click", function () {
    const widthValue1 = document.getElementById("PentagonWidth");
    const heightValue1 = document.getElementById("PentagonHeight");
    if(widthValue1.value.length==0, heightValue1.value.length==0){
        alert("Please enter proper input")
    }
    else getResult("Pentagon", widthValue1, heightValue1);

})

document.getElementById("EllipseBtn").addEventListener("click", function () {
    const widthValue1 = document.getElementById("EllipseWidth");
    const heightValue1 = document.getElementById("EllipseHeight");
    if(widthValue1.value.length==0, heightValue1.value.length==0){
        alert("Please enter proper input")
    }
    else getResult("Ellipse", widthValue1, heightValue1);

})
// ============================= Area Calculation End ====================================


// ============================= Get Random Color Function on Card ====================================
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// ============================= Get Random Color on Card ====================================
document.getElementById("Triangle").addEventListener("mouseover", function () {

    document.getElementById("Triangle").style.backgroundColor = getRandomColor();
}) 
document.getElementById("Triangle").addEventListener("mouseout", function () {

    document.getElementById("Triangle").style.backgroundColor = "white";
}) 


document.getElementById("Rectangle").addEventListener("mouseover", function () {

    document.getElementById("Rectangle").style.backgroundColor = getRandomColor();
}) 
document.getElementById("Rectangle").addEventListener("mouseout", function () {

    document.getElementById("Rectangle").style.backgroundColor = "white";
}) 



document.getElementById("Parallelogram").addEventListener("mouseover", function () {

    document.getElementById("Parallelogram").style.backgroundColor = getRandomColor();
}) 
document.getElementById("Parallelogram").addEventListener("mouseout", function () {

    document.getElementById("Parallelogram").style.backgroundColor = "white";
}) 

// ============================= Mouse Over and Out End ====================================


document.getElementById("Rhombus").addEventListener("mouseover", function () {

    document.getElementById("Rhombus").style.backgroundColor = getRandomColor();
}) 
document.getElementById("Pentagon").addEventListener("mouseover", function () {

    document.getElementById("Pentagon").style.backgroundColor = getRandomColor();
}) 
document.getElementById("Ellipse").addEventListener("mouseover", function () {

    document.getElementById("Ellipse").style.backgroundColor = getRandomColor();
}) 



// document.getElementById("triangleBtn").addEventListener("click", function () {
//     const widthValue1 = document.getElementById("width1");
//     const widthValue = widthValue1.value;
//     const heightValue1 = document.getElementById("height1");
//     const heightValue = heightValue1.value;
//     const  Areas = document.getElementById("areaContainer");
//     const li = document.createElement('li');
//     li.innerText = 0.5*widthValue* heightValue;
//     Areas.appendChild(li);
//     widthValue1.value= ""
//     heightValue1.value = ""
    
// })