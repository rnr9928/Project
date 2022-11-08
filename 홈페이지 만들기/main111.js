const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');
const icons = document.querySelector('.navbar-icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});

scrollTop('Scbutton', 300);
function scrollTop(el,Ci) {
	let scroll = document.getElementById(el);

	scroll.addEventListener('click', function() {
		let pageY = window.pageYOffset; 
		let step = Ci/pageY > 1 ? 40 : 100;  // 한번에 움직이는 양
		let timeStep = Ci/pageY * step;
		let intervalID = setInterval(scrollUp, timeStep);

		function scrollUp(){
			pageY = window.pageYOffset;
			if(pageY === 0) {
				clearInterval(intervalID);
			} else {
				scrollBy( 0, -step );
			}
		}
	});
}

function scrollMotion(){
	const ele = document.querySelectorAll('.title');
	let eleOffsetArr = [];

	ele.forEach(e => {
		let eleOffset = e.getBoundingClientRect().top + window.pageYOffset - 700;
		eleOffsetArr.push(eleOffset)
		console.log(eleOffset)
	});
	
	eleOffsetArr.forEach((offset, idx) => {
			ele[idx].style.cssText = ( window.scrollY > offset 
			? 'opacity:1; transform: translateY(0);'
			: 'opacity:0; transform: translateY(50px);' )
	});
}