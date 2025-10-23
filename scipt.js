// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElemenByid('sapaButon');
// 2. Tambahkan 'event listener' untuk aksi 'clik'
tombolSapa.addEvenlistener('clik', function() {
  // 3. jalankan kode ini ketika tombol di-klik
                           alert('Halo! Terima kasih sudah berkunjung')
});
