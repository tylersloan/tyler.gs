import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';
import { SpeedInsights } from '@vercel/speed-insights/remix';
import { Analytics } from '@vercel/analytics/react';
import stylesheet from '~/tailwind.css?url';

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
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
      <body className=' text-neutral-100 bg-neutral-800'>
        <main className='p-4 max-w-screen-sm mx-auto my-4 w-[90%]'>
          <header className='mb-8 border-b-4 border-neutral-600 pb-4'>
            <h1>
              <a href='/'>Tyler Sloan</a>
            </h1>
            <h2 className='font-light text-neutral-300'>
              Senior Software Engineer
            </h2>
          </header>
          {children}
          <ul className='flex gap-4 mt-12 items-center border-t-2 border-slate-700 pt-12'>
            <li>
              <a
                className='text-neutral-300 hover:text-neutral-100'
                href='https://twitter.com/tylergs_'
              >
                <svg
                  width='1.25rem'
                  height='1.25rem'
                  fill='currentColor'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>X</title>
                  <path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' />
                </svg>
              </a>
            </li>
            <li>
              <a
                className='text-neutral-300 hover:text-neutral-100'
                href='https://www.linkedin.com/in/tyler-sloan-16320755/'
              >
                <svg
                  width='1.25rem'
                  height='1.25rem'
                  fill='currentColor'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>LinkedIn</title>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </a>
            </li>
            <li>
              <a
                className='text-neutral-300 hover:text-neutral-100'
                href='https://github.com/tylersloan'
              >
                <svg
                  width='1.25rem'
                  height='1.25rem'
                  fill='currentColor'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>GitHub</title>
                  <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                </svg>
              </a>
            </li>
            <li>
              <a
                className='text-neutral-300 hover:text-neutral-100'
                href={location.pathname === '/resume' ? '/' : '/resume'}
              >
                {location.pathname === '/resume' ? 'Home' : 'Resume'}
              </a>
            </li>
          </ul>
          <Analytics />
          <SpeedInsights />
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
