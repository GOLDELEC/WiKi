module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'GOLDELEC WiKi',
            description: 'GOLDELEC WiKi'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'GOLDELEC WiKi',
            description: 'GOLDELEC WiKi'
        }
    },

    themeConfig: {
        logo: '/logo.png',           //导航栏logo
        locales: {
            '/': {
                sidebarDepth: 1,    //生成的侧边栏的索引包含h1和h2
                selectText: '选择语言',
                label: 'English',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
            },
            '/zh/': {
                sidebarDepth: 1,
                selectText: 'Language',
                label: '中文',
                ariaLabel: '选择语言',
                editLinkText: '在GitHub上编辑此页面',
                nav: [
                    {
                        text: '首页',
                        link: '/zh/',
                    },

                    {
                        text: '微型飞行器',
                        items:[
                            {
                                text: '四轴飞行器',
                                items:[
                                    { text: 'AirWii飞行器', link: '/zh/docs/airwii_copter/'},
                                    { text: 'AirWii32飞行器', link: '/zh/docs/airwii32_copter/'}
                                ]
                            },
                            {
                                text: '四轴飞控',
                                items:[
                                    { text: 'AirWii飞控板', link: '/zh/docs/airwii_flight_controller/introduction'},
                                    { text: 'AirWii32飞控板', link: '/zh/docs/airwii32_flight_controller/introduction'}
                                ]
                            },

                            {
                                text: '四轴机架',
                                items:[
                                    { text: '四轴机架Air Wing 90', link: '/zh/docs/air_wing/air_wing_90/'},
                                    { text: '四轴机架Air Wing 116', link: '/zh/docs/air_wing/air_wing_116/'},
                                    { text: '四轴机架Air Wing 130', link: '/zh/docs/air_wing/air_wing_130/'}
                                ]
                            }
                        ]
                    },


                    {
                        text: '智能车',
                        items:[
                            { text: 'AirRover智能车', link: '/zh/docs/air_rover/'},
                        ]
                    },

                    {
                        text: '意创官网',
                        link: 'https://goldelec.com/',
                    },
                    {
                        text: '商城',
                        link: 'https://goldelec.taobao.com/',
                    },
                ],
                displayAllHeaders: true,

                sidebar: {
                    '/zh/docs/airwii_copter/':
                        [
                            {
                                title: 'AirWii飞行器',   // required
                                path: '/zh/docs/airwii_copter/',      // optional, link of the title, which should be an absolute path and must exist
                                collapsable: true, // optional, defaults to true
                                sidebarDepth: 1,    // optional, defaults to 1
                            },
                        ],

                    '/zh/docs/airwii32_copter/':
                        [
                            {
                                title: 'AirWii32飞行器',   // required
                                path: '/zh/docs/airwii32_copter/',      // optional, link of the title, which should be an absolute path and must exist
                                collapsable: true, // optional, defaults to true
                                sidebarDepth: 1,    // optional, defaults to 1
                            },
                        ],

                    '/zh/docs/airwii_flight_controller/':
                        [
                            {
                                title: 'AirWii飞控板',   // required
                                path: '/zh/docs/airwii_flight_controller/introduction',      // optional, link of the title, which should be an absolute path and must exist
                                collapsable: true, // optional, defaults to true
                                sidebarDepth: 1,    // optional, defaults to 1
                                children: [
                                    '/zh/docs/airwii_flight_controller/introduction',
                                    '/zh/docs/airwii_flight_controller/assemble',
                                    '/zh/docs/airwii_flight_controller/upgrade',
                                    '/zh/docs/airwii_flight_controller/config',
                                    '/zh/docs/airwii_flight_controller/app',
                                    '/zh/docs/airwii_flight_controller/protocol',
                                    '/zh/docs/airwii_flight_controller/example',
                                    '/zh/docs/airwii_flight_controller/faq',
                                ]
                            },
                        ],

                    '/zh/docs/airwii32_flight_controller/':
                        [
                            {
                                title: 'AirWii 32飞控板',   // required
                                path: '/zh/docs/airwii32_flight_controller/introduction',      // optional, link of the title, which should be an absolute path and must exist
                                collapsable: true, // optional, defaults to true
                                sidebarDepth: 1,    // optional, defaults to 1
                                children: [
                                    '/zh/docs/airwii32_flight_controller/introduction',
                                    '/zh/docs/airwii32_flight_controller/assemble',
                                    '/zh/docs/airwii32_flight_controller/upgrade',
                                    '/zh/docs/airwii32_flight_controller/config',
                                    '/zh/docs/airwii32_flight_controller/app',
                                    '/zh/docs/airwii32_flight_controller/protocol',
                                    '/zh/docs/airwii32_flight_controller/faq',
                                ]
                            },
                        ],

                    '/zh/docs/air_wing/':
                        [
                            {
                                title: 'Air Wing 四轴机架',   // required
                                path: '/zh/docs/air_wing/air_wing_90/',      // optional, link of the title, which should be an absolute path and must exist
                                collapsable: true, // optional, defaults to true
                                sidebarDepth: 1,    // optional, defaults to 1
                                children: [
                                    '/zh/docs/air_wing/air_wing_90/',
                                    '/zh/docs/air_wing/air_wing_116/',
                                    '/zh/docs/air_wing/air_wing_130/',
                                ]
                            },
                        ],

                    '/zh/docs/air_rover/':
                        [
                            {
                                title: 'AirRover智能车',   // required
                                path: '/zh/docs/air_rover/',      // optional, link of the title, which should be an absolute path and must exist
                                collapsable: true, // optional, defaults to true
                                sidebarDepth: 1,    // optional, defaults to 1
                            },
                        ],
                },
            }
        }
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@zh_assets': '/docs/zh/assets/'
            }
        }
    }
}
