"use client"
import React from 'react'
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";
import { PopupButton } from "react-calendly";

const ScheduleCall = () => {
  return (
    <div>
       {/* <InlineWidget url="https://calendly.com/sulemandevofficial" /> */}
       <PopupButton
        url="https://calendly.com/sulemandevofficial"
        rootElement={document.getElementById("__next") || document.body}
        text="Schedule a Call"
        // textColor="#ffffff"
        // color="#4F46E5"
        className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
      />
 
    </div>
  )
}

export default ScheduleCall
