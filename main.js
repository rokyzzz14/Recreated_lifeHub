document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled'); // Menambahkan kelas 'scrolled' saat scroll lebih dari 50px
        } else {
            navbar.classList.remove('scrolled'); // Menghapus kelas 'scrolled' saat scroll kurang dari 50px
        }
    });
});


