var cElement;
const move=function(el){
    const boxs=document.querySelectorAll("#box")
    boxs.forEach(el=>{
        el.addEventListener("mousedown",()=>{
            el.style.position="absolute"
            cElement=el
            document.onmousemove=(e)=>{
                var x=e.pageX
                var y=e.pageY
                cElement.style.left=x+"px"
                cElement.style.top=y+"px"
            }
        })

    })
    document.onmouseup=function(e){
        cElement=null
    }

}