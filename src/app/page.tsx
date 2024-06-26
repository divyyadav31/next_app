import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jumbaya",
  description: "next app",
};

export default function Home() {
  return (
    <main className="text-center p-2 flex justify-center items-center flex-col">
      <h1 className="text-6xl p-2 m-2">
        Learning Routing and State Management
      </h1>
      <Link href="/routing" className="rounded-md p-2 m-2 bg-blue-300">
        Go to Routing
      </Link>
      <Link href="/state" className="rounded-md p-2 m-2 bg-blue-300">
        Go to State Management
      </Link>
      <Link href="/config" className="rounded-md p-2 m-2 bg-blue-300">
        Go to Config Data
      </Link>
      <Link href="/shadcn" className="rounded-md p-2 m-2 bg-blue-300">
        Go to shad play
      </Link>
    </main>
  );
}
