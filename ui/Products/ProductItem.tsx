import React from "react";

function ProductItem({ item }: any) {
  return (
    <div className="overflow-clip">
      <div className="bg-slate-900 -mt-8" key={item}>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6 gap-x-8 ">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {item.title}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-slate-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {item.description}
            </p>
            <div className="flex">
              <a
                href={item.url}
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-xs md:text-base  font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                {item.buttonText}
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="disabled inline-flex items-center justify-center px-5 py-3 text-xs md:text-base font-medium text-center  border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                View Docs
              </a>{" "}
            </div>
          </div>
          <div className="flex lg:col-span-6 mx-auto static items-end md:pr-16">
            <img
              className="flex w-56 lg:w-60 xl:w-96 -mr-8 shadow-lg shadow-black rounded-3xl hover:-translate-y-6 ease-in-out duration-500"
              src={item.imageUrl1}
              alt="mockup"
            />
            <img
              className="flex w-36 sm:w-40  xl:w-56 -ml-12 shadow-lg shadow-black rounded-3xl relative hover:-translate-y-6 duration-500"
              src={item.imageUrl2}
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
