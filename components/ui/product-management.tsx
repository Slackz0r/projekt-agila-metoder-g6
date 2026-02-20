import Button from "./product-management-button"

export default function ProductManagement() {
  return (
    <>
      <div className="flex items-center justify-between py-4 px-8 border border-gray-200">
        <span>
          <h2 className="text-2xl font-bold">Product management</h2>
          <p className="text-sm text-gray-500">Manage your store inventory</p>
        </span>
        <Button />
      </div>
    </>
  );
}
