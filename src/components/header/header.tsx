import { FunctionComponent } from "react";

import KandelConsultancyLogo from "../../assets/Sponsor1.jpeg";
import ClubLogo from "../../assets/trgLogo.jpeg";

const Header: FunctionComponent = () => {
  return (
    <div>
      <header className="pt-1 pl-5 bg-white relative z-aut0">
        <div className="md:flex justify-between items-center border-solid border-b h-12 w-full z-50">
          <ul className="flex list-none m-0 p-0 justify-center">
            <li className="mr-8">
              <a
                href="#"
                className="text-indigo-900 text-sm h-full font-semibold"
              >
                THE RISING GURKHAS GHActions
              </a>
            </li>
            <li className="mr-8">
              <a
                href="https://www.chelseafc.com/en/no-to-hate"
                className="text-indigo-900 text-sm h-full font-semibold"
              >
                NO TO HATE
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-center">
            <ul className="flex list-none m-0 p-0 justify-center border-solid border-r mr-8">
              <li className="mr-8">
                <a
                  href="#"
                  className="text-indigo-900 text-sm h-full font-semibold"
                >
                  SIGN IN
                </a>
              </li>
              <li className="mr-8">
                <a
                  href="#"
                  className="text-indigo-900 text-sm h-full font-semibold"
                >
                  REGISTER
                </a>
              </li>
            </ul>
            <ul className="flex list-none m-0 p-0 justify-center">
              <li className="m-0">
                <a
                  href="https://kandelconsultancy.com.au/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center justify-center h-8 w-24 bg-transparent">
                    <div className="contents">
                      <img src="https://img.chelseafc.com//image/upload/f_auto,c_pad,h_64,w_192/Partner Logos 2022/Low Resolution (Small File Size)/Nike_Swoosh_Black.png"></img>
                    </div>
                  </div>
                </a>
              </li>
              <li className="m-0">
                <a
                  href="https://kandelconsultancy.com.au/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center justify-center h-8 w-24 bg-transparent">
                    <div className="contents">
                      <img src={KandelConsultancyLogo}></img>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="md:h-28 md:mt-0 flex relative z-50 h-20">
          <div className="md-h-28 md:w-28 h-16 w-16 relative items-center z-50">
            <a href="#">
              <div className="bg-transparent">
                <div className="contents">
                  <picture>
                    <img src={ClubLogo}></img>
                  </picture>
                </div>
              </div>
            </a>
          </div>
          <ul className="md:flex hidden ml-auto mr-9 mt-0 p-0">
            <li className="h-full list-none mt-0">
              <a
                href="#"
                className="md:text-lg md:whitespace-nowrap md:leading-loose items-center flex h-full justify-center text-indigo-900 px-5 font-semibold"
              >
                LATEST
              </a>
            </li>
            <li className="h-full list-none mt-0">
              <a
                href="#"
                className="md:text-lg md:whitespace-nowrap md:leading-loose items-center flex h-full justify-center text-indigo-900 px-5 font-semibold"
              >
                WATCH
              </a>
            </li>
            <li className="h-full list-none mt-0">
              <a
                href="#"
                className="md:text-lg md:whitespace-nowrap md:leading-loose items-center flex h-full justify-center text-indigo-900 px-5 font-semibold"
              >
                MEN'S TEAM
              </a>
            </li>
            <li className="h-full list-none mt-0">
              <a
                href="#"
                className="md:text-lg md:whitespace-nowrap md:leading-loose items-center flex h-full justify-center text-indigo-900 px-5 font-semibold"
              >
                SHOP
              </a>
            </li>
            <li className="h-full list-none mt-0">
              <a
                href="#"
                className="md:text-lg md:whitespace-nowrap md:leading-loose items-center flex h-full justify-center text-indigo-900 px-5 font-semibold"
              >
                TICKETS & HOSPITALITY
              </a>
            </li>
            <li className="h-full list-none mt-0">
              <a
                href="#"
                className="md:text-lg md:whitespace-nowrap md:leading-loose items-center flex h-full justify-center text-indigo-900 px-5 font-semibold"
              >
                SHOP
              </a>
            </li>
          </ul>
          <div className="md:justify-self-end md:ml-0 self-center ml-auto relative z-auto">
            <button className="md:bg-indigo-900 md:h-28 md:w-28 bg-transparent border-none cursor-pointer block p-2.5 relative text-center w-12 h-12">
              <div className="md:h-4 md:w-5 h-3.5 w-4 m-auto relative">
                <span className="top-0 md:bg-white h-0.5 left-0 absolute origin-center transition-all ease-linear duration-300 w-full"></span>
                <span className="top-1/2 -translate-y-2/4	 md:bg-white h-0.5 left-0 absolute origin-center transition-all ease-linear duration-300 w-full"></span>
                <span className="bottom-0 md:bg-white h-0.5 left-0 absolute origin-center transition-all ease-linear duration-300 w-full"></span>
              </div>
              <div className="md:block text-white font-sans hidden text-sm font-bold tracking-widest leading-relaxed mt-2 text-center">
                MORE
              </div>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
