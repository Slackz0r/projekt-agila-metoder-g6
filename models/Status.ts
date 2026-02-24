export interface StatusProps {
  title: "Total Stock" | "In Stock" | "Low Stock" | "Out of Stock";
  amount: number;
  variant: "default" | "success" | "warning" | "danger";
}
