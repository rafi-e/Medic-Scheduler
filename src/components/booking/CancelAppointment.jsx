import React from "react";
import { useDispatch } from "react-redux";
import { BookingActions } from "../../redux/slice/bookingSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../shadcn/ui/alert-dialog";
import { Button } from "../shadcn/ui/button";

export default function CancelAppointment({ id }) {
  const dispatch = useDispatch();
  const removeBooking = () => dispatch(BookingActions.removeBooking(id));

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="outline" className="text-primary border-primary">
          Cancel Appointment
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            appointment and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={removeBooking} className="bg-red-500 hover:bg-red-600">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
