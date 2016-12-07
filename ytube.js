
//------------apiRequest-----------------------------------

var Youtubesearch = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyBQQsR8acRiTtlD98H-I_2v6BQVa-EvYCs',
    q: searchTerm,
  }
  console.log($.getJSON(Youtubesearch, query, callback));
}

console.log(getDataFromApi('batman'))





//--------Rendering results-----------------

function displayYoutubeSearchData(data) {
  var resultElement = '';
  if (data.Search) {
    data.Search.forEach(function(item) {
     resultElement += '<p>' + item.Title + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}








//------------Event Listener------------------


function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYoutubeSearchData);
  });
}

$(function(){watchSubmit();});