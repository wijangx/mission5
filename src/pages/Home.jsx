import { useState } from "react";
import Navbar from "../components/Navbar";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import {
  continueWatching,
  topRating,
  trendingMovies,
  newReleases,
} from "../data/movies";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="min-h-screen bg-[#181a1c] text-white flex flex-col relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[420px] md:min-h-[587px] md:h-[587px] mt-[67px] md:mt-[94px] flex items-end px-5 pb-10 md:px-20 md:pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/assets/hero-bg.png"
            alt="Duty After School"
            className="w-full h-full object-cover object-top"
          />
          {/* Fading gradient halus */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#181a1c]/40 via-transparent to-[#181a1c] to-95%" />
          
          {/* Lapisan dasar Hero */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#181a1c]" />
        </div>

        <div className="relative z-10 w-full flex justify-between items-end">
          <div className="max-w-[668px]">
            <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-5">
              Duty After School
            </h1>
            <p className="text-xs md:text-lg text-[#ffffff] line-clamp-2 md:line-clamp-none mb-3 md:mb-10 leading-relaxed">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              <button className="bg-[#0f1e93] hover:bg-[#09147a] text-white text-xs md:text-base font-bold px-3 py-2 md:px-6 md:py-2.5 rounded-full transition">
                Mulai
              </button>
              <button className="bg-[#2f3235] hover:bg-[#3f4347] text-white text-xs md:text-base font-bold px-3 py-2 md:px-6 md:py-2.5 rounded-full flex items-center gap-2 transition">
                <img
                  src="/assets/i.png"
                  alt="Info"
                  className="w-3 h-3 md:w-6 md:h-6"
                />
                <span>Selengkapnya</span>
              </button>
              <span className="border border-[#c1c2c4] text-[#ffffff] text-xs md:text-lg px-2 py-1 md:px-3 md:py-2 rounded-full">
                18+
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="shrink-0 w-10 h-10 md:w-10 md:h-10 rounded-full border border-white/40 bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition active:scale-95"
            title={isMuted ? "Aktifkan Suara" : "Matikan Suara"}
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* List Film Sections */}
      <div className="-mt-2 relative z-10">
        <MovieSection
          title="Melanjutkan Tonton Film"
          movies={continueWatching}
          isLandscape={true}
        />
        <MovieSection
          title="Top Rating Film dan Series Hari ini"
          movies={topRating}
        />
        <MovieSection
          title="Film Trending"
          movies={trendingMovies}
        />
        <MovieSection
          title="Rilis Baru"
          movies={newReleases}
        />
      </div>

      <Footer />
    </div>
  );
}