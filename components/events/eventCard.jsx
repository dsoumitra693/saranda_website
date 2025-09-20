import Image from "next/image";
import Link from "next/link";

export default function EventCard({
  title,
  description,
  imageSrc,
  registerLink,
  rulebookLink,
}) {
  return (
    <div className="block sm:flex w-19/20 lg:w-9/10 xl:w-3/4 2xl:w-7/10 bg-[#1E281C]/80 p-6 md:p-8 rounded-xl mt-8">
      {/* Left Section - Image */}
      <div className="sm:w-2/6 grid justify-around">
        <Image
          className="rounded-xl"
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
        />
      </div>

      {/* Right Section - Text & Buttons */}
      <div className="w-auto px-[15px] sm:w-4/6 text-white pt-3">
        <h3 className="text-xl md:text-2xl lg:text-4xl ">{title}</h3>
        <p className="text-sm md:text-lg lg:text-xl pt-1 md:pt-2 lg:pt-4">{description}</p>

        <div className="flex justify-center gap-2 mt-4 md:mt-8">
          <Link href="/register" passHref>
            <button className="text-sm md:text-lg lg:text-xl px-1 md:px-2 py-1 bg-white text-[#1E281C]/80 hover:bg-amber-200 font-semibold rounded-lg shadow-md">
              Register
            </button>
          </Link>
          <Link href="/rulebook" passHref>
            <button className="text-sm md:text-lg lg:text-xl px-1 md:px-2 py-1 bg-white text-[#1E281C]/80 hover:bg-amber-200 font-semibold rounded-lg shadow-md">
              Rulebook
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
