$(document).keypress(function(event){
  var activeActual = $('.active1')
	var activeMove = $('.active1').next()
  var siguienteRem = $('.active2')
	var siguiente = $('.active2').next()

	if (event.keyCode == 109) {
    activeActual.removeClass('active1')
		activeMove.addClass('active1')
	}else if(event.keyCode == 97) {
    siguienteRem.removeClass('active2')
		siguiente.addClass('active2')
	}

  if ($("td.ultimate-item").hasClass("active1")){
      // $( "td.ultimate-item" ).css( "background-color", "red" );
      alert("Ganaste Jugador 1!")
      } else if ($("td.ultimate-item").hasClass("active2")){
      // $( "td.ultimate-item" ).css( "background-color", "red" );
      alert("Ganaste Jugador 2!")
      }
});
    $('input').click(function c(){
        var n=$('.c').attr('id');
        var c=n;
        $('.c').text(c);
        setInterval(function(){
            c--;
            if(c>=0){
                $('.c').text(c);
            }
            if(c==0){
                $('.c').text(n);
            }
        },1000);
    });

    // Start
    // c();
    //Loop
    // setInterval(function(){
    //     c();
    // },5000);




























// function populateTrack(player_strip) {
//   for (var i=0; i<20; i++) {
//     var td = document.createElement('td');
//     td.classList.add('inactive');
//     player_strip.appendChild(td);
//   }
// }
