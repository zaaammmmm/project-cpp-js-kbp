const umur = 22;
const statusPekerjaan = "mahasiswa";
const statusMenikah = false;

const isDewasaDanBekerja = umur >= 18 && statusPekerjaan === "bekerja";
const isPelajarAtauMenganggur = statusPekerjaan === "pelajar" || statusPekerjaan === "menganggur" || statusPekerjaan === "mahasiswa";
const belumMenikah = !statusMenikah;

console.log("Dewasa dan Bekerja:", isDewasaDanBekerja);
console.log("Pelajar atau Menganggur:", isPelajarAtauMenganggur);