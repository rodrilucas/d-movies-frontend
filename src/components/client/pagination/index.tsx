"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/components/server/pagination";

type PaginationClientProps = {
  totalPages: number;
  totalItems: number;
  pageSize: number;
};

export default function PaginationClient({ ...rest }: PaginationClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page") ?? "1");

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    
    params.set("page", newPage.toString());
    router.push(`/movies?${params.toString()}`);
  };

  return (
    <Pagination currentPage={page} onPageChange={handlePageChange} {...rest} />
  );
}
