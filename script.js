// All logic in one DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
			// Slide-down notification directly below the clicked skill card, above all content
			document.querySelectorAll('.skill-card').forEach(card => {
				card.addEventListener('click', function() {
					// Remove any existing notification
					let oldNotify = document.querySelector('.skill-notify');
					if (oldNotify) oldNotify.remove();
					// Get card position
					const rect = card.getBoundingClientRect();
					// Create notification bar
					const notifyBar = document.createElement('div');
					notifyBar.className = 'skill-notify';
					notifyBar.textContent = card.getAttribute('data-description') || card.textContent.trim();
					notifyBar.style.position = 'fixed';
					notifyBar.style.width = rect.width + 'px';
					notifyBar.style.left = rect.left + 'px';
					notifyBar.style.top = (rect.bottom) + 'px';
					notifyBar.style.background = '#232323';
					notifyBar.style.color = '#fff';
					notifyBar.style.padding = '1em 2em';
					notifyBar.style.borderRadius = '0 0 16px 16px';
					notifyBar.style.boxShadow = '0 4px 16px #000';
					notifyBar.style.border = '2px solid #333';
					notifyBar.style.fontSize = '1.08em';
					notifyBar.style.fontFamily = "'Space Grotesk',Arial,sans-serif";
					notifyBar.style.zIndex = '99999';
					notifyBar.style.opacity = '0';
					notifyBar.style.pointerEvents = 'none';
					notifyBar.style.transition = 'transform 0.4s cubic-bezier(.77,0,.18,1), opacity 0.4s';
					notifyBar.style.transform = 'translateY(-16px)';
					document.body.appendChild(notifyBar);
					setTimeout(() => {
						notifyBar.style.opacity = '1';
						notifyBar.style.transform = 'translateY(0)';
					}, 10);
					// Remove notification on scroll
					const removeNotify = () => {
						if (notifyBar.parentNode) notifyBar.remove();
						window.removeEventListener('scroll', removeNotify, true);
					};
					window.addEventListener('scroll', removeNotify, true);
					setTimeout(() => {
						notifyBar.style.opacity = '0';
						notifyBar.style.transform = 'translateY(-16px)';
						setTimeout(() => {
							removeNotify();
						}, 400);
					}, 2000);
				});
			});
		// Add alert for UI/UX Innovations project card
		const uiuxCard = Array.from(document.querySelectorAll('.project h3')).find(h3 => h3.textContent.trim() === 'UI/UX Innovations');
		if (uiuxCard) {
			uiuxCard.parentElement.addEventListener('click', function() {
				alert('this fucking worked');
			});
		}

	// Splash logic
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
	revealSections();
});
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
// ...existing code...
