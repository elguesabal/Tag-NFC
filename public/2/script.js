const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");
let current = 1;
const max = 49;
const batchSize = 1;
const baseUrl = "https://jailane.vercel.app//2/public/";
let loading = false;
let finished = false;

function loadBatch() {
	if (loading || finished) return;
	loading = true;
	loader.textContent = "Carregando...";
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < batchSize && current <= max; i++, current++) {
		const img = document.createElement("img");
		img.src = baseUrl + current + ".jpg";
		img.alt = "Imagem " + current;
		fragment.appendChild(img);
	}
	gallery.appendChild(fragment);

	if (current > max) {
		finished = true;
		loader.textContent = "";
	} else {
		loader.textContent = "Role para carregar mais...";
	}

	loading = false;
}
loadBatch();
const observer = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			loadBatch();
		}
	}
}, {
	root: null,
	rootMargin: "200px",
	threshold: 0
});
observer.observe(loader);