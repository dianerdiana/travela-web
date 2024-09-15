// Next
import Link from "next/link";

// Components
import Rating from "@/components/Rating";
import { Icon } from "@iconify/react";

export default function SearchWrapper() {
  return (
    <section className="space-y-4">
      <nav className="flex items-center justify-between w-full mt-8">
        <Link href="/home">
          <img src="assets/icons/back.png" alt="back" />
        </Link>
        <p className="m-auto font-semibold text-center">Search</p>
        <a href="">
          <img src="assets/icons/more-dots.svg" alt="more" />
        </a>
      </nav>
      <div className="input-search">
        <div className="bg-white input-wrapper input-border">
          <input type="text" placeholder="search" className="w-full input-appearance-none" />
          <div className="input-icon">
            <Icon icon="ri:search-eye-line" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link href="/details/sasa" className="card">
          <div className="bg-white p-4 rounded-[26px] flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-[92px] h-[92px] flex shrink-0 rounded-xl overflow-hidden">
                <img
                  src="assets/thumbnails/nusa-penida.jpg"
                  className="object-cover object-center w-full h-full"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold two-lines">Nusa Penida Kelingking Beach</p>
                <div className="flex items-center gap-1">
                  <div className="flex w-4 h-4 shrink-0">
                    <img src="assets/icons/location-map.svg" alt="icon" />
                  </div>
                  <span className="text-sm text-darkGrey tracking-035">Bali, Indonesia</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm leading-[22px] tracking-[0.35px]">4.8</span>
                <div className="flex items-center gap-1">
                  <Rating rating={4.8} />
                </div>
              </div>
              <p className="text-sm leading-[22px] tracking-035">
                <span className="font-semibold text-[#4D73FF] text-nowrap">Rp 900.000</span>
                <span className="text-darkGrey">/8days</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
