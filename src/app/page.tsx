import { lazy } from "react";

// ** Layout
import BlankLayout from "@/layouts/BlankLayout";

// ** Components
const Categories = lazy(() => import("./Categories"));
const TripRecommendations = lazy(() => import("./TripRecommendations"));

export default function Home() {
  return (
    <BlankLayout>
      <nav className="mt-8 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 border-4 border-white rounded-full overflow-hidden flex shrink-0 shadow-[6px_8px_20px_0_#00000008]">
            <img src="assets/photos/pfp.png" className="w-full h-full object-cover object-center" alt="photo" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs tracking-035">Welcome!</p>
            <p className="font-semibold">Victoria Watson</p>
          </div>
        </div>
        <a href="">
          <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex shrink-0 items-center justify-center shadow-[6px_8px_20px_0_#00000008]">
            <img src="assets/icons/bell.svg" alt="icon" />
          </div>
        </a>
      </nav>

      <h1 className="font-semibold text-2xl leading-[36px] text-center">
        Explore New
        <br />
        Experience with Us
      </h1>
      <div id="categories" className="space-y-3">
        <h2 className="font-semibold">Categories</h2>
        <Categories />
      </div>
      <div id="trip-recommendations" className="space-y-3">
        <h2 className="font-semibold">Trip Recommendations</h2>
        <TripRecommendations />
      </div>
    </BlankLayout>
  );
}
