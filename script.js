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

    document.querySelectorAll('.content#media-sosial a').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'red'; // Ganti warna teks menjadi merah saat mouse di atas
        });
        
        link.addEventListener('mouseout', function() {
            this.style.color = 'white'; // Kembalikan warna teks menjadi putih saat mouse tidak di atas
        });
    });
}
