"use client";

import { useRouter } from "next/navigation";
import Search from "@/components/server/search";
import { FormEvent } from "react";
import { formDataToObject } from "@/utils/form-data-to-object";

type SearchFormData = {
  query: string;
};

export function SearchMovies() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { query } = formDataToObject<SearchFormData>(formData);

    if (query.trim()) {
      router.push(`/movies?query=${encodeURIComponent(query)}`);
    }
  };

  return <Search onSubmit={handleSubmit} />;
}
