$('#inputid').on('keyup', function(event) {
	event.preventDefault();
    var str = $('#inputid').val();
$.ajax({
   url: "https://docs.google.com/spreadsheets/d/14TYS9UBM5PETa2Y3_l68nwJZTjxjJkg9hMnOiizN3Gg/gviz/tq?tqx=out:html&tq=SELECT+B,+C,+D,+E,+F,+G,+H+WHERE+H=" + "+" + "'" + str + "'",
   context: document.body
   }).done(function(data) {
      $('#new-projects').html(data);
    	$('table').prop('id', 'userdata');
      $('#inputname').val( $('#userdata').find('td:nth-child(1)').eq(1).html() );
      $('#inputphone').val( $('#userdata').find('td:nth-child(2)').eq(1).html() );
      $('#inputemail').val( $('#userdata').find('td:nth-child(3)').eq(1).html() );
      $('#inputaddr').val( $('#userdata').find('td:nth-child(4)').eq(1).html() );
      $('#inputpost').val( $('#userdata').find('td:nth-child(5)').eq(1).html() );
      $('#inputcity').val( $('#userdata').find('td:nth-child(6)').eq(1).html() );
      $('#userid').val( $('#userdata').find('td:nth-child(7)').eq(1).html() );
      $('#username').text( $('#userdata').find('td:nth-child(1)').eq(1).html() );
  });
});

$("#inputid").on('paste', function(event) {
  $(event.target).keyup();
});

$("#inputid").on('change', function(event) {
  $(event.target).keyup();
});

$("#inputid").on('input', function(event) {
  $(event.target).keyup();
});

function makeid(length) { 
var result = '';
var characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
	result += characters.charAt(Math.floor(Math.random()*
	charactersLength));
}
document.getElementById('userno').value = result;
}
