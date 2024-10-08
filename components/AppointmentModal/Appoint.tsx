"use client";
import {useEffect, useState } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "../ui/dialog";
import { MdHealthAndSafety } from "react-icons/md";
import Appoint1 from "./Appoint1";
import Appoint2 from "./Appoint2";
import Appoint3 from "./Appoint3";
import { BookAppointment } from "@/actions/appointment/appoint";
import { useUser } from "@/app/context/userContext";

export default function Appoint({ details }: any) {
  const {id}= useUser()
  const [dialogOpen, setDialogOpen] = useState(false);
  const [appointStep, setAppointStep] = useState(0);
  const [appointmentData, setAppointmentData] = useState({
    time: "",
    purpose: "",
    name: "",
    date: "",
    age: null,
    gender: "",
    doctor_id:details?.id,
    userId:id
  });
 
  const handleAppoint1Data = (data: any) => {    
    setAppointmentData((prevData) => ({ ...prevData, date: data.date, time: data.time }));
    setAppointStep(1);
  };

  const handleAppoint2Data = (data: any) => {
    setAppointmentData((prevData) => ({
      ...prevData,
      purpose: data.purpose,
      name: data.name,
      age: data.age,
      gender: data.gender,
    }));
    setAppointStep(2);
    Submit()
  };
  useEffect(() => {
    if (!appointmentData.time){
      return
    }
    if (appointStep === 2) {
      Submit();
      setAppointmentData({
        time: "",
        purpose: "",
        name: "",
        date: "",
        age: null,
        gender: "",
        doctor_id:details?.id,
        userId:id
      })
    }
  }, [appointStep]);
 const Submit = async ()=>{
  const result = await BookAppointment(appointmentData)
  const data = await result
  console.log(data);
  
 }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger onClick={() => setDialogOpen(true)} asChild>
        <h2>Consult Online</h2>
      </DialogTrigger>
      <DialogOverlay>
        <DialogContent className="p-0 overflow-hidden bg-white">
          <div className="bg-purple-700 text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <MdHealthAndSafety />
                <span className="ml-2">Appointment</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            {appointStep === 0 && <Appoint1 details={details} onChangeApp={handleAppoint1Data} />}
            {appointStep === 1 && <Appoint2 onChangeApp={handleAppoint2Data} />}
            {appointStep === 2 && <Appoint3 id={id} />}
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
