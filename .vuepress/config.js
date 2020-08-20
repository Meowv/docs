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
        'reading-progress',
        [
            '@vuepress/search', {
                searchMaxSuggestions: 10
            }
        ],
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
        ],
        [
            '@vuepress/last-updated', {
                transformer: (timestamp, lang) => {
                    const moment = require('moment');
                    moment.locale(lang);
                    return moment(timestamp).fromNow();
                }
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
                items: [
                    {
                        text: '🚀基于 abp vNext 和 .NET Core 开发博客项目',
                        link: '/aspnetcore/abp-blog/'
                    }
                ]
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
                "task-processing-bestpractice-3",
                "blog-api-bestpractice-1",
                "blog-api-bestpractice-2",
                "blog-api-bestpractice-3",
                "blog-api-bestpractice-4",
                "blog-api-bestpractice-5",
                "blazor-bestpractice-1",
                "blazor-bestpractice-2",
                "blazor-bestpractice-3",
                "blazor-bestpractice-4",
                "blazor-bestpractice-5",
                "blazor-bestpractice-6",
                "blazor-bestpractice-7",
                "blazor-bestpractice-8",
                "blazor-bestpractice-9",
                "publish-blog"
            ],
            '/python/': [
                {
                    title: '网络请求',
                    collapsable: false,
                    children: [
                        'network-request/http',
                        'network-request/urllib',
                        'network-request/requests'
                    ]
                },
                {
                    title: '数据提取',
                    collapsable: false,
                    children: [
                        'data-extraction/xpath',
                        'data-extraction/lxml',
                        'data-extraction/beautifulsoup',
                        'data-extraction/regex',
                        'data-extraction/python-re'
                    ]
                },
                {
                    title: '数据存储',
                    collapsable: false,
                    children: [
                        'data-storage/json',
                        'data-storage/csv',
                        'data-storage/pymysql',
                        'data-storage/mongodb'
                    ]
                },
                {
                    title: '爬虫进阶',
                    collapsable: false,
                    children: [
                        'spider/multithreading',
                        'spider/selenium',
                        'spider/tesseract',
                        'spider/scrapy',
                        'spider/scrapy-redis'
                    ]
                }
            ],
            '/articles/': [
                {
                    title: 'Other',
                    children: [
                        'other/revoke-wechart-msg-patcher',
                        'other/visual-studio-2019-keys',
                        'other/windows10-run-android-emulator-bsod-solution',
                        'other/remove-windows-shortcuts'
                    ]
                },
            ],
            '/summary/': [
                "2019-summary",
                "2018-summary",
                "2017-summary",
                "2016-summary",
                "internship-month-summary",
                "internship-summary"
            ]
        },
    }
}
