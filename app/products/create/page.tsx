import Form from "next/form";
import Link from "next/link";
import { addProduct } from "@/components/addProduct";
import { Category } from "@/app/types";

const categories: Category[] = await fetch(`http://localhost:4000/categories`).then((res) => res.json());

export default function createProductPage() {
    /*
    All styling kommer ifrån chatgpt efter prompten "Modern css styling i tailwind för input, button och textarea"
    Ruttnade på att tailwind får koden att sträckas ut och bli oöverskådelig så la dem i respektive konstanter istället.
    */
    const styleInput = "w-full rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-2.5 text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 hover:shadow-md";
    const styleTextArea = "w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";
    const styleButton = "inline-flex items-center justify-center rounded-xl bg-fuchsia-950 px-5 py-2.5 mx-8 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-fuchsia-850 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:ring-offset-2 active:scale-[0.98] disabled:bg-fuchsia-300 disabled:cursor-not-allowed disabled:shadow-none";

    return <main className="bg-slate-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl px-6">

            <div className="mx-auto w-max">
                <h1 className="text-2xl font-semibold text-slate-800">
                    Add product
                </h1>
                <p className="text-sm text-slate-500">Enter the product information</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
                <Form action={addProduct}>
                    <div className="grid grid-cols-[auto_1fr] gap-y-4 items-center max-w-4xl">
                        <div className="col-span-2">
                            <label className="font-semibold" htmlFor="title">
                                Title
                            </label>
                            <input
                                className={styleInput}
                                type="text"
                                id="title"
                                name="title"
                                minLength={3}
                                maxLength={20}
                                required
                            />
                        </div>
                        <div className="col-span-2 grid grid-cols-[70px_1fr_100px_1fr] gap-4 items-baseline">
                            <label className="font-semibold" htmlFor="brand">
                                Brand
                            </label>
                            <input
                                className={styleInput}
                                type="text"
                                id="brand"
                                name="brand"
                                required
                            />
                            <label className="font-semibold" htmlFor="categoryId">
                                Category
                            </label>
                            <select
                                className={styleInput}
                                id="categoryId"
                                name="categoryId"
                                required
                            >
                                {categories.map((cat) => <option key={`categoryOption-${cat.id}`} value={cat.id}>{cat.name}</option>)}
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label className="font-semibold" htmlFor="thumbnail">
                                Thumbnail (URL)
                            </label>
                            <input
                                className={styleInput}
                                type="url"
                                id="thumbnail"
                                name="thumbnail"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-[1fr_1fr] gap-4">

                            <div>
                                <label className="font-semibold" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    className={styleTextArea}
                                    id="description"
                                    name="description"
                                    rows={6}
                                    minLength={5}
                                    maxLength={350}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="font-semibold" htmlFor="price">
                                        Price
                                    </label>
                                    <input
                                        className={styleInput}
                                        type="number"
                                        id="price"
                                        name="price"
                                        min="1.0"
                                        step="0.01"
                                        required
                                    />
                                </div><div>
                                    <label className="font-semibold" htmlFor="stock">
                                        Stock
                                    </label>
                                    <input
                                        className={styleInput}
                                        type="number"
                                        id="stock"
                                        name="stock"
                                        min="0"
                                        step="1"
                                    />
                                </div>
                            </div>

                        </div>

                        <span className="col-span-2 flex justify-center">
                            <button
                                type="submit"
                                id="submit"
                                name="submit"
                                value="again"
                                className={styleButton}
                            >Save and add
                            </button>
                            <button
                                type="submit"
                                id="submit"
                                name="submit"
                                value="back"
                                className={styleButton}
                            >Save and back
                            </button>
                            <Link
                                href="/"
                                className={styleButton}
                            >Back
                            </Link>
                        </span>
                    </div >

                </Form >
            </div >
        </div >
    </main >

}