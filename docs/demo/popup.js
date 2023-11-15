function popup(event) {
	event.preventDefault();
	window.open('popup.html', '_blank', 'popup,width=200,height=200,left=100,top=100');
}
document.querySelector('#popup-link').addEventListener('click', popup);
