"use client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useSelector } from "react-redux";
import { counterValue } from "@/app/counter/counterSlice";

export default function NavBar() {
  const value = useSelector(counterValue);
  return (
    <nav className="w-full text-black bg-blue-300 p-2 flex justify-between items-center">
      <Image src="next.svg" alt="" width={60} height={60} />
      {value > 1 && (
        <p className="rounded-md bg-blue-700 p-2 text-white">
          {value} Items in cart{" "}
        </p>
      )}
      {value <= 1 && (
        <p className="rounded-md bg-blue-700 p-2 text-white">
          {value} Item in cart{" "}
        </p>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/routing">Routing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/state">State Management</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/config">Config Data</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
