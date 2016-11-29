// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log("hi");

	$("#in").keyup(function() {
		var input = $(this).val();
    if (input.length > 0) {
      console.log(jQuery.type(input));
		  console.log(input.length);
      var r = searchString(input,data_arr);
      console.log(r);
      var allsugg = "";
      for (var x=0; x<r.length; x++) {
        var addsugg = "<li>" + r[x] + "</li>";
        allsugg = allsugg + addsugg;
      }
      document.getElementById("suggestions").innerHTML = allsugg;
      console.log(allsugg);
    }
    else {
      document.getElementById("suggestions").innerHTML = "";
    }
	});

  $.ajax({
  	url: "http://www.mattbowytz.com/simple_api.json?data=all", 
  	method: "GET"
  }).success(function(data) {
  	interests = data.data.interests;
  	programming = data.data.programming;
  	data_arr = interests.concat(programming);
  	console.log(data_arr);
  }).fail(function(data) {
  	console.log(data);
  })
})();

function searchString(str, arr) {
	var retarr = new Array();
	for (var i=0; i<arr.length; i++) {
		if (str == arr[i].substring(0,str.length)) {
      retarr.push(arr[i]);
    }
	}
	return retarr;
}

