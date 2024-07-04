import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/ui/dialog";
import { Calendar } from "../shadcn/ui/calendar";
import { CalendarDays, Clock, X } from "lucide-react";
import { Textarea } from "../shadcn/ui/textarea";
import { Button } from "../shadcn/ui/button";
import { ScrollArea } from "../shadcn/ui/scroll-area";
import { useDispatch } from "react-redux";
import { BookingActions } from "../../redux/slice/bookingSlice";
import { toast, ToastContainer } from "react-toastify";

export default function BookAppointment({ id, name, address, image }) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const [note, setNote] = useState();
  const dispatch = useDispatch();
  const addBooking = () => {
    dispatch(
      BookingActions.addBooking({
        id,
        name,
        address,
        time: selectedTimeSlot,
        date,
        image,
      })
    );
    toast.success("Booking success!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };

  const isPastDay = (day) => {
    return day <= new Date();
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="rounded-full">Book Appointment</Button>
        </DialogTrigger>
        <DialogContent>
          <ScrollArea className="h-full">
            <DialogHeader>
              <DialogTitle>Book Appointment</DialogTitle>
              <DialogDescription>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                    {/* Calender  */}
                    <div className="flex flex-col   gap-3 items-baseline">
                      <h2 className="flex gap-2 items-center">
                        <CalendarDays className="text-primary h-5 w-5" />
                        Select Date
                      </h2>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={isPastDay}
                        className="rounded-md border"
                      />
                    </div>
                    {/* Time Slot  */}
                    <div className=" mt-3 md:mt-0">
                      <h2 className="flex gap-2 items-center mb-3">
                        <Clock className="text-primary h-5 w-5" />
                        Select Time Slot
                      </h2>
                      <div
                        className="grid grid-cols-3 gap-2 border 
                        rounded-lg p-5"
                      >
                        {timeSlot?.map((item, index) => (
                          <h2
                            key={index}
                            onClick={() => setSelectedTimeSlot(item.time)}
                            className={`p-2 border cursor-pointer
                            text-center hover:bg-primary hover:text-white
                            rounded-full
                            ${
                              item.time == selectedTimeSlot &&
                              "bg-primary text-white"
                            }`}
                          >
                            {item.time}
                          </h2>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Textarea
                    className="mt-3"
                    placeholder="Note"
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-5">
              <DialogClose asChild>
                <div className="flex mr-5 items-center justify-end gap-5">
                  <Button
                    type="button"
                    className="h-8 text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                    variant="outline"
                  >
                    Close
                  </Button>
                  <Button
                    type="button"
                    disabled={!(date && selectedTimeSlot)}
                    onClick={addBooking}
                    className="h-8"
                  >
                    Submit
                  </Button>
                </div>
              </DialogClose>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </>
  );
}
