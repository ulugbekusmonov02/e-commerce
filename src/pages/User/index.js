import { Link } from "react-router-dom";

function User() {
  return (
    <>
      <div className="mt-6">
        <div className="max-w-3xl mx-auto flex justify-between  ">
          <Link to={"/"}>
            <svg
              className=" h-6 text-rose-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z" />
            </svg>
            {/* <button className="py-2 bg-blue-700 px-4 rounded-lg text-white">
            Back
          </button> */}
          </Link>
          {/* <p className="font-semibold text-2xl text-rose-900">
          Star Stadium Login
        </p> */}
        </div>
        <div className="main w-max m-auto mt-10">
          <div className="login">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div className="username flex border rounded text-gray-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 mx-2 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <input
                className="outline-none px-2 h-full py-2 text-lg"
                type="text"
                placeholder="username"
              />
            </div>

            <div className="password flex border rounded text-gray-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 mx-2 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <input
                className="outline-none px-2 h-full py-2 text-lg"
                type="password"
                placeholder="password"
              />
            </div>

            <div className="show_info text-sm mb-4 w-max text-red-400"></div>

            <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
              <div className="wrapper flex w-max mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                  />
                </svg>
                <input
                  className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
                  type="button"
                  value="Login"
                />
              </div>
            </div>
          </div>
          <div className="register">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <div className="display_name flex border rounded text-gray-500 mb-4">
              <input
                className="outline-none px-4 h-full py-2 text-lg"
                type="text"
                placeholder="display name"
              />
            </div>

            <div className="username flex border rounded text-gray-500 mb-4">
              <input
                className="outline-none px-4 h-full py-2 text-lg"
                type="text"
                placeholder="username"
              />
            </div>

            <div className="password flex border rounded text-gray-500 mb-4">
              <input
                className="outline-none px-4 h-full py-2 text-lg"
                type="password"
                placeholder="password"
              />
            </div>

           
            <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
              <div className="wrapper flex w-max mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <input
                  className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
                  type="button"
                  value="Register"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 pt-8 pb-14 px-8">
        <div className="max-w-7xl mx-auto md:grid-cols-2 md:gap-8 gap-6  grid lg:grid-cols-5">
          <ul className="space-y-2">
            <li className="font-extrabold text-white text-base	">
              Get to Know Us
            </li>
            <li>
              <a className="text-white hover:underline " href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                About Star-Stadium
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Investor Relations
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Star-Stadium Devices
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Star-Stadium Science
              </a>
            </li>
          </ul>

          <ul className="space-y-2 ">
            <li className="font-extrabold text-white text-base	">
              Make Money with Us
            </li>
            <li>
              <a className="text-white hover:underline " href="#">
                Sell products on Star-Stadium
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Sell on Star-Stadium Business
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Sell apps on Star-Stadium
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Become an Affiliate
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Advertise Your Products
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Self-Publish with Us
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Host an Amazon Hub
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li className="font-extrabold text-white text-base	">
              Star-Stadium Payment
            </li>
            <li>
              <a className="text-white hover:underline " href="#">
                Star-Stadium Business Card
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Shop with Points
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Reload Your Balance
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Star-Stadium Currency Converter
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li className="font-extrabold text-white text-base	">
              Let Us Help You
            </li>
            <li>
              <a className="text-white hover:underline " href="#">
                Star-Stadium and COVID-19
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Your Account
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Your Orders
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Shipping Rates - Policies
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Returns - Replacements
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Manage Your Content and Devices
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Star-Stadium Assistant
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Help
              </a>
            </li>
          </ul>

          <div className="items-center justify-end hidden md:flex  ">
            <img
              className=" w-40 h-40 bg-white rounded border-none  user-none"
              src="https://freesvg.org/img/ocal2.png"
              alt="QR"
              ss
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
