"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

export default function BackButton({ title }: Props) {
  const router = useRouter();

  return (
    <span
      onClick={() => router.back()}
      className="flex items-center gap-2 cursor-pointer text-sm p-1"
    >
      <ArrowLeft size={18} />
      {title}
    </span>
  );
}
