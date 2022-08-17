import client from "axios/client";
import { useEffect, useMemo, useState } from "react";

function useNavigation() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.get("/categories").then((res) => setCategories(res.data));
  }, []);

  const navigation = useMemo(() => {
    return [
      { href: "/", name: "Główna" },
      { href: "/o-nas", name: "O Nas" },
      ...categories.map(({ id, name }) => ({ href: "/kategoria/" + id, name })),
    ];
  }, [categories]);

  return navigation;
}

export default useNavigation;
