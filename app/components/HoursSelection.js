"use client";
import { useState } from "react";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { FaArrowRightLong, FaClock } from "react-icons/fa6";

const hours = ["10:00 AM", "12:00 AM", "14:00 PM", "16:00 PM"];

function HoursSelection() {
  const [hour, setHour] = useState("10:00 AM");

  return (
    <Menu as="div" className="flex h-full w-full xl:flex-row">
      <div className="relative flex-1">
        <MenuButton className="dropdown-btn flex h-full w-full flex-col items-center justify-center xl:items-start xl:pl-8">
          <div className="flex flex-col items-center gap-y-2 xl:flex xl:flex-row xl:gap-x-2 xl:gap-y-0">
            <FaClock className="text-accent" />
            <div className="text-[15px] font-bold uppercase">Select hours</div>
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <div className="text-[13px] font-medium text-secondary xl:ml-6">
              {hour}
            </div>
            <FaArrowRightLong className="text-[12px] text-accent" />
            <div className="text-[13px] font-medium text-secondary">{hour}</div>
          </div>
        </MenuButton>
        <MenuItems className="dropdown-menu absolute -top-72 left-1/2 z-10 w-full max-w-[332px] -translate-x-1/2 transform rounded-[10px] bg-white py-6 text-sm shadow-lg xl:left-0 xl:top-[90px] xl:-translate-x-0">
          {hours.map((hour, index) => {
            return (
              <div
                onClick={() => setHour(hour)}
                className="cursor-pointer py-4 text-center hover:bg-gray-50"
                key={index}
              >
                {hour}
              </div>
            );
          })}
        </MenuItems>
      </div>
    </Menu>
  );
}

export default HoursSelection;
