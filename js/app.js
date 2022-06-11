// Menu button and Nav behavior

const menu = document.querySelector('.main--header--menu');

menu.addEventListener('click', (event) => {
  const nav = document.querySelector('.main--header--menu--nav');
  const children = Array.from(event.target.children);
	
	children.forEach((bar) => {
		if (bar.classList.contains('active')) {
      bar.classList.remove('active');
      nav.classList.remove('opened');
    } else {
			bar.classList.add('active');
			bar.classList.remove('no-animation');
      nav.classList.remove('no-animation');
      nav.classList.add('opened');
		}			
	});
});

// end