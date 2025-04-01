"use client"
import React, { useEffect, useState } from 'react'
import { PopupButton } from "react-calendly";

const ScheduleCall = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30">
        Loading...
      </button>
    );
  }

  return (
    <div>
      <PopupButton
        url="https://calendly.com/sulemandevofficial"
        rootElement={document.getElementById("__next") || document.body}
        text="Schedule a Call"
        className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
      />
    </div>
  )
}

export default ScheduleCall
