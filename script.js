// Generar Galería - Limitado a 20 imágenes
const gallery = document.getElementById('gallery');
const totalPhotos = 20; // Cambiado de 49 a 20

for (let i = 1; i <= totalPhotos; i++) {
    const img = document.createElement('img');
    img.src = `assets/img (${i}).jpg`;
    img.alt = `Momento ${i}`;
    img.loading = "lazy"; // Esto ayuda a que la web cargue más rápido
    gallery.appendChild(img);
}

// Control de Música (Se mantiene igual)
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "⏸ Pausar Música";
    } else {
        music.pause();
        musicBtn.innerText = "🎵 Reproducir Música";
    }
}
