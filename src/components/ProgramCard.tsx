import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ProgramCardProps {
  title: string;
  image: string;
  slug: string;
  shortDescription: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  image,
  slug,
  shortDescription,
}) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition duration-300 text-center">
      <div className="w-20 h-20 mx-auto mb-4 relative">
        <Image
          src={image}
          alt={`${title} icon`}
          layout="fill"
          objectFit="cover"
          className="rounded-full border border-gray-200"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{shortDescription}</p>
      <Link
        href={`/programs/${slug}`}
        className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
      >
        Дэлгэрэнгүй →
      </Link>
    </div>
  );
};

export default ProgramCard;
