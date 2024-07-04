import React from "react";
import { Link } from "react-router-dom";
import { doctorlists } from "../../data/data";
import { ScrollArea } from "../shadcn/ui/scroll-area";

export default function DoctorSuggestionList() {
  return (
    <>
      <div className=" p-4 border-[1px] mt-5 lg:ml-5 rounded-lg ">
        <h2 className="mb-3 font-bold">Suggestions</h2>
        <ScrollArea className="h-[360px]">
          {doctorlists.map((doctor) => (
            <Link
              key={doctor.id}
              to={`/details/${doctor.id}`}
              className=" mb-4 p-3 shadow-sm w-full cursor-pointer hover:bg-slate-200 rounded-lg flex items-center gap-3"
            >
              <img
                src={doctor.image}
                width={70}
                height={70}
                className="w-[70px] h-[70px] rounded-full object-cover"
                alt="doctor"
              />
              <div className="mt-3 flex-col flex gap-1 items-baseline">
                <h2 className="font-medium text-sm">{doctor.name}</h2>
                <div className="flex w-full h-full gap-2">
                  {doctor.categories.map((category, index) => (
                    <h2
                      key={index}
                      className="text-[10px] bg-blue-200 p-1 rounded-full px-2 text-[#0D7DFF]"
                    >
                      {category.name}
                    </h2>
                  ))}
                </div>
                <h2 className="text-[#0D7DFF] text-xs flex gap-2">
                  {/* <GraduationCap/> */}
                  {doctor.year_of_experience} Years of Experience
                </h2>
              </div>
            </Link>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}
