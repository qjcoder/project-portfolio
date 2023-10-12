import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen top-1/4  absolute">
      <div className="flex flex-col items-center bg-orange-400 p-6 ">
        <h2 className="font-black text-3xl mb-4">Page Not Found</h2>
        <p className="font-semibold mb-4">
          Could not find requested resource. Please check your url.
        </p>
        <Link href="/" className="bg-gray-300 px-4 py-2 rounded-md text-black">
          Return Home
        </Link>
      </div>
    </div>
  );
}
