//Fetch
import { getData } from "@/utils/fetchFunctions";
//Interface
import { ProductsResponse } from "./types";
//Components
import AdminPanel from "@/components/ui/admin-panel";
import ProductGrid from "@/components/ui/product-grid";
import ProductManagement from "@/components/ui/product-management";
import ProductStats from "@/components/ui/product-stats";
import SearchBar from "@/components/ui/search-bar";

// Amount of fetched items
const defaultLimit = "6";

// Application
export default async function Home() {
  const data: ProductsResponse = await getData(defaultLimit);

  console.log(data);

  return (
    <main>
      <div>
        <AdminPanel />
        <section>
          <ProductManagement />
          <ProductStats />
          <SearchBar />
          <ProductGrid />
        </section>
      </div>
    </main>
  );
}
