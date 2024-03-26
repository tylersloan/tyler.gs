function SectionHeader({ text }) {
  return <h3 className='text-xl inline-block border-b-2 pb-2 mb-6'>{text}</h3>;
}

export default function Resume() {
  return (
    <>
      <section>
        <h3 className='text-3xl  border-b-neutral-700 border-b-2 pb-2 mb-6'>
          Resume
        </h3>
      </section>
      <section className='mt-4'>
        <SectionHeader text='Summary' />
        <ul>
          <li className='mb-4 last:mb-0 '>
            <strong className='block mb-1'>Experience:</strong> 10+ years as
            Senior Software Engineer at a small web shop, an agency, and an
            enterprise software startup
          </li>
          <li className='mb-4 last:mb-0 '>
            <strong className='block mb-1'>Specialization:</strong> Frontend
            software development with React
          </li>
          <li className='mb-4 last:mb-0 '>
            <strong className='block mb-1'>Languages:</strong> JavaScript,
            TypeScript, HTML, CSS, .net, PHP
          </li>
          <li className='mb-4 last:mb-0 '>
            <strong className='block mb-1'>Tools:</strong> VS Code, WebStorm,
            GitHub, PostMan, Slack, Google Workspace
          </li>
          <li className='mb-4 last:mb-0 '>
            <strong className='block mb-1'>Leadership:</strong> 2 years as
            technical lead on agile teams, and onboarding and mentoring junior
            engineers
          </li>
        </ul>
      </section>

      <section className='mt-24'>
        <SectionHeader text='Technology and Tools' />
        <ul>
          {[
            {
              key: 'Languages',
              values: 'JavaScript, TypeScript, HTML, CSS, PHP',
            },
            {
              key: 'Frameworks',
              values:
                'React, react-router, Remix, Vue, Sass, CSS Modules, Tailwind, Material UI',
            },
            { key: 'Testing', values: 'testing-library, Cypress, Jest' },
            {
              key: 'Dev Environment',
              values: 'VS Code, WebStorm, eslint, prettier, PostMan',
            },
            {
              key: 'Development Lifecycle',
              values: 'JIRA, Github, Bitbucket, TeamCity, Laravel Forge',
            },
          ].map((item) => {
            return (
              <li className='mb-4 last:mb-0' key={item.key}>
                <strong className='block mb-1'>{item.key}:</strong>{' '}
                {item.values}
              </li>
            );
          })}
        </ul>
      </section>

      <section className='mt-24'>
        <SectionHeader text='Career Experience' />

        <section className='border border-neutral-600 p-8 pt-4 mt-4 relative'>
          <div className='absolute top-[00px] transform -translate-y-2/4 bg-neutral-800 px-4 -ml-4'>
            <p className='text-xl'>
              BoomTownROI{' '}
              <span className='text-neutral-400 font-light'>
                (acquired by Inside Real Estate 2023)
              </span>
            </p>
          </div>
          <p className='font-light'>
            05/2016 - 01/2024, Charleston, SC - Remote
          </p>
          {[
            {
              title: 'Senior Software Engineer - Inside Real Estate',
              dateRange: '01/2023 - 01/2024',
              technologies:
                'Vue, React, TypeScript, Tailwind, Material UI, PHP, Laravel',
              accomplishments: [
                {
                  top: 'Initiated Dependencies Upgrade',
                  sub: [
                    'Update repo with 325,000 lines of code and 90 dependencies from Vue 2 to Vue 3.',
                  ],
                },
                {
                  top: 'Part of 4 person team integrating frontend and backend of merging real estate CRMs serving over 400,000 users, post acquisition.',
                },
                {
                  top: 'Success Assurance',
                  sub: [
                    'CRM feature to show real estate agent where a lead is in the home transaction process.',
                  ],
                },
                {
                  top: 'Integrated ChatGPT into existing Text, Email, and Call features.',
                },
                {
                  top: 'Enterprise Tools',
                  sub: [
                    'Feature-rich application servings hundreds of in-house support engineers.',
                    'Refactored a TALL (Tailwind UI, Alpine js, Livewire, Laravel) stack application to a React frontend running on Vite, coupled with a Laravel API, optimizing tech stack for enhanced performance.',
                    'Used React and TypeScript to create UI component library on top of Material UI.',
                  ],
                },
              ],
            },
            {
              title: 'Senior Software Engineer - BoomTown',
              dateRange: '02/2022 - 01/2023',
              technologies:
                'React, react-router, Hooks, Redux, GraphQL, testing-library, .net, c#',
              accomplishments: [
                {
                  top: 'Code Quality',
                  sub: [
                    'Established React development standards adopted by multiple teams, enforcing best practices and ensuring code maintainability.',
                  ],
                },
                {
                  top: 'Leadership',
                  sub: [
                    'Collaborated with business development teams, designers, and product departments to conceptualize, plan, and execute features.',
                    'Participated in hiring, onboarding, and mentoring junior developers.',
                    'Tech leader on agile teams, writing technical specifications, phasing out projects, writing tickets, and planning deployment strategies–seeing new features through the full software development lifecycle.',
                    'Provided thorough and constructive code reviews in Github.',
                  ],
                },
                {
                  top: "Wrote repo and feature wiki's to share knowledge across departments and teams.",
                },
                {
                  top: 'Collaborated with DevOps contributing insights and assistance in configuring and optimizing the CI/CD pipeline.',
                },
                {
                  top: 'Brokermint',
                  sub: [
                    'Led frontend engineers across multiple teams through integration of an external Real Estate Transaction Management System into CRM.',
                    'Collaborated with backend engineers on data schema.',
                  ],
                },
              ],
            },
            {
              title: 'Software Engineer - BoomTown',
              dateRange: '05/2016 - 02/2022',
              technologies: 'React, Redux, Scss, CSS Modules, .net',
              accomplishments: [
                {
                  top: 'Wrote React component library from scratch, tested with Jest, Cypress, testing-library.',
                },
                {
                  top: 'Implemented eslint and wrote custom rules, then refactored and reduced linter violations from 5,000+ to less than 500, in a 10 year old codebase',
                  sub: ['Used prettier to remove human error.'],
                },
                {
                  top: 'Refactor legacy features to modern React, removing dozens of .net routes with client-side routing and React frontends.',
                },
                {
                  top: 'Participated in agile ceremonies, such as retrospectives, ticket pointing, and sprint planning, while incrementally releasing production code every 2 weeks to hundreds of thousands of users.',
                },
              ],
            },
          ].map((item) => {
            return (
              <>
                <div className='mb-8 pb-4 border-b inline-block'>
                  <h4 className='mt-8  text-lg'>{item.title},</h4>
                  <span className=''>{item.dateRange}</span>
                </div>

                <p className='mb-4 italic'>Tech Used: {item.technologies}</p>
                <ul className='space-y-6 list-disc list-inside'>
                  {item.accomplishments.map((accomplishment, index) => {
                    return (
                      <li key={index}>
                        <strong>{accomplishment.top}</strong>
                        {accomplishment.sub && (
                          <ul className='ps-5 mt-2 space-y-1 list-disc list-inside'>
                            {accomplishment.sub.map((sub, idx) => {
                              return <li key={idx}>{sub}</li>;
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </section>

        <section className='border border-neutral-600 p-8 mt-16 pt-4 relative'>
          <div className='absolute top-[00px] transform -translate-y-2/4 bg-neutral-800 px-4 -ml-4'>
            <p className='text-xl'>Erwin Penland</p>
          </div>
          <p className='font-light'>04/2014 - 05/2016, Greenville, SC</p>
          {[
            {
              title: 'Frontend Developer',
              technologies: 'HTML, CSS, JavaScript, jQuery, Angular',
              accomplishments: [
                {
                  top: 'Developed pixel-perfect, cross-browser compatible websites and applications.',
                },
                {
                  top: 'Built dozens of campaign sites for companies like Verizon, Denny’s, CIT Bank, as well as our own portfolio.',
                },
                {
                  top: 'Learned problem-solving skills, with the ability to address and resolve design-related challenges during the development process',
                },
                {
                  top: 'Accepted new role at BoomTown to work on a product, taking with me a ton of experience and expertise in building small to large web sites and applications while working in the digital agency space',
                },
              ],
            },
          ].map((item) => {
            return (
              <>
                <div className='mb-8 pb-4 border-b inline-block'>
                  <h4 className='mt-8  text-lg'>{item.title}</h4>
                </div>

                <p className='mb-4 italic'>Tech Used: {item.technologies}</p>
                <ul className='space-y-6 list-disc list-inside'>
                  {item.accomplishments.map((accomplishment, index) => {
                    return (
                      <li key={index}>
                        <strong>{accomplishment.top}</strong>
                        {accomplishment.sub && (
                          <ul className='ps-5 mt-2 space-y-1 list-disc list-inside'>
                            {accomplishment.sub.map((sub, idx) => {
                              return <li key={idx}>{sub}</li>;
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </section>

        <section className='border border-neutral-600 p-8 mt-16 pt-4 relative'>
          <div className='absolute top-[00px] transform -translate-y-2/4 bg-neutral-800 px-4 -ml-4'>
            <p className='text-xl'>RoboJuice</p>
          </div>
          <p className='font-light'>09/2013 - 04/2014, Greenville, SC</p>
          {[
            {
              title: 'Web Developer',
              technologies: 'HTML, CSS, JavaScript, jQuery, WordPress, PHP',
              accomplishments: [
                {
                  top: 'Engineered custom WordPress themes, templates, and widgets using a proprietary WordPress framework, showcasing both technical expertise and innovation in creating tailored web solutions with PHP, HTML, and CSS.',
                },
              ],
            },
          ].map((item) => {
            return (
              <>
                <div className='mb-8 pb-4 border-b inline-block'>
                  <h4 className='mt-8  text-lg'>{item.title}</h4>
                </div>

                <p className='mb-4 italic'>Tech Used: {item.technologies}</p>
                <ul className='space-y-6 list-disc list-inside'>
                  {item.accomplishments.map((accomplishment, index) => {
                    return (
                      <li key={index}>
                        <strong>{accomplishment.top}</strong>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </section>
      </section>

      <section className='mt-24'>
        <SectionHeader text='Languages, Frameworks, and Skills' />
        <ul className='space-y-6 list-disc list-inside'>
          <li>
            <strong>JavaScript:</strong> React, Typescript, Vue
          </li>
          <li>
            <strong>CSS:</strong> Sass, CSS Modules, Tailwind, Responsive Web
            Design
          </li>
          <li>
            <strong>HTML:</strong> (Accessible, Components, JSX)
          </li>
          <li>
            <strong>Design:</strong> User Experience / User Interface Design
            Engineering
          </li>
          <li>
            <strong>Dev Experience:</strong> Vite, Webpack, eslint, prettier,
            testing-library, Jest, Cypress
          </li>
          <li>
            <strong>Backend:</strong> C#, .net, PHP, Laravel
          </li>
          <li>
            <strong>Version Control:</strong> Git, Code Reviews, Github MySQL
          </li>
          <li>
            <strong>Hosting Experience:</strong> Laravel Forge, AWS
          </li>
        </ul>
      </section>
    </>
  );
}
