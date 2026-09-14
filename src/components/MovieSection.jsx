import { useRef } from "react";
import MovieCard from "./MovieCard";

export default function MovieSection({
  title,
  movies = [],
  isLandscape = false,
}) {
  const scrollRef = useRef(null);

  const handleScroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="px-5 md:px-20 py-4 md:py-6 w-full relative z-10 transition-[z-index] has-[.group-active-hover]:z-50 hover:z-50 focus-within:z-50">
      <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white">{title}</h2>

      <div className="relative w-full">
        {/* Tombol Panah Kiri */}
        <button
          type="button"
          onClick={() => handleScroll(-400)}
          className="hidden md:flex absolute -left-[22px] top-1/2 -translate-y-1/2 w-11 h-11 bg-[#2f3334] hover:bg-[#2f3638] border border-[#e7e3fc]/25 rounded-full items-center justify-center z-40 transition-transform hover:scale-105 cursor-pointer shadow-lg"
        >
          <img src="/assets/arrow-left.png" alt="Prev" className="w-6 h-6" />
        </button>

        {/* 
          Container Slider:
          - py-36 -my-36 (144px): memberi ruang bebas vertikal pas untuk pop-up 445px tanpa terpotong
          - pointer-events-none: memastikan ruang padding kosong transparan TIDAK menutupi section tetangga
        */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-7 overflow-x-auto overflow-y-hidden scrollbar-none py-36 -my-36 px-6 -mx-6 overscroll-x-contain pointer-events-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.map((movie, index) => (
            <div key={`${movie.id}-${index}`} className="pointer-events-auto shrink-0">
              <MovieCard
                movie={movie}
                isLandscape={isLandscape}
                isFirst={index === 0}
                isLast={index === movies.length - 1}
              />
            </div>
          ))}
        </div>

        {/* Tombol Panah Kanan */}
        <button
          type="button"
          onClick={() => handleScroll(400)}
          className="hidden md:flex absolute -right-[22px] top-1/2 -translate-y-1/2 w-11 h-11 bg-[#2f3334] hover:bg-[#2f3638] border border-[#e7e3fc]/25 rounded-full items-center justify-center z-40 transition-transform hover:scale-105 cursor-pointer shadow-lg"
        >
          <img src="/assets/arrow-right.png" alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}