$.getJSON('https://api.tumblr.com/v2/blog/sustainabilitist.tumblr.com/posts?api_key=OmMwFOoJB741CZxXe57kU8moYu0iMzKMtlDKZdE3djCKqJVWgY&callback=?', function(data) {

  var template = $('#bookTemplate').html();
  var info = Mustache.to_html(template, data.response);
  $('#books').html(info);

  $.getJSON('https://api.tumblr.com/v2/blog/sustainabilitist.tumblr.com/posts?api_key=OmMwFOoJB741CZxXe57kU8moYu0iMzKMtlDKZdE3djCKqJVWgY&offset=20&callback=?', function(data) {

    var template = $('#bookTemplate').html();
    var info = Mustache.to_html(template, data.response);
    $('#books').append(info);
    
    $.getJSON('https://api.tumblr.com/v2/blog/sustainabilitist.tumblr.com/posts?api_key=OmMwFOoJB741CZxXe57kU8moYu0iMzKMtlDKZdE3djCKqJVWgY&offset=40&callback=?', function(data) {

      var template = $('#bookTemplate').html();
      var info = Mustache.to_html(template, data.response);
      $('#books').append(info);
      
      $.getJSON('https://api.tumblr.com/v2/blog/sustainabilitist.tumblr.com/posts?api_key=OmMwFOoJB741CZxXe57kU8moYu0iMzKMtlDKZdE3djCKqJVWgY&offset=60&callback=?', function(data) {

        var template = $('#bookTemplate').html();
        var info = Mustache.to_html(template, data.response);
        $('#books').append(info);

        $('.book h1').addClass('bookTitle');
        $('.book h2').addClass('bookAuthor');
        
        var options = {
          valueNames: [ 'tags', 'bookTitle', 'bookAuthor', 'caption' ]
        };

        var listy = new List('library-search', options);

      });
    });
  });
});