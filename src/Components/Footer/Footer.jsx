import { ImFacebook2 } from "react-icons/im";
import { ImPinterest } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-12 bg-emerald-300 py-12 text-center">
      <div className="flex flex-col gap-4">
        <a href="#" className="flex items-center justify-center">
          <img src="/logo-footer.svg" alt="" />
        </a>
        <ul className="flex flex-row items-center justify-center gap-2">
          <li>
            <a className="p-1 hover:text-white transition-all text-emerald-900" href="#">About</a>
          </li>
          <li>
            <a className="p-1 hover:text-white transition-all text-emerald-900" href="#">Services</a>
          </li>
          <li>
            <a className="p-1 hover:text-white transition-all text-emerald-900" href="#">Projects</a>
          </li>
        </ul>
      </div>
      <div className="m-auto flex flex-row items-center justify-center gap-2">
        <a className="text-emerald-900 hover:text-white transition-all p-1" href="#">
          <ImFacebook2 />
        </a>
        <a className="text-emerald-900 hover:text-white transition-all p-1" href="#">
          <ImInstagram />
        </a>
        <a className="text-emerald-900 hover:text-white transition-all p-1" href="#">
          <ImTwitter />
        </a>
        <a className="text-emerald-900 hover:text-white transition-all p-1" href="#">
          <ImPinterest />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
