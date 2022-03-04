import Layout from "../../components/layout";

function Registration() {
  return (
    <>
      <Layout>
        <div className="register main w-max m-auto my-28">
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
      </Layout>
    </>
  );
}

export default Registration;
