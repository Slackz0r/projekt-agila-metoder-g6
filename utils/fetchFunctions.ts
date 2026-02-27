const API_URL = "http://localhost:4000";

// we use the fetch() method to get the products from the API
// in this fetch we sort using _sort and _order and we limit the number of products using _limit
// we also use _expand to get the relational category data
// we can use the other destructed variables like page, total and so on to create pagination or show info

export const getData = async (defaultLimit: string) => {
  const response = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  );

  const data = response.json();

  return data;
};
