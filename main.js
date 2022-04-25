
$(document).ready(function(){


  function verificarCampo(){
         

//VERIFICA SE O INPUT ESTÁ VAZIO
      if ($("#adicionar").val() != "") {
          $('#botao').prop('disabled', false);
         
      }
      else {
          $('#botao').prop('disabled', true);
        
          
      }

  
  };

  
//CHAMA A FUNÇÃO 
verificarCampo();


//EVENTO QUE VERIFICA SE O INPUT ESTÁ PREECHIDO
  document.getElementById("adicionar").addEventListener("keydown", function(){
   

    verificarCampo();
  

  });
  

  document.getElementById("botao").addEventListener("click", function(e){
    e.preventDefault();
  
    var dadoInput = document.getElementById('adicionar').value;
   

 //LIMPANDO E VOLTANDO O FOCUS PARA O INPUT
  $("#adicionar").val('');
  document.querySelector("#adicionar").focus();
  verificarCampo();
 

  $(".cardContainer").append(`<div class='card'>
  <span class='tmletra'>${dadoInput}</span>
  <button class='buttoncard'><i class="fa-solid fa-trash-can"></i></button>  
  </div>`);

 


  $(".buttoncard").click( function(){
      var $parent = $(this).parents('.card')
          $parent.remove();

 
    });

  });
 


})

