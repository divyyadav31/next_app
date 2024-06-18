import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const ShadPage = () => {
  return (
    <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
      <span className="text-4xl underline p-2 m-2">Pagination</span>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/routing">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/state">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/config">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/shadcn">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="/" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ShadPage;
