import React from "react";
import DoctorDetail from "../components/doctors/DoctorDetail";
import DoctorSuggestionList from "../components/doctors/DoctorSuggestionList";
import { useParams } from "react-router-dom";
import { doctorlists } from "./../data/data";

export default function Details() {
  const { doctorId } = useParams();
  const doctor = doctorlists.find((doctor) => doctor.id === parseInt(doctorId));

  const { id, name, year_of_experience, address, image, about, categories } =
    doctor;
  if (!doctor) {
    return <div>Doctor not Found</div>;
  }
  return (
    <div className="p-5 md:px-10">
      <h2 className="font-bold text-[22px]">Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-3">
          <DoctorDetail
            id={id}
            name={name}
            year_of_experience={year_of_experience}
            address={address}
            image={image}
            about={about}
            categories={categories}
          />
        </div>
        <div>
          <DoctorSuggestionList />
        </div>
      </div>
    </div>
  );
}
