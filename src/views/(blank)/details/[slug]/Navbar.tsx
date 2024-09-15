import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full mt-8">
      <Link href="/home">
        <img src="/assets/icons/back.png" alt="back" />
      </Link>
      <p className="m-auto font-semibold text-center">Details</p>
      <Link href="/">
        <img src="/assets/icons/more-dots.svg" alt="more" />
      </Link>
    </nav>
  );
}

export default Navbar;
