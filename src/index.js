console.log('%c Hello', 'color: firebrick')

//onload functions
document.addEventListener('DOMContentLoaded', function() {
  fetchPupperPics();
});

//use fetch to get random pics of dogs, using response
//array as inputs for next function
function fetchPupperPics() {
	fetch('https://dog.ceo/api/breeds/image/random/4')
	.then(resp => resp.json())
//	.then(json => console.log(json))
	.then(results => {results.message.forEach(pupperPic => appendPic(pupperPic))
	});
}

//add individual images from input array to div container
function appendPic(picURL) {
	let picDiv = document.getElementById('dog-image-container');
	let newImgTag = document.createElement('img');
	newImgTag.src = picURL;
	picDiv.appendChild(newImgTag);
}

