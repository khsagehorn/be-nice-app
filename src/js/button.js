
$('button').on('click', function(){
  var niceThing = niceArr[Math.floor(Math.random()*niceArr.length)].text;

  $("#result").empty();
  $('#result').html('<p>' + niceThing + '</p>');
});