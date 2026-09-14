# Mission 5 - Chill Movie Streaming Web App

Proyek implementasi frontend website streaming film "Chill" berbasis React, Vite, dan Tailwind CSS dengan fokus pada arsitektur komponen modular (*reusable components*), responsivitas antarmuka, dan *client-side routing*.

## 🚀 Fitur Utama & Struktur Halaman
* **Home Page (`/`)**: Menampilkan daftar katalog film berbasis data array modular, hero banner, navigasi navbar, serta footer responsif.
* **Register Page (`/register`)**: Form pendaftaran akun interaktif dengan validasi input terkontrol (*controlled components*), fitur toggle show/hide kata sandi, dan opsi SSO Google.
* **Login Page (`/login`)**: Form autentikasi masuk dengan integrasi navigasi mock ke homepage.

## 🧩 Arsitektur Komponen (Lego Philosophy)
* **`Input.jsx`**: Komponen input universal yang reusable untuk berbagai tipe field (teks, email, password, tel) dengan dukungan label dan toggle visibilitas kata sandi via props.
* **`Button.jsx`**: Komponen tombol serbaguna dengan varian styling (primary action & outline SSO) berbasis utility Tailwind CSS.

## 🛠️ Tech Stack
* **Framework**: React.js (Vite)
* **Styling**: Tailwind CSS (Mobile-first responsive design)
* **Routing**: `react-router-dom`
* **Version Control**: Git & GitHub

## 📝 Catatan Teknis (Technical Note)
Proyek ini berada pada tahap **frontend statis**. Alur autentikasi pada form Register dan Login difokuskan pada manipulasi state, penanganan interaksi form, dan navigasi antarmuka (*mock authentication routing*), belum terintegrasi dengan backend database atau REST API autentikasi nyata.