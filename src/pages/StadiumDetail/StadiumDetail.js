import Layout from "../../components/layout";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Audio, MutatingDots } from "react-loader-spinner";

function StadiumDetail() {
  let params = useParams();
  const [data, setData] = useState(null);
  const [check, setCheck] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(
      () =>
        axios
          .get(`http://localhost:3000/products/${params.id}`)
          .then(function (response) {
            setData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          }),
      2000
    );
  }, []);

  return (
    <>
      {data ? (
        <Layout>
          <div className=" max-w-5xl">
            {data && (
              <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                  <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-bold tracking-wide text-gray-800  lg:text-5xl">
                      {data.title}
                    </h1>

                    <div className="mt-8 space-y-5 text-lg font-semibold">
                      <p className="flex items-center -mx-2 text-gray-700 ">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM57.71 192.1L67.07 209.4C75.36 223.9 88.99 234.6 105.1 239.2L162.1 255.7C180.2 260.6 192 276.3 192 294.2V334.1C192 345.1 198.2 355.1 208 359.1C217.8 364.9 224 374.9 224 385.9V424.9C224 440.5 238.9 451.7 253.9 447.4C270.1 442.8 282.5 429.1 286.6 413.7L289.4 402.5C293.6 385.6 304.6 371.1 319.7 362.4L327.8 357.8C342.8 349.3 352 333.4 352 316.1V307.9C352 295.1 346.9 282.9 337.9 273.9L334.1 270.1C325.1 261.1 312.8 255.1 300.1 255.1H256.1C245.9 255.1 234.9 253.1 225.2 247.6L190.7 227.8C186.4 225.4 183.1 221.4 181.6 216.7C178.4 207.1 182.7 196.7 191.7 192.1L197.7 189.2C204.3 185.9 211.9 185.3 218.1 187.7L242.2 195.4C250.3 198.1 259.3 195 264.1 187.9C268.8 180.8 268.3 171.5 262.9 165L249.3 148.8C239.3 136.8 239.4 119.3 249.6 107.5L265.3 89.12C274.1 78.85 275.5 64.16 268.8 52.42L266.4 48.26C262.1 48.09 259.5 48 256 48C163.1 48 84.4 108.9 57.71 192.1L57.71 192.1zM437.6 154.5L412 164.8C396.3 171.1 388.2 188.5 393.5 204.6L410.4 255.3C413.9 265.7 422.4 273.6 433 276.3L462.2 283.5C463.4 274.5 464 265.3 464 256C464 219.2 454.4 184.6 437.6 154.5H437.6z" />
                        </svg>

                        <span className="mx-2">{data.club.name}</span>
                      </p>

                      <p className="flex items-center -mx-2 text-gray-700  ">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                        </svg>

                        <span className="mx-2">{data.address}</span>
                      </p>

                      <p className="flex items-center -mx-2 text-gray-700 ">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z" />
                        </svg>

                        <span className="mx-2">{`${data.capacity}-capacity`}</span>
                      </p>
                    </div>
                  </div>

                  <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                    <form className="flex flex-col lg:flex-row">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0"
                      />

                      <button
                        type="button"
                        className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                      >
                        Join Us
                      </button>
                    </form>
                  </div>

                  <div className="flex space-x-44 ">
                    <button
                      onClick={() => {
                        setCheck(true);
                      }}
                      className="flex justify-end  font-semibold transform hover:scale-103 items-center bg-red-500 mt-6 py-2 px-4 rounded-lg text-white"
                    >
                      <svg
                        className="w-5 h-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
                      </svg>
                      Delete
                    </button>

                    <Link
                      to={`/stadium/update/${params.id}`}
                      className="flex justify-end font-semibold  transform hover:scale-103 items-center bg-green-500 mt-6 py-2 px-4 rounded-lg text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512 "
                      >
                        <path d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z" />
                      </svg>
                      Update
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                  <img
                    className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                    src={data.imageURL}
                    alt="glasses photo"
                  />
                </div>
              </div>
            )}
          </div>
          {check && (
            <div className=" h-32  max-w-2xl flex justify-between rounded-xl  text-xl	 text-white font-bold  px-10 items-end bg-slate-900 absolute inset-1/3 ">
              <button
                onClick={() => {
                  setCheck(false);
                }}
                className="my-12"
              >
                No
              </button>

              <button
                className="my-12"
                onClick={() => {
                  axios
                    .delete(`http://localhost:3000/products/${params.id}`)
                    .then(() => {
                      navigate("/");
                    })
                    .catch(() => {
                      alert("Something is wrong try after minute!");
                    });
                }}
              >
                Yes
              </button>
            </div>
          )}
        </Layout>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <MutatingDots
            height="100"
            width="100"
            color="grey"
            ariaLabel="loading"
          />
        </div>
      )}
    </>
  );
}

export default StadiumDetail;
