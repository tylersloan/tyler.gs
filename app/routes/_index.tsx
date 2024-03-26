import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ];
};

export default function Index() {
  return (
    <section>
      <p className='mb-3'>Hi, I'm Tyler and I need to get back to work!</p>
      <p className='mb-3'>
        I'm a Senior Software Engineer. I could also be called a "Senior{' '}
        <em>Frontend Engineer</em>" or "Developer", if you'd rather. I'm skilled
        in frontend development and can contribute across the entire development
        lifecycle. My sweet spot is building designs in the browser and fetching
        data quickly either with an API or with server-side rendered components,
        resulting in a smooth user experience.
      </p>
      <p className='mb-3'>
        I'm a fan of <strong>React</strong> and <strong>Remix</strong> and I use{' '}
        <strong>Typescript</strong> to make sure my code is predictable and
        maintainable. I'm also a fan of <strong>Tailwind CSS</strong> and{' '}
        <strong>CSS Modules</strong> for styling.
      </p>
      <p className='mb-3'>
        I'm looking to join a small and driven team, whether remote or local.
      </p>
      <p>
        Feel free to check out{' '}
        <a className='text-pink-200 hover:text-pink-300' href='/resume'>
          /resume
        </a>{' '}
        and get in touch via email (tyler.g.sloan@gmail.com) or the links below.
        🤝🏽
      </p>
    </section>
  );
}
