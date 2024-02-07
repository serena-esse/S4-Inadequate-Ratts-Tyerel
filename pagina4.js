
let lastUserVote = 0; // Variabile globale per memorizzare l'ultimo voto dell'utente
 function stelle () {
    const stars = document.querySelectorAll(".star");
      stars.forEach((star,index)=>{   // index indica l'indice dell'elemnto nella nodelist
         star.addEventListener("click",function () {  // funzione che si attiva al click su una stella 
             stars.forEach((starElements,iStar)=>{ // iStar è l'indice dell'interazione 
                 if (iStar<=index) {          // se l'indice delaa stella iterata è  inferiore o uguale a 
                     starElements.classList.add("active"); //quella della stella cliccata .rende la stella active 
                 } else {
                     starElements.classList.remove("active"); // se è superiore a rimuove , disattiva le stelle sucessive a quella cliccata 
                 }
             });
           lastUserVote=index+1
         });

     

        
     });

};


  function bottone() {                                   //funzione che aggiunge l'event al botto che porta ad una pagina web 
     const button=document.querySelector(".bottone");
     const textarea=document.querySelector(".textarea")
    button.addEventListener("click",function(){              // stampa il contenuto della textare 
       const valoreTextarea=textarea.value;
       console.log("il voto dell'utente è :",lastUserVote);
 
        console.log("contenuto textarea :",valoreTextarea);
        setTimeout(()=>{                             // metto un ritardo di 2 secpndi( scritto in millisecondi) prima del reinderizzamento
            window.location.href="#" ;                  


        },2000);     
     return {lastUserVote,valoreTextarea}
     })

  }


window.onload= function() {
 bottone()
 stelle()
}