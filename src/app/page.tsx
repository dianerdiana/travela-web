import dynamic from "next/dynamic";

// ** Components
const App = dynamic(() => import("./App"));

export default function Home() {
  return (
    <>
      <App />
    </>
  );
}
