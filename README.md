Note: Zumar



### Base Aplikasi



Aplikasi dibuat berbasis website dengan html, css, dan javascript.

Dan dapat dilihat pada file calculus\_simulator.html yang isinya html, css, dan javascript dalam satu file.

Untuk source\_code.txt sama saja isinya dengan calculus\_simulator.html ini.



### Mengubah Aplikasi Berbasis Web Menjadi File .exe



Untuk mengubahnya menjadi file berekstensi .exe maka diperlukan build aplikasi terlebih dahulu.

Developer menggunakan Node js, dan Electron js.

Jadi kami dapat membuat aplikasi Calc\_Sims secara terpisah.



##### Prasyarat Sistem (Requirements)



Sistem Operasi: Windows 10/11 (x64)

Node.js: Versi v22.x LTS (Sangat disarankan menggunakan LTS untuk menghindari unhandled exception pada library lawas).

Koneksi internet aktif (untuk mengunduh modul Electron dan merender grafik via CDN).



##### Struktur Direktori Utama



calculus\_simulator.html (Hasil Aplikasi Web Tadi): Antarmuka utama aplikasi dan logika matematika.

main.js : Skrip utama Electron untuk membuat BrowserWindow dan memuat file HTML.

package.json : Berisi konfigurasi compiler dan metadata aplikasi.



##### Cara Build Menjadi Aplikasi Desktop (.exe)



Ikuti Langkah-langkah berikut untuk mengemas aplikasi menggunakan electron-builder:



* Persiapkan Direktori

&#x09;Buka Command Prompt (CMD) bawaan Windows dan arahkan ke folder proyek ini:

&#x09;cd /d "lokasi/folder/Aplikasi Kalkulus"



* Instalasi Modul (Dependencies)

&#x09;Unduh mesin Chromium dan perangkat perakit Electron.

&#x09;npm install electron electron-builder --save-dev



* Eksekusi Build Portable

&#x09;Setelah seluruh modul terinstal (ditandai dengan munculnya folder node\_modules)

&#x09;jalankan perintah perakitan:

&#x09;npm run build



* Ambil Hasil Aplikasi

&#x09;Tunggu hingga proses selesai. File .exe tunggal yang siap digunakan tanpa instalasi (portable) akan secara otomatis dibuat di dalam folder dist/. File tersebut siap didistribusikan.

