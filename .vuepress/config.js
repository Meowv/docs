module.exports = {
    title: '📖Documents',
    description: 'This is a personal document library for development work',
    base: '/',
    host: '127.0.0.1',
    port: '90',
    head: [],
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        'vuepress-plugin-smooth-scroll',
        '@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
        '@vuepress/medium-zoom', {
            selector: 'img.zoom-custom-imgs',
            options: {
                margin: 16
            }
        },
        [
            '@vssue/vuepress-plugin-vssue', {
                platform: 'github',
                owner: 'Meowv',
                repo: 'docs',
                clientId: 'dfcb3e4078504d07ccbf',
                clientSecret: 'f182d64e6d5063e0b137c0d039d4a99a5cebda00',
            }
        ],
        [
            "vuepress-plugin-code-copy", {
                align: "top",
                color: "#5a9600",
                backgroundColor: "#5a9600",
                successText: "复制成功"
            }
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'meowv/docs',
        repoLabel: '⭐️GitHub',
        docsRepo: 'meowv/docs',
        docsDir: '/',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        sidebarDepth: 2,
        smoothScroll: true,
        nav: [
            {
                text: '⚡.NET Core',
                link: '/aspnetcore/abp-blog/'
            },
            {
                text: '🎈Python',
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
                "abp-cli",
                "slim-and-run",
                "beautify-with-swagger",
                "ef-and-codefirst",
                "repositories-and-crud",
                "return-api",
                "swagger-group-describe-authorize",
                "generate-jwt-with-github",
                "exception-and-logging",
                "use-redis-cachedatas",
                "task-processing-with-hangfire",
                "object-mapping-with-automapper",
                "task-processing-bestpractice-1",
                "task-processing-bestpractice-2",
                "task-processing-bestpractice-3"
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
