import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Card } from "../Card";
import { StyledContainer } from "./style";

interface Extension {
  id: number;
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
}
interface FilterProps {
  filter: string;
}


export function List({ filter }: FilterProps) {
  const [extensions, setExtensions] = useState<Extension[]>([]);

  async function fetchData() {
    try {
      const response = await api.get("/extensions");
      console.log(response.data)

      if (filter === "all") {
        console.log("aquiiii")
        setExtensions(response.data);
      }
      else if (filter === "active") {
        const dataFilter = response.data.filter((item: Extension) => item.isActive === true)
        setExtensions(dataFilter);
      }
      else if (filter === "inactive") {
        const dataFilter = response.data.filter((item: Extension) => item.isActive === false)
        setExtensions(dataFilter);
      }

    } catch (error) {
      console.error("Erro ao buscar extensões:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [filter]);


  const handleRemoveExtension = async (id: number) => {
    try {
      const response = await api.delete(`/extensions/${id}`);
      console.log(response)
      setExtensions((prev) => prev.filter((extense) => extense.id !== id))

    } catch (error) {
      console.log(error)
    }
  }

  async function handleToggleActive(id: number, isActive: boolean) {
    try {
      const response = await api.patch(`/extensions/${id}`, { isActive });
      console.log(response)
      await fetchData();
      // setExtensions((prevExtensions) =>
      //   prevExtensions.map((item) =>
      //     item.id === id ? { ...item, isActive } : item
      //   )
      // );
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StyledContainer>
      {extensions.map((item) => (
        <Card key={item.id} extension={item} onDelete={handleRemoveExtension} onToggleActive={handleToggleActive} />
      ))}
    </StyledContainer>
  );
}
