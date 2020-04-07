export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8be9268149e6c08a7121d3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gqupwndy',
                  apiId: '277dc745-0198-4557-9428-674bed3a8cfa'
                },
                {
                  buildHookId: '5e8be9262937e47d57eeae7d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qtp22fyz',
                  apiId: '487e6548-f882-40bc-a909-62a2cf2a1618'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ndoyeahmed/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qtp22fyz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
