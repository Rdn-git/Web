import Link from "next/link";
import React from "react";

interface ProgramCardProps {
  title: string;
  icon: string;
  slug: string;
  shortDescription: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  icon,
  slug,
  shortDescription,
}) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
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
