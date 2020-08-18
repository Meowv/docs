module.exports = {
    title: '📖Documents',
    description: 'This is a personal document library for development work',
    base: '/',
    head: [],
    plugins: {},
    themeConfig: {
        repo: 'meowv/docs',
        repoLabel: '👍GitHub',
        docsRepo: 'meowv/docs',
        docsDir: '/',
        editLinks: true,
        smoothScroll: true,
        nav: [
            {
                text: '🎈.NET Core',
                link: '/aspnetcore/abp-blog/'
            },
            {
                text: '⚡Python',
                link: '/python/'
            },
            {
                text: '✔技术文章',
                link: '/articles/',
            },
            {
                text: '✨总结',
                link: '/summary/',
            }
        ],
        sidebar: {
            '/aspnetcore/abp-blog/': [
                "abp-cli"
            ],
            '/python/': [

            ],
            '/articles/': [

            ],
            '/summary/': [

            ]
        },
    }
}
