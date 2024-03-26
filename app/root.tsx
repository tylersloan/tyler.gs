import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from '~/tailwind.css?url';

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100..900&display=swap'
          rel='stylesheet'
        />
        <Meta />
        <Links />
      </head>
      <body className='text-lg text-slate-800 bg-slate-100'>
      <main className='p-4 max-w-screen-xl mx-auto my-4 w-[90%] border border-slate-300'>
        <header className='mb-2 border-b-2 border-slate-200 pb-2'>
          <h1 className='font-bold'>Tyler Sloan!</h1>
          <h2>Senior Software Engineer</h2>
        </header>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/resume'>Resume</a>
            </li>
          </ul>
        </nav>
        {children}
        <ScrollRestoration />
        <Scripts />
      </main>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
