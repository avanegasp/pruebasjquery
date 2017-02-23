  $('form').submit(function (e) {
     e.preventDefault();
     // Usuario
         var _user = $('#username').val();
         if(_user.indexOf(' ') >= 0){   
             $('#username').closest('.form-group').addClass('has-error')
             //$('#username').closest('.help-block').text("el usuario no debe tener espacios")
         }else{
             $('#username').closest('.form-group').removeClass('has-error')
         }

     // Contraseña
         if($('#password').val().length < 6) {  
             $('#password').closest('.form-group').addClass('has-error')
             //$('#password').closest('.help-block').text("la contraseña no debe tener menos de 6 caracteres")
                
         }else {
             $('#password').closest('.form-group').removeClass('has-error')            
         
         }if($('#password').val().length > 40) {
             $('#password').closest('.form-group').addClass('has-error')
             //$('#password').closest('.help-block').text("la contraseña no debe tener mas de 40 caracteres")
                  
         }else{
             $('#password').closest('form-group').removeClass('has-error')
         };

         // Casilla de términos

         if($("#terms").is(':checked')) { 
             $('.checkbox').removeClass('has-error')
             //console.log("estas autorizado")
         } else {  
             console.log("no esta autorizado")
             $('.checkbox').addClass('has-error')  
         } 

 });




