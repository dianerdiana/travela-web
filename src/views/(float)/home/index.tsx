// ** Next
import dynamic from "next/dynamic";

// ** Components
const Categories = dynamic(() => import("./Categories"));
const TripRecommendations = dynamic(() => import("./TripRecommendations"));
const Discover = dynamic(() => import("./Discover"));
const Explore = dynamic(() => import("./Explore"));

export default function HomeWrapper() {
  return (
    <>
      <nav className="flex items-center justify-between w-full mt-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 border-4 border-white rounded-full overflow-hidden flex shrink-0 shadow-[6px_8px_20px_0_#00000008]">
            <img
              src="assets/photos/pfp.png"
              className="object-cover object-center w-full h-full"
              alt="photo"
            />
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
      <div id="discover">
        <Discover />
      </div>
      <div id="explore" className="flex flex-col gap-3">
        <h2 className="font-semibold">More to Explore</h2>
        <Explore />
      </div>
    </>
  );
}
