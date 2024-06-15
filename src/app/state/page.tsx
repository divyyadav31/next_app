"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../counter/counterSlice";

const Page = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-center p-2 flex flex-col justify-center items-center">
      <Link href="/" className="rounded-md p-2 m-2 bg-blue-300">
        Go to home
      </Link>
      <h2 className="text-6xl p-2 m-2 rounded-md bg-blue-300">
        State management
      </h2>
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="m-2 p-2 rounded-md bg-green-300"
        >
          Increase
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="m-2 p-2 rounded-md bg-red-300"
        >
          Decrease
        </button>
      </div>

      <p className="w-3/4">
        Redux is a JS library for predictable and maintainable global state
        management. It helps you write applications that behave consistently,
        run in different environments (client, server, and native), and are easy
        to test. On top of that, it provides a great developer experience, such
        as live code editing combined with a time traveling debugger. You can
        use Redux together with React, or with any other view library. It is
        tiny (2kB, including dependencies), but has a large ecosystem of addons
        available. Redux Toolkit is our official recommended approach for
        writing Redux logic. It wraps around the Redux core, and contains
        packages and functions that we think are essential for building a Redux
        app. Redux Toolkit builds in our suggested best practices, simplifies
        most Redux tasks, prevents common mistakes, and makes it easier to write
        Redux applications.
      </p>
    </div>
  );
};

export default Page;
