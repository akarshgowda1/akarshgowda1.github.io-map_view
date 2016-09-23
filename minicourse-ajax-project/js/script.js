
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
	var street= $('#street').val();
	var city = $('#city').val();
	var width=$body.css( "width" );
	var height=$body.css( "height" );
		width= width.slice(0,-2);
		height= height.slice(0,-2);
	var loctation_text= street+","+city;
	var map_sizes=width+"*"+height;
	console.log(map_sizes);
	
	$('#greeting').text('Do you Want to live in '+loctation_text+'?');
	var url='https://maps.googleapis.com/maps/api/streetview?location='+loctation_text+'&size='+width+'x500&key=AIzaSyAkQrp_8JkGQWttTvwaulHLfceztl5WBvw';
	console.log(url);
	//$body.append('<img id="street-view" src="'+url+'" >');
	$body.css('background-image', 'url("' + url + '")');
	
	
	
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
