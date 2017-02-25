function init(){
	invisibleChildren = document.querySelector('#menuContent').childNodes;

	menuTop = window.innerHeight - document.querySelector('#menu').offsetTop;

	menuTrigger = (document.querySelector('#menu').offsetTop - document.querySelector('#menu').clientHeight);
	document.querySelector("#menuList").querySelectorAll("*").forEach(child => {
	child.classList.add('invisible');
	})
}


function scrollWatch(e){
	//console.log("menu top is " + menuTop);
	//console.log("scrollsY is " + scrollY);
	//console.log("menu offset is " + document.querySelector('#menu').offsetTop);
	//console.log("menu offset minus height is " + (document.querySelector('#menu').offsetTop - document.querySelector('#menu').clientHeight));

	if(window.scrollY > menuTrigger){
	 removeClass();

}}

window.addEventListener('scroll', scrollWatch);


function removeClass(){
	document.querySelector("#menuList").querySelectorAll("*").forEach(child => {
	child.classList.remove('invisible');
	})
	
}

function addClass(){
	document.querySelector("#menuList").querySelectorAll("*").forEach(child => {
	child.classList.add('invisible');
	})
	
}

console.log("we eatin");
