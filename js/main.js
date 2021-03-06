$(document).ready(function() {

  var userSelect = '';
  var $news = $('.articles');

  var $loadingMessage = $('#preload');
  $loadingMessage.hide(); // hide the loader-gif



  $('#sections').on('change', function(){


    userSelect = this.value;
    // console.log(userSelect);
    //when section selected
    event.preventDefault();
    $('#preload').show();
    // show loading giff when loading section
    $news.empty();
    // so the articles won't keep on adding. It will clear the page before adding new articles.
    // $('header').switchClass("large-header", "small-header", 1000, "EaseBounceOut" );
    $('header').addClass('small-header').removeClass('large-header');

        var url = 'https://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json';
        // so when user select 'home'(for ex) it add home to the url
        url += '?' + $.param({
        'api-key': "bdae6f74955c4b3297d70a7d23446bad",
        'callback': "12"
        
        });

        $.ajax({
        url: url,
        method: 'GET',
        dataType: 'Json'
        }).done(function(result) {
        $('#preload').hide();
        // hide loading gif

        var $dataSet = result.results.filter(function (item) {
          return item.multimedia.length; // select only article with images.
        }).splice(0, 12); // only to get 12 articles with images in it.
        // console.log($dataSet);

        $.each($dataSet, function(item, value){

        //create the variables that we need to create our list (url, abstract, image)
        var newsString = '';
        var $newslink = value.url;
        var $abstract = value.abstract;
        var $newsimage = value.multimedia[4].url;
       
        // div class="news"
        newsString += '<li>';
        newsString +=       '<a href=';
        newsString +=             $newslink; 
        newsString +=         ' target="_blank">';
        newsString +=             '<div class="wrapper-img">';
        newsString +=               '<div class="wrapper-text">';
        newsString +=                 '<p>';
        newsString +=                   $abstract ;
        newsString +=                 '</p>';
        newsString +=               '</div>';
        newsString +=               '<img src="';
        newsString +=               $newsimage ;
        newsString +=               '" alt="image"/>';
        newsString +=             '</div>';
        newsString +=       '</a>' ;
        newsString +=  '</li>';

        console.log(newsString);

         // $('.news').append('<li class="results_wrap"><h3 class="h1result">' + value.abstract + '</h3><img src=' + value.multimedia[4].url + ' /></li>');
        $news.append(newsString);

        });

       

        }).fail(function(err) {
          throw err;
        });
    

  });



  
});


  