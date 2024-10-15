/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        latarGelap: '#1a1b26',    // Background utama
        panelGelap: '#2e2f45',    // Panel atau kotak input dan daftar
        biruUtama: '#3a69d3',     // Warna biru utama untuk card atau tombol
        merahAksen: '#ff4b5c',    // Warna merah untuk tombol hapus
        abuCheckbox: '#b5b5b5',   // Warna untuk checkbox atau teks selesai
      },
    },
  },
  plugins: [],
}
