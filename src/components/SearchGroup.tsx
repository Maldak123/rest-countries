import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SearchGroupProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  filterValue: string;
  onFilterChange: (value: string) => void;
};

const SearchGroup = ({
  searchValue,
  onSearchChange,
  onFilterChange,
  filterValue,
}: SearchGroupProps) => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="mt-4 flex flex-col gap-8 md:flex-row md:justify-between">
      <div className="flex items-center gap-8 rounded-lg px-4 py-3 shadow-[0_0_5px_rgba(0,0,0,.25)] md:w-[40%] dark:bg-[hsl(209,23%,22%)]">
        <Search size={20} />
        <input
          type="text"
          role="search"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={(e) => {
            onSearchChange(e.target.value);
          }}
          className="outline-0"
        />
      </div>
      <div>
        <Select value={filterValue} onValueChange={onFilterChange}>
          <SelectTrigger className="border-0 px-10 py-7 dark:text-white">
            <SelectValue
              placeholder="Filter by Region"
            />
          </SelectTrigger>
          <SelectContent className="shadow-none dark:bg-[hsl(209,23%,22%)]">
            <SelectGroup>
              <SelectItem value="[a-z]">All</SelectItem>
              {regions.map((e) => (
                <SelectItem value={e.toLowerCase()}>{e}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchGroup;
