import { getData } from "@/utils/fetchFunctions";
//Interface
import { ProductsResponse } from "@/types/types";
//Components
import AdminPanel from "@/components/ui/admin-panel";
//import ProductGrid from "@/components/ui/product-grid";
import ProductManagement from "@/components/ui/product-management";
import ProductStats from "@/components/ui/product-stats";
import SearchBar from "@/components/ui/search-bar";
import Products from "@/components/GetProd";

const defaultLimit = "100";

export default async function Home() {
  const data: ProductsResponse = await getData(defaultLimit);

  return (
    <main>
      <div className="flex">
        <AdminPanel />
        <section>
          <ProductManagement />
          <ProductStats />
          <SearchBar />

          <Products products={data.products} />
        </section>
      </div>
    </main>
  );
}
