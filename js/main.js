$(document).ready(function() {
  var userSelect = $('#sections').val();
  var url = 'https://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json';
url += '?' + $.param({
  'api-key': "bdae6f74955c4b3297d70a7d23446bad",
  'callback': "12"
});
$.ajax({
  url: url,
  method: 'GET',
  dataType: 'Json'
}).done(function(result) {
  console.log(result);
});





  $('#sections').on('change', function(){
    //when section selected
    event.preventDefault();
    $('#img').show();
    // show loading giff when loading section

    // success:function(result){
    //    $('#img').hide(); 
    //    // hide loading gif
  
    // }
  });

  
});


    // var $dataSet = result.results.filter(function (item) {
    //      return item.multimedia.length;
    //    }).splice(0, 12);