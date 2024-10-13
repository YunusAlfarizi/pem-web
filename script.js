function showContent(contentId) {
    // Sembunyikan semua div dengan kelas 'content'
    let contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Tampilkan div yang sesuai dengan tab yang diklik
    document.getElementById(contentId).style.display = 'block';

    // Ubah tab yang aktif
    let tabs = document.querySelectorAll('.tabs ul li');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Tambahkan kelas 'active' pada tab yang diklik
    event.target.classList.add('active');
}
