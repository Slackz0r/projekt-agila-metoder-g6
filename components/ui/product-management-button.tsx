import Link from "next/link";

export default function Button() {
    const styleButton = "inline-flex items-center justify-center rounded-xl bg-purple-700 px-5 py-2.5 mx-8 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-purple-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:ring-offset-2 active:scale-[0.98] disabled:bg-purple-300 disabled:cursor-not-allowed disabled:shadow-none";
    return (
        <>
            <Link href="/products/create" className={styleButton}>
                <span className="text-2xl leading-none relative -top-0.5">+</span>
                <span className="leading-none">Add product</span>
            </Link>
        </>
    )
}