const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function ()  {
    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
    } else {
        btnTema.textContent = '☀ Mode Terang';
    }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function () {
    event.preventDefault(); // Mencegah link pindah halaman / buka email
    elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function () {
    elemenModal.classList.remove('show'); // Sembunyikan modal
});

elemenModal.addEventListener('click', function (event) {
    if (event.target === modal){
        modal.classList.remove('show');
    }
});
const btnMotivasi = document.querySelector('#btnMotivasi');
const motivasi = document.querySelector('#motivasi');

const kataSemangat = [
    'Tetap semangat dan jangan menyerah!',
    'Kegagalan adalah bagian dari proses belajar.',
    'Nikmati prosesnya.',
    'Hari ini harus lebih baik.',
    'Kamu lebih hebat dari yang kamu kira.',
    'Mimpi, usaha, berhasil.'
];

let index = 0;

btnMotivasi.addEventListener('click', function () {
    motivasi.textContent = kataSemangat[index];

    index++;

    if (index === kataSemangat.length) {
        index = 0;
    }
});