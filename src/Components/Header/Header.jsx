import { ImCancelCircle } from "react-icons/im";

function Header() {
  function toggleMenu() {
    document.getElementById("nav-mobile").classList.toggle("active");
    document.getElementById("close-aria").classList.toggle("hidden");
    document.getElementById("body").classList.toggle("overflow-none");
  }

  return (
    <header className="absolute top-0 m-auto flex w-full flex-row items-center justify-between bg-transparent px-6 py-6 md:px-20 md:py-12 lg:px-32">
      <a href="#">
        <img src="./logo.svg" alt="" />
      </a>
      <nav className="hidden gap-2 text-white md:flex md:flex-row">
        <ul className="items-center gap-2 md:flex md:flex-row">
          <li>
            <a href="#" className="p-2">
              About
            </a>
          </li>
          <li>
            <a href="#" className="p-2">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="p-2">
              Projects
            </a>
          </li>
        </ul>
        <button className="rounded-full bg-sky-500 p-2 transition-all hover:bg-sky-300">
          <a className="font-Fraunces text-sm font-fraunces900" href="#">
            CONTACT
          </a>
        </button>
      </nav>

      {/* nav mobile */}

      <nav className="navbar-mobile" id="nav-mobile">
        <button
          className="absolute right-0 top-0 p-4 text-neutralVeryDarkGrayish_blue"
          onClick={toggleMenu}
        >
          <ImCancelCircle />
        </button>
        <ul className="flex flex-col items-center gap-4 text-center">
          <li>
            <a href="#" className="p-1">
              About
            </a>
          </li>
          <li>
            <a href="#" className="p-1">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="p-1">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <button className="md:hidden" onClick={toggleMenu}>
        <img src="./icon-hamburger.svg" alt="" />
      </button>
      <div
        className="fixed inset-0 z-40 hidden min-h-screen bg-black bg-opacity-50 md:hidden"
        onClick={toggleMenu}
        id="close-aria"
      ></div>
    </header>
  );
}

export default Header;
