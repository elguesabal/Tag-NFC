function sim() {
	const style = document.getElementById("sim").style;
	let top = Math.floor(Math.random() * 101);
	let left = Math.floor(Math.random() * 101);

	while (top <= 5 || top >= 90) top = Math.floor(Math.random() * 101);
	while (left <= 25 || left >= 75) left = Math.floor(Math.random() * 101);
	style.top = `${top}vh`;
	style.left = `${left}vw`;
}

function nao() {
	const container = document.getElementById("container");
	
	container.innerText = "Tbm te amo";
	container.style.top = "40vh";

}