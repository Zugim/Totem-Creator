let dismissBtn = document.querySelectorAll('.dismiss-btn');

dismissBtn.forEach(btn => btn.addEventListener('click', () => btn.closest('section').style.display = 'none'));