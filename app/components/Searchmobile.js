import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

function Searchmobile() {
  return (
    <div className="font-medium xl:hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelection />
          <HoursSelection />
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent mx-auto w-[164px]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchmobile;
