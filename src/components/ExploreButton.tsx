"use client";

import { useRouter } from "next/navigation";

export default function ExploreButton() {
  const router = useRouter();

  return (
    <div className="xl:w-1/2 flex justify-center md:mt-60 xl:mt-0">
      <div
        className="w-40 h-40 md:h-52 md:w-52 xl:w-60 xl:h-60 bg-white rounded-full flex items-center justify-center text-black cursor-pointer"
        onClick={() => router.push("/destination")} // 👈 navigates on click
      >
        <p className="text-2xl md:text-4xl font-bold tracking-widest">
          EXPLORE
        </p>
      </div>
    </div>
  );
}
