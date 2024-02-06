 function stelle () {
    
     
     const stars=document.querySelectorAll(".star");
     stars.forEach((star,index)=>{   // index indica l'indice dell'elemnto nella nodelist
        star.addEventListener("click",function () {  // funzione che si attiva al click su una stella 
            stars.forEach((starElements,iStar)=>{ // iStar è l'indice dell'interazione 
                if (iStar<=index) {          // se l'indice delaa stella iterata è  inferiore o uguale a 
                    starElements.classList.add("active"); //quella della stella cliccata .rende la stella active 
                } else {
                    starElements.classList.remove("active"); // se è superiore a rimuove , disattiva le stelle sucessive a quella cliccata 
                }
            });
            console.log("il voto dell'utente è :",index+1);  //stampo sulla console il valore della stella cliccata
        });
    });
    
};
 function bottone() {                                   //funzione che aggiunge l'event al botto che porta ad una pagina web 
    const button=document.querySelector(".bottone");
    button.addEventListener("click",function(){
        
        window.location.href="#"                   
    })
 }


window.onload= function() {
 bottone()
 stelle()
}