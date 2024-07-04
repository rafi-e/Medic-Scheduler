import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DoctorList({
  doctorlists,
  heading = "Popular Doctors",
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage, setDoctorsPerPage] = useState(8); // default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDoctorsPerPage(4); // 2 rows x 2 columns on mobile
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setDoctorsPerPage(6); // 3 rows x 2 columns on tablet
      } else {
        setDoctorsPerPage(8); // 4 rows x 2 columns on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // initial call
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctorlists.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl capitalize">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-4 lg:grid-cols-4">
        {currentDoctors.length > 0
          ? currentDoctors.map((doctor, index) => (
              <div
                key={index}
                className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-[#0D7DFF] hover:shadow-sm transition-all ease-in-out "
              >
                <img
                  src={doctor.image}
                  alt="doctor"
                  width={500}
                  height={200}
                  className="h-[200px] w-full object-cover rounded-lg"
                />
                <div className="mt-3 items-baseline flex flex-col gap-1">
                  <div className="flex h-full w-full gap-2">
                    {doctor.categories.map((category, index) => (
                      <h2
                        key={index}
                        className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-[#0D7DFF]"
                      >
                        {category.name}
                      </h2>
                    ))}
                  </div>
                  <h2 className="font-bold">{doctor.name} </h2>
                  <h2 className="text-[#0D7DFF] text-sm">
                    {doctor.year_of_experience} Years of Experince
                  </h2>
                  <h2 className="text-gray-500 text-sm">{doctor.address}</h2>
                  <Link to={`/details/${doctor.id}`} className="w-full">
                    <h2 className="p-2 px-3 border-[1px] border-[#0D7DFF] text-[#0D7DFF] rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-[#0D7DFF] hover:text-white">
                      Book Now
                    </h2>
                  </Link>
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                className="h-[220px] bg-slate-200 
          w-full rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(doctorlists.length / doctorsPerPage))].map(
          (_, index) => (
            <button
              key={index}
              className={`px-2 py-1 rounded-full ${
                index + 1 === currentPage
                  ? "bg-[#0D7DFF] text-white"
                  : "bg-white text-[#0D7DFF]"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
