import { useNavigate } from "react-router-dom";

const DaycareInactivePage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);
  const handleGoHome = () => navigate("/");

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
      <div className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            Access Denied
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Daycare Inactive
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            The daycare associated with your account is currently inactive.
            Please contact the daycare administrator for more information or
            support.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              onClick={handleGoBack}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </button>

            {/* 
            <button
              onClick={handleGoHome}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Go to Home
            </button>
            */}
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img
            className="w-full max-w-lg lg:mx-auto h-auto"
            src="/assets/espacio.png"
            alt="Daycare inactive"
          />
        </div>
      </div>
    </section>
  );
};

export default DaycareInactivePage;
