import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";
import CancelAppointment from "./CancelAppointment";
import moment from "moment";

export default function BookingList({ id, name, address, time, date, image }) {
  return (
    <div>
      <div className="flex gap-4 items-center border p-5 m-3 rounded-lg w-max md:w-full">
        <img
          src={image}
          className="rounded-full h-32 w-32 object-cover"
          alt="doctor-image"
        />
        <div className="flex flex-col md:flex-row w-full justify-between items-start gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-[18px] items-center">
              {name}
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              {" "}
              <MapPin className="text-primary h-5 w-5" /> {address}
            </h2>
            <h2 className="flex gap-2">
              <Calendar className="text-primary h-5 w-5" /> Appointment On :{" "}
              {moment(date).format("DD-MMM-YYYY")}{" "}
            </h2>
            <h2 className="flex gap-2">
              <Clock className="text-primary h-5 w-5" /> At Time : {time}
              {""}
            </h2>
          </div>
          <CancelAppointment id={id}/>
        </div>
      </div>
    </div>
  );
}
