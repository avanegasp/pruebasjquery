  $('form').submit(function (e) {
     e.preventDefault();
     // Usuario
         var _user = $('#username').val()
         if(_user.indexOf(' ') >= 0) {   
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


  // EL SIGUIENTE EJERCICIO CONTIENE .siblings() de las alertas para cada input A EL DE ARRIBA LE FALTAN


/*

  $('form').on('submit', function(e) {
    e.preventDefault();

    if ($('#username').val() == "") {
      $('#username').parent().addClass("has-error");
      $('#username').siblings('p').html('Ingresa un usuario');
    } else if ($('#username').val().indexOf(" ") != -1) {
      $('#username').parent().addClass("has-error");
      $('#username').siblings('p').html('No puede contener espacios');
    } else {
      // hide error
      $('#username').parent().removeClass("has-error");
      $('#username').siblings('p').html('');
    }

    if ($('#password').val() == "") {
      $('#password').parent().addClass('has-error');
      $('#password').siblings('p').html("Ingresa una contraseña");
    } else if ($('#password').val().length < 6) {
      $('#password').parent().addClass('has-error');
      $('#password').siblings('p').html("Debe contener mínimo 6 caracteres");
    } else if ($('#password').val().length > 40) {
      $('#password').parent().addClass('has-error');
      $('#password').siblings('p').html("Debe contener máximo 40 caracteres");
    } else {
      // hide error
      $('#password').parent().removeClass('has-error');
      $('#password').siblings('p').html("");
    }

    if (!$('#terms').is(":checked")) {
      $('.checkbox').addClass('has-error');
    } else {
      // hide error
      $('.checkbox').removeClass('has-error');
    }
  });

  */