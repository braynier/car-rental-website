"use client";
import { useState } from "react";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  "Main Street 123, United States",
  "Bussiness Street 5, Canada",
  "Park Street 3, Ireland",
];
function LocationSelection() {
  const [location, setLocation] = useState("Select location");

  return (
    <Menu as="div" className="flex h-full w-full xl:flex-row">
      <div className="relative flex-1">
        <MenuButton className="dropdown-btn flex h-full w-full flex-col items-center justify-center xl:items-start xl:pl-8">
          <div className="flex h-16 w-full justify-center xl:h-full xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col items-center gap-y-2 xl:flex xl:flex-row xl:gap-x-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />
                <div className="text-[15px] font-bold uppercase">
                  Select location
                </div>
              </div>
              <div className="text-center text-[13px] font-medium uppercase text-secondary xl:ml-6 xl:text-left">
                {location}
              </div>
            </div>
          </div>
        </MenuButton>
        <MenuItems className="dropdown-menu absolute -top-56 left-1/2 z-10 w-full max-w-[332px] -translate-x-1/2 transform rounded-[10px] bg-white py-6 text-center text-sm shadow-lg xl:left-0 xl:top-[90px] xl:-translate-x-0 xl:text-left">
          {locations.map((location, index) => {
            return (
              <div
                className="cursor-pointer py-4 text-[13px] uppercase hover:bg-gray-50 xl:pl-10"
                key={index}
                onClick={() => setLocation(location)}
              >
                {location}
              </div>
            );
          })}
        </MenuItems>
      </div>
    </Menu>
  );
}

export default LocationSelection;
