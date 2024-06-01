function toggleMode(){

    const html=document.documentElement
     html.classList.toggle("light")
    
     // pegar a img no css
    const img = document.querySelector("#profile img")
    
    //se a class css for light
    if(html.classList.contains("light")){
        //muda de cordo com a class light
        img.setAttribute("src","./assets/avatar-light.png")
        img.setAttribute("title","mike no fundo Branco")
    }else{
        //se nao fica com cores escuras imagens etc
        img.setAttribute("src","./assets/avatar.png")
        img.setAttribute("title"," mike no fundo escuro")
    
    }
   
    
}