import Link from "next/link";

export default function Button() {
    return (
        <>
            <Link href="/" className="flex items-center justify-between px-4 w-36 h-10 bg-purple-900 text-gray-50 rounded-md cursor-pointer">
                <span className="text-2xl leading-none relative -top-0.5">+</span>
                <span className="leading-none">Add product</span>
            </Link>
        </>
    )
}