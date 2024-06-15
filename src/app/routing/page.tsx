import Link from "next/link";

const Page = () => {
  return (
    <div className="text-center p-2 flex flex-col justify-center items-center">
      <h1 className="text-6xl p-2 m-2 rounded-md bg-blue-300">Routing</h1>
      <p className="w-3/4">
        Routing on the server side means the server is sending a response based
        on the URL path that the user is visiting. When we click on a link in a
        traditional server-rendered web app, the browser receives an HTML
        response from the server and reloads the entire page with the new HTML.
        In a Single-Page Application (SPA), however, the client-side JavaScript
        can intercept the navigation, dynamically fetch new data, and update the
        current page without full page reloads. This typically results in a more
        snappy user experience, especially for use cases that are more like
        actual &quot;applications&quot;, where the user is expected to perform
        many interactions over a long period of time. In such SPAs, the
        &quot;routing&quot; is done on the client side, in the browser. A
        client-side router is responsible for managing the application&apos;s
        rendered view using browser APIs such as History API or the hashchange
        event.
      </p>

      <Link href="/" className="rounded-md p-2 m-2 bg-blue-300">
        Go to home
      </Link>
    </div>
  );
};

export default Page;
