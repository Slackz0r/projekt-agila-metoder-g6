const API_URL = "http://localhost:4000";

export const getData = async (defaultLimit: string) => {
  const response = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  );

  const data = response.json();

  return data;
};
