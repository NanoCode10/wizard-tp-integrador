
$(document).ready(function(){
    var nombre, email, food, check, comentario;
 //Muestra y oculta con el boton anterior
    $("#anterior-final").click(function() {
           
            $('article.card-final').addClass('d-none');
            $('article.card-comnt').removeClass('d-none');
            $('div.progreso').animate({width: '75%'});
            $("div.progreso").text("75%");
        });
    $("#anterior-comnt").click(function() {
            
            $('article.card-comnt').addClass('d-none');
            $('article.card-pedido').removeClass('d-none');
            $('div.progreso').animate({width: '50%'});
            $("div.progreso").text("50%");
        });
    $("#anterior-pedido").click(function() {
            
            $('article.card-pedido').addClass('d-none');
            $('article.card-ingreso').removeClass('d-none');
            $('div.progreso').animate({width: '25%'});
            $("div.progreso").text("25%");

        });
    $("#sgt-ing").click(function() {
            
            $('article.card-ingreso').addClass('d-none');
            $('article.card-pedido').removeClass('d-none');
            $('div.progreso').animate({width: '50%'});
            $("div.progreso").text("50%");

            nombre = $("#nombre").val();
            console.log('nombre ' + nombre);
            email = $("#email").val();
            console.log('email ' + email);

        });
    $("#sgt-pedido").click(function() {
            
            $('article.card-pedido').addClass('d-none');
            $('article.card-comnt').removeClass('d-none');
            $('div.progreso').animate({width: '75%'});
            $("div.progreso").text("75%");

            food = $("#combo-food").val();
            console.log('food:  ' + food);
            check = ($('input:radio[name=flexRadioDefault]:checked').val());
			console.log('tamaño: ' + check);
        });      
    $("#sgt-comnt").click(function() {
            
            $('article.card-comnt').addClass('d-none');
            $('article.card-final').removeClass('d-none');
            $('div.progreso').animate({width: '100%'});
            $("div.progreso").text("100%");

            comentario = $("#comentario").val();
            console.log('Comentario:  ' + comentario);
            $("#conf-nombre").empty();
            $('#conf-nombre').append(nombre);
            $("#conf-mail").empty();
            $('#conf-mail').append(email);
            $("#conf-comida").empty();
            $('#conf-comida').append(food);
            $("#conf-check").empty();
            $("#conf-tm").empty();
            $('#conf-tm').append(check);
            $("#conf-comnt").empty();
            $('#conf-comt').append(comentario);
                
        });
    $("#enviar-final").click(function() {     
        alert('¡Felicidades el pedido ya esta en camino!');
    });    
});        