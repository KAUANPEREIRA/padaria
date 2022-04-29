let menuBar = document.querySelector('.icone')

menuBar.addEventListener('click',(e)=>{
    e.preventDefault()
   let dispositivo = document.querySelector('.dispositivo')
   if(dispositivo.style.display=="none"){
       dispositivo.style.display="flex"
   }
    
    
   
})

