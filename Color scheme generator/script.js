document.querySelector(".get-color").addEventListener("click", function(event){
    const colorPicker = document.querySelector(".color-choose").value
    const modeChoose = document.querySelector(".select").value
        fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.slice(1)}&mode=${modeChoose}&count=4`)
        .then(res => res.json())
        .then(data => {
            const returnColors = data.colors.map((color) => color.hex.value)
            
            document.querySelector(".colors").innerHTML = getColors(colorPicker, returnColors)
        } )
})
const returnColors = (item) =>{
    return `
    <div class="color_" style="background: ${item}" onClick="copyCode('${item}')">
    <div class="hex" >
      <p>${item}</p>
    </div>
  </div> 
  `
   
}

const getColors = (firstColor,secondColor) =>{
    const arr = [returnColors(firstColor)]
    for(color of secondColor){
        arr.push(returnColors(color))
    }
    
    return arr.join("")
}

const copyCode = (itemForCopy) =>{
    navigator.clipboard.writeText(itemForCopy);
    alert(`Copied: ${itemForCopy}`)
    
}