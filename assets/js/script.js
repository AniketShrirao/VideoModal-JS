/* Author: Aniket*/

// Function for video modal
var modal = document.querySelector('.video-lightbox');
var play = document.querySelectorAll('.videos figure');
var playArray = Array.from(play);
for(var i=0; i<playArray.length; i++){
	playArray[i].addEventListener('click',openModal);
}
modal.addEventListener('click',closeModal);
document.querySelector('body').addEventListener('keyup',closeOnEsc);

// Function for open modal
function openModal(e){
	e.preventDefault();
	var currentVideo = this.nextElementSibling.src;
  modal.children[0].src = currentVideo ;
  modal.classList.remove('hide');
  modal.classList.add('show');
	document.querySelector('html').classList.add('no-scroll');
};

// Function to close modal
function closeModal(e){
	e.preventDefault();
	var playedVideo = document.querySelector('.video-lightbox .currentVideo');
	if(e.target != playedVideo){
    modal.classList.remove('show');
    modal.classList.add('hide');
		document.querySelector('html').classList.remove('no-scroll');
	}
};
// Function to close modal on esc button
function closeOnEsc(e){
	e.preventDefault();
	if(e.which == 27){
    modal.classList.remove('show');
    modal.classList.add('hide');
		document.querySelector('html').classList.remove('no-scroll');
	}
};

