import { useEffect, useState } from "react";
import { Filter } from "../Filter";
import { Header } from "../Header";
import { List } from "../List";


import { StyledContainer } from "./style";



export function Dashboard() {

  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("dark");


  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (

    <StyledContainer>
      <Header onThemeChange={setTheme} />
      <Filter filter={filter} onFilterChange={setFilter} />
      <List filter={filter} />
    </StyledContainer>

  )
}
