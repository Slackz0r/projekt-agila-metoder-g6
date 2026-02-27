"use server"

import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation"

export async function addProduct(formData: FormData) {
	const title=formData.get("title") as string;
    const price=formData.get("price") as string;
    const description=formData.get("description") as string;
    const thumbnail=formData.get("thumbnail") as string;
    const categoryId=formData.get("categoryId") as string;
    const stock=formData.get("stock") as string;
    const brand=formData.get("brand") as string;
    const submit=formData.get("submit") as string;
    const redirectPath=(submit==="again") ? "/products/create" : "/"

const newProduct={
    title,
    brand,
    description,
    thumbnail,
    price: parseInt(price, 10),
    categoryId: parseInt(categoryId, 10),
    stock: parseInt(stock, 10),
}
const res = await fetch(`http://localhost:4000/products/`,{
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify(newProduct)
});

const data=await res.json();

revalidatePath("/");
redirect(redirectPath);

}
