import type { StatusProps } from "@/models/Status";
import { Layers, CircleCheck, CircleAlert, CircleX } from "lucide-react";

export default function StatusCard({ title, amount, variant }: StatusProps) {
  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  return (
    <>
      <div
        className={`flex justify-between  flex-1 gap-4 p-6 rounded-xl shadow ${variantStyles[variant]}`}
      >
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold">{amount}</p>
        </div>
        {variant === "default" && <Layers />}
        {variant === "success" && <CircleCheck />}
        {variant === "warning" && <CircleAlert />}
        {variant === "danger" && <CircleX />}
      </div>
    </>
  );
}
