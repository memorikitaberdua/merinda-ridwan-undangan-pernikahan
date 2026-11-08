
// Mengambil parameter nama tamu dari URL
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get('to');

// Mengambil elemen nama tamu
const guestElement = document.getElementById('guest-name');

// Menampilkan nama tamu
if (guestElement) {
    guestElement.textContent = guestName
        ? guestName.replace(/\+/g, ' ')
        : 'Nama Tamu';
}
