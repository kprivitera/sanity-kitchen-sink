export default {
  widgets: [
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
                  buildHookId: '603b57458ed4f681d6cfdf6d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i8zqek4h',
                  apiId: 'b651e507-8694-4ad8-bc87-95f7ce083f55'
                },
                {
                  buildHookId: '603b57453393c12ed8882e0b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-44tw9foh',
                  apiId: 'a79d226e-2866-4fc9-8b5a-243a6dfa563b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kprivitera/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-44tw9foh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
