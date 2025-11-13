// Always scroll to top on page load and refresh (cross-browser)
if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}
window.addEventListener('beforeunload', function () {
	window.scrollTo(0, 0);
});
window.addEventListener('load', function () {
	setTimeout(function () {
		window.scrollTo(0, 0);
	}, 10);
});


// Animated splash screen with particles and mini-game
window.addEventListener('DOMContentLoaded', () => {
	// Hide sticky name bar during splash
	const stickyBar = document.querySelector('.sticky-name-bar');
	if (stickyBar) stickyBar.classList.add('hide-bar');

	// Splash name game
	const name = 'Matthew Ramsay';
	const splashName = document.getElementById('splash-name');
	splashName.innerHTML = '';
	name.split('').forEach((char, i) => {
		const span = document.createElement('span');
		span.textContent = char === ' ' ? '\u00A0' : char;
		span.addEventListener('click', () => {
			span.classList.add('bounce');
			setTimeout(() => span.classList.remove('bounce'), 400);
		});
		splashName.appendChild(span);
	});

	// Particle burst
	const splashParticles = document.querySelector('.splash-particles');
	for (let i = 0; i < 32; i++) {
		const p = document.createElement('div');
		p.style.position = 'absolute';
		p.style.width = '8px';
		p.style.height = '8px';
		p.style.borderRadius = '50%';
		p.style.background = '#e0e0e0';
		p.style.left = '50%';
		p.style.top = '50%';
		p.style.transform = `translate(-50%, -50%) rotate(${i*11.25}deg) translateY(0)`;
		splashParticles.appendChild(p);
		setTimeout(() => {
			p.style.transition = 'transform 1s cubic-bezier(.77,0,.18,1), opacity 1s';
			p.style.transform = `translate(-50%, -50%) rotate(${i*11.25}deg) translateY(80px)`;
			p.style.opacity = '0';
		}, 400);
	}

	// Show splash for 4.75 seconds, then show sticky bar
	setTimeout(() => {
		document.getElementById('splash').classList.add('hide');
		if (stickyBar) stickyBar.classList.remove('hide-bar');
		// Lock horizontal scroll after splash
		document.body.style.overflowX = 'hidden';
		document.body.style.width = '100vw';
		document.documentElement.style.overflowX = 'hidden';
		document.documentElement.style.width = '100vw';
	}, 4750);
});



// Section entrance animation
function revealSections() {
	document.querySelectorAll('.section-title').forEach(el => {
		const rect = el.getBoundingClientRect();
		if (rect.top < window.innerHeight - 80) {
			el.classList.add('visible');
		}
	});
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);
// ...existing code...
