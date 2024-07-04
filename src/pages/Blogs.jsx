import React from "react";

export default function Blogs() {
  return (
    <>
      <div className="flex justify-center text-2xl md:text-3xl text-center pt-12 px-4">
        <h2 className="text-2xl font-bold">Our Blog</h2>
      </div>
      <main className="mt-10">
        <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 px-5 md:px-10 gap-0 md:gap-10">
            <div className="col-span-3 mb-4 lg:mb-0 p-4 lg:p-0 w-full relative rounded block">
              <img
                src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded-md object-cover w-full h-auto lg:h-80 "
              />
              <span className="text-primary text-sm hidden md:block mt-4">
                {" "}
                Health{" "}
              </span>
              <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                New Medical Breakthroughs in Cancer Treatment
              </h1>
              <p className="text-gray-600 mb-4">
                Recent studies have shown promising results in the fight against
                cancer. Researchers have made significant progress in developing
                new treatments that target specific cancer cells.
              </p>
              <a className="inline-block px-6 py-3 mt-2 rounded-md bg-primary/70 hover:bg-primary/90 text-gray-100 cursor-pointer">
                Read more
              </a>
            </div>
            <div className="col-span-2 w-full px-0 lg:px-5">
              <div className="w-full flex flex-col md:flex-row py-2 px-2 md:px-5 mb-10 border rounded-lg shadow-md ">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="block rounded-md h-auto md:h-32 m-4 md:m-0"
                />
                <div className="bg-white rounded px-4">
                  <span className="text-primary/70 text-sm hidden md:block">
                    {" "}
                    Medical Research{" "}
                  </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    New Insights into the Human Genome
                  </div>
                  <p className="block lg:hidden p-2 pl-0 pt-1 text-sm text-gray-600 line-clamp-2">
                    Scientists have made significant progress in understanding
                    the human genome, leading to new possibilities for
                    personalized medicine.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row py-2 px-2 md:px-5 mb-10 border rounded-lg shadow-md ">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-white rounded px-4">
                  <span className="text-primary/70 text-sm hidden md:block">
                    {" "}
                    Telemedicine{" "}
                  </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    The Future of Remote Healthcare
                  </div>
                  <p className="block lg:hidden p-2 pl-0 pt-1 text-sm text-gray-600 line-clamp-2">
                    Telemedicine has become increasingly popular during the
                    COVID-19 pandemic, allowing patients to receive medical care
                    from the safety of their own homes.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row py-2 px-2 md:px-5 mb-10 border rounded-lg shadow-md ">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-white rounded px-4">
                  <span className="text-primary/70 text-sm hidden md:block">
                    {" "}
                    Mental Health{" "}
                  </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Addressing the Mental Health Crisis
                  </div>
                  <p className="block lg:hidden p-2 pl-0 pt-1 text-sm text-gray-600 line-clamp-2">
                    The COVID-19 pandemic has had a significant impact on mental
                    health, with many people experiencing anxiety and
                    depression. It is important to prioritize mental health and
                    seek help when needed.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row py-2 px-2 md:px-5 mb-10 border rounded-lg shadow-md ">
                <img
                  src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-white rounded px-4">
                  <span className="text-primary/70 text-sm hidden md:block">
                    {" "}
                    Medical Education{" "}
                  </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    The Future of Medical Education
                  </div>
                  <p className="block lg:hidden p-2 pl-0 pt-1 text-sm text-gray-600 line-clamp-2">
                    Medical education is evolving to meet the needs of the
                    modern world. New technologies and teaching methods are
                    being developed to train the next generation of healthcare
                    professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full p-5 items-center justify-between gap-2">
            <h2 className="font-bold text-3xl">Latest news</h2>
            <a className="bg-gray-200 hover:bg-primary/20 text-gray-800 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div className=" space-x-0 flex flex-col lg:flex-row lg:space-x-6 px-5 mb-7 gap-5">
            <div className="w-full lg:w-1/3 p-5 border rounded-xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="health"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  Breakthrough in Cancer Research
                </h2>
                <p className="text-gray-700 line-clamp-3 mt-2">
                  Scientists have made a groundbreaking discovery in the fight
                  against cancer. A new treatment has shown promising results in
                  clinical trials, offering hope to patients and their families.
                </p>
                <div className="inline-block border px-5 py-2 rounded-lg bg-white hover:bg-primary/50 text-primary hover:text-white mt-5 shadow-sm cursor-pointer">
                  Read more
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-5 border rounded-xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="health"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  The Importance of Mental Health
                </h2>
                <p className="text-gray-700 line-clamp-3 mt-2">
                  Mental health is just as important as physical health. It's
                  essential to prioritize self-care and seek help when needed.
                  Our team of experts is here to support you.
                </p>
                <div className="inline-block border px-5 py-2 rounded-lg bg-white hover:bg-primary/50 text-primary hover:text-white mt-5 shadow-sm cursor-pointer">
                  {" "}
                  Read more{" "}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-5 border rounded-xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="rounded"
                alt="health"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  Advances in Medical Technology
                </h2>
                <p className="text-gray-700 line-clamp-3 mt-2">
                  New medical technologies are revolutionizing the healthcare
                  industry. From robotic surgery to AI-powered diagnosis, we're
                  committed to staying at the forefront of innovation.
                </p>
                <div className="inline-block border px-5 py-2 rounded-lg bg-white hover:bg-primary/50 text-primary hover:text-white mt-5 shadow-sm cursor-pointer">
                  {" "}
                  Read more{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
