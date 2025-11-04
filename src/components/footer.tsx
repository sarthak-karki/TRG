import { FunctionComponent } from "react";

import ClubLogo from "../assets/trgLogo.jpeg";

const Footer: FunctionComponent = () => {
  return (
    <>
      <footer className="bg-indigo-900 text-white pt-12">
        <div className="md:ml-20 md:mr-20 sm:ml-60 sm:mr-60 ml-8 mr-8">
          <div>
            <div className="h-20 w-20">
              <a href="#" className="cursor-pointer">
                <div className="h-full w-full">
                  <div className="h-full w-full bg-indigo-900">
                    <img src={ClubLogo} className="opacity-100"></img>
                  </div>
                </div>
              </a>
            </div>
            <div className="md:flex mb-14">
              <div className="pb-0 md:basis-4/12 md:border-b-0 border-b-2 border-solid pt-6 box-border">
                <div className="text-white font-sans text-base font-bold leading-normal">
                  The Rising Gurkhas
                </div>
                <div className="box-border text-sm leading-normal mt-0">
                  <p>Sydney</p>
                  <p>New South Wales</p>
                  <p>Australia</p>
                </div>
                <div className="md:mb-0 mb-6 mt-20 box-border">
                  <div className="box-border">
                    <ul className="flex list-none m-0 p-0 text-center h-7 w-7 mr-6">
                      <li>
                        <a
                          href="https://www.facebook.com/RisingGurkhas"
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center text-center"
                        >
                          <span className="hidden">facebook</span>
                          <div className="p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              viewBox="0 0 50 50"
                              className="fill-white hover:fill-stone-500"
                            >
                              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                            </svg>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/RisingGurkhas"
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center text-center"
                        >
                          <span className="hidden">twitter</span>
                          <div className="p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="28"
                              height="28"
                              viewBox="0 0 30 30"
                              className="fill-white hover:fill-stone-500"
                            >
                              <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                            </svg>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/RisingGurkhas"
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center text-center"
                        >
                          <span className="hidden">instagram</span>
                          <div className="p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              className="fill-white hover:fill-stone-500"
                            >
                              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                            </svg>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/RisingGurkhas"
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center text-center"
                        >
                          <span className="hidden">youtube</span>
                          <div className="p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              className="fill-white hover:fill-stone-500"
                            >
                              <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                            </svg>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/RisingGurkhas"
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center text-center"
                        >
                          <span className="hidden">tiktok</span>
                          <div className="p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              className="fill-white hover:fill-stone-500"
                            >
                              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path>
                            </svg>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-r-2 border-solid border-slate-500 pt-3 pl-9 relative w-1/4 border-box">
                <nav className="box-border">
                  <ul className="list-none m-0 p-0">
                    <li className="list-none mb-4">
                      <a
                        href="#"
                        className="text-white font-sans text-base font-semibold leading-normal"
                        rel="noreferrer"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="list-none mb-4">
                      <a
                        href="#"
                        className="text-white font-sans text-base font-semibold leading-normal"
                        rel="noreferrer"
                      >
                        Frequently Asked Questions
                      </a>
                    </li>
                    <li className="list-none mb-4">
                      <a
                        href="#"
                        className="text-white font-sans text-base font-semibold leading-normal"
                        rel="noreferrer"
                      >
                        Junior TRG'ians
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="md:ml-9 md:p-0 p-14 md:basis-2/5 border-box md:flex">
                <div className="mr-5">
                  <div className="min-w-20 w-20 bg-indigo-900">
                    <div className="contents">
                      <img
                        src="https://img.chelseafc.com//image/upload/f_auto,dpr_2.0,q_100,w_88,fl_lossy/Stadion-dev-test/the-fifth-stand.png"
                        className="opacity-100"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="md:pt-4 pt-6">
                  <div className="block">
                    <p>
                      Get unrivalled access to all things TRG with our official
                      club app,
                      <strong>The 5th Stand"</strong>"."
                    </p>
                  </div>
                  <div className="flex mt-10">
                    <a href="#" className="mr-5">
                      <div className="m-w-32 w-32">
                        <div className="contents opacity-100">
                          <img src="https://img.chelseafc.com//image/upload/f_auto,c_fill,dpr_2.0,q_100,w_120,h_40,fl_lossy/site-assets/app-stores/Download_On_The_App_Store.png"></img>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="mr-5">
                      <div className="m-w-32 w-32">
                        <div className="contents opacity-100">
                          <img src="https://img.chelseafc.com//image/upload/f_auto,c_fill,dpr_2.0,q_100,w_120,h_40,fl_lossy/site-assets/app-stores/Get_It_On_Google_Play.png"></img>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 font-sans text-sm md:p-0 p-14 leading-snug">
          <div className="md:flex lg:mx-20 md:mx-14 max-w-7xl">
            <div className="w-full">
              <div className="lg:p-3 pb-6 border-solid border-b">
                <nav>
                  <ul>
                    <li>
                      <a href="#">
                        <span>Careers</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Cookies Policy</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Terms & Conditions</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="py-6 border-solid border-b font-sans">
                © 2022 TRG FC. All rights reserved. No part of this site may be
                reproduced without our written permission.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
