import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/shadcn/ui/tabs";
import BookingList from "../components/booking/BookingList";

export default function Booking() {
  const bookingItems = useSelector((state) => state.booking.bookingList);
  const dispatch = useDispatch();

  return (
    <div className="px-4 sm:px-10 mt-10">
      <h2 className="font-bold text-2xl">My Booking</h2>
      <Tabs defaultValue="upcoming" className="w-full min-h-screen mt-5">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="overflow-x-scroll md:overflow-x-hidden">
          {bookingItems?.length > 0? (
            bookingItems.map((item) => (
              <BookingList
                key={item?.id}
                id={item?.id}
                name={item?.name}
                address={item?.address}
                time={item?.time}
                date={item?.date}
                image={item?.image}
              />
            ))
          ) : (
            <p className="p-3 text-lg font-semibold text-gray-400">You don't have a schedule</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}