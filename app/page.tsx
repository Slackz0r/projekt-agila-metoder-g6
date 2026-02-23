//Fetch
import { getData } from "@/utils/fetchFunctions";
//Interface
import { ProductsResponse } from "@/types/types.ts";
//Components
import AdminPanel from "@/components/ui/admin-panel";
//import ProductGrid from "@/components/ui/product-grid";
import Products, { ProdLen } from "@/components/GetProd";
import ProductManagement from "@/components/ui/product-management";
import ProductStats from "@/components/ui/product-stats";
import SearchBar from "@/components/ui/search-bar";

// Amount of fetched items
const defaultLimit = "6";
const API_URL = "http://localhost:4000";

// Application
export default async function Home() {
  const data: ProductsResponse = await getData(defaultLimit);

  console.log(data);

  return (
    <main>
      <p>{ProdLen(data.products)}</p>
      <div className="flex">
        <AdminPanel />
        <section>
          <ProductManagement />
          <ProductStats />
          <SearchBar />
          <Products />
        </section>
      </div>
    </main>
  );
}
