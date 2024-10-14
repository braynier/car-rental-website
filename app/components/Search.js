import { useSearch } from "../context/searchContext";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

function Search() {
  const { searchActive } = useSearch();

  return (
    <div
      className={`${searchActive ? "rounded-none bg-white xl:h-[80px]" : "xl:h rounded-[20px] bg-white py-6 xl:h-[98px] xl:pr-4"} relative hidden w-full shadow-lg xl:block`}
    >
      <div className={`flex h-full ${searchActive && "container mx-auto"}`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="flex items-center px-6 xl:h-full xl:px-0">
          <button
            className={`${searchActive ? "btn btn-sm btn-accent xl:w-[164px]" : "btn btn-lg btn-accent xl:w-[184px]"} `}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
