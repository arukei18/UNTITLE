const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.site-nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });