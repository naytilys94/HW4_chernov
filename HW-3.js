var bm = document.querySelector('.burger-menu'),
	mn = document.querySelector('.main-nav'),
	bmc = document.querySelector('.burger-menu-close');
bm.onclick = function () {
		bm.classList.add('burger-menu-click');
		mn.classList.add('main-burger-open');
		bmc.classList.add('burger-menu-close-open');
	}
bmc.onclick = function () {
		bm.classList.remove('burger-menu-click');
		mn.classList.remove('main-burger-open');
		bmc.classList.remove('burger-menu-close-open');
	}
	