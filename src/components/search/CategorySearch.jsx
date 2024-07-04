import { Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../shadcn/ui/input";
import { Button } from "../shadcn/ui/button";
import { categoryList, doctorlists } from "../../data/data";
import DoctorList from "../doctors/DoctorList";
export default function CategorySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctorlists);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredDoctors = doctorlists.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm)
    );
    setFilteredDoctors(filteredDoctors);
  };

  return (
    <>
      <div className="mb-10 items-center px-5 flex flex-col gap-2">
        <h2 className="font-bold text-4xl tracking-wide">
          Search <span className="text-[#0D7DFF]">Doctors</span>
        </h2>
        <h2 className="text-gray-500 text-xl">
          Search Your Doctor and Book Appointment in one click
        </h2>
        <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-8 center">
          {categoryList.length > 0
            ? categoryList.map(
                (item, index) =>
                  index < 8 && (
                    <Link
                      to={`/search/${item.name.toLowerCase()}`}
                      key={index}
                      className="flex flex-col text-center items-center p-5 bg-blue-100 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out"
                    >
                      <img src={item.image} alt="icon" width={35} height={35} />
                      <label className="text-blue-600 text-sm">
                        {item.name}
                      </label>
                    </Link>
                  )
              )
            : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <div
                  className="bg-slate-200 m-2 w-[130px] h-[120px] rounded-lg animate-pulse"
                  key={index}
                ></div>
              ))}
        </div>
        <div className="flex w-full mt-3 max-w-md items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
      <DoctorList doctorlists={filteredDoctors} />
    </>
  );
}
