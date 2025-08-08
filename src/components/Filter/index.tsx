import { StyledHeader } from "./style";

interface FilterProps {
  onFilterChange: (filter: string) => void;
  filter:string;
}

export function Filter({ onFilterChange ,filter}: FilterProps) {

  function handleToFilter(filterType: string) {
    onFilterChange(filterType)
   
  }


  return (
    <StyledHeader>
      <h1>Extensions List</h1>
      <div className="content">
        <button onClick={() => handleToFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
        <button onClick={() => handleToFilter("active")} className={filter === "active" ? "active" : ""}>Active</button>
        <button onClick={() => handleToFilter("inactive")} className={filter === "inactive" ? "active" : ""}>Inactive</button>
      </div>
    </StyledHeader>
  )
}
