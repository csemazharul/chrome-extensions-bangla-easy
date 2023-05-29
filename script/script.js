const btn=document.getElementById("txt")

btn.addEventListener("dblclick", event=>{
    const selectedText=window.getSelection().toString()
    if(selectedText.length>0){
        console.log(selectedText, 'selected')
    }
})