export class FuseNavigation
{
    public items: any[];

    constructor()
    {
        this.items = [
            {
                'title': 'APPS',
                'type' : 'subheader'
            },
            {
                'title'   : 'Dashboards',
                'type'    : 'nav-collapse',
                'icon'    : 'dashboard',
                'children': [
                    {
                        'type' : 'nav-item',
                        'title': 'Project',
                        'url'  : '/apps/dashboards/project'
                    },
                    {
                        'type' : 'nav-item',
                        'title': 'Server',
                        'url'  : '/apps/dashboards/server'
                    }
                ]
            },
            {
                'title': 'Calendar',
                'type' : 'nav-item',
                'icon' : 'today',
                'url'  : '/apps/calendar'
            },
            {
                'title'   : 'Ecommerce',
                'type'    : 'nav-collapse',
                'icon'    : 'shopping_cart',
                'children': [
                    {
                        'title': 'Products',
                        'type' : 'nav-item',
                        'url'  : '/apps/e-commerce/products'
                    },
                    {
                        'title': 'Product',
                        'type' : 'nav-item',
                        'url'  : '/apps/e-commerce/product'
                    },
                    {
                        'title': 'Orders',
                        'type' : 'nav-item',
                        'url'  : '/apps/e-commerce/orders'
                    }
                ]
            },
            {
                'title': 'Mail',
                'type' : 'nav-item',
                'icon' : 'email',
                'url'  : '/apps/mail'
            },
            {
                'title': 'Chat',
                'type' : 'nav-item',
                'icon' : 'chat',
                'url'  : '/apps/chat'
            },
            {
                'title': 'File Manager',
                'type' : 'nav-item',
                'icon' : 'folder',
                'url'  : '/apps/file-manager'
            },
            {
                'title': 'Contacts',
                'type' : 'nav-item',
                'icon' : 'account_box',
                'url'  : '/apps/contacts'
            },
            {
                'title': 'To-Do',
                'type' : 'nav-item',
                'icon' : 'checkbox_cricle',
                'url'  : '/apps/todo'
            },
            {
                'title': 'PAGES',
                'type' : 'subheader'
            },
            {
                'title'   : 'Authentication',
                'type'    : 'nav-collapse',
                'icon'    : 'lock',
                'children': [
                    {
                        'title': 'Login',
                        'type' : 'nav-item',
                        'url'  : '/pages/auth/login'
                    },
                    {
                        'title': 'Login v2',
                        'type' : 'nav-item',
                        'url'  : '/pages/auth/login-v2'
                    },
                    {
                        'title': 'Register',
                        'type' : 'nav-item',
                        'url'  : '/pages/auth/register'
                    },
                    {
                        'title': 'Register v2',
                        'type' : 'nav-item',
                        'url'  : '/pages/auth/register-v2'
                    },
                    {
                        'title': 'Forgot Password',
                        'type' : 'nav-item',
                        'url'  : '/pages/auth/forgot-password'
                    },
                    {
                        'title': 'Reset Password',
                        'type' : 'nav-item',
                        'url'  : '/pages/auth/reset-password'
                    },
                    {
                        'title': 'Lock Screen',
                        'type' : 'nav-item',
                        'url'  : '/pages/auth/lock-screen'
                    }
                ]
            },
            {
                'title': 'Coming Soon',
                'type' : 'nav-item',
                'icon' : 'alarm',
                'url'  : '/pages/coming-soon'
            },
            {
                'title'   : 'Errors',
                'type'    : 'nav-collapse',
                'icon'    : 'error',
                'children': [
                    {
                        'title': '404',
                        'type' : 'nav-item',
                        'url'  : '/pages/errors/404'
                    },
                    {
                        'title': '500',
                        'type' : 'nav-item',
                        'url'  : '/pages/errors/500'
                    }
                ]
            },
            {
                'title': 'Maintenance',
                'type' : 'nav-item',
                'icon' : 'build',
                'url'  : '/pages/maintenance'
            },
            {
                'title': 'Profile',
                'type' : 'nav-item',
                'icon' : 'account',
                'url'  : '/pages/profile'
            },
            {
                'title': 'Search',
                'type' : 'nav-item',
                'icon' : 'search',
                'url'  : '/pages/search'
            },
            {
                'title': 'USER INTERFACE',
                'type' : 'subheader'
            },
            {
                'title'   : 'Elements',
                'type'    : 'nav-collapse',
                'icon'    : 'layers',
                'children': [
                    {
                        'title': 'Alerts',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/alerts'
                    },
                    {
                        'title': 'Badges',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/badges'
                    },
                    {
                        'title': 'Breadcrumb',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/breadcrumb'
                    },
                    {
                        'title': 'Buttons',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/buttons'
                    },
                    {
                        'title': 'Button Group',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/button-group'
                    },
                    {
                        'title': 'Cards',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/cards'
                    },
                    {
                        'title': 'Dropdowns',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/dropdowns'
                    },
                    {
                        'title': 'Forms',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/forms'
                    },
                    {
                        'title': 'Input Group',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/input-group'
                    },
                    {
                        'title': 'Jumbotron',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/jumbotron'
                    },
                    {
                        'title': 'List Group',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/list-group'
                    },
                    {
                        'title': 'Navs',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/navs'
                    },
                    {
                        'title': 'Navbar',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/navbar'
                    },
                    {
                        'title': 'Pagination',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/pagination'
                    },
                    {
                        'title': 'Progress',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/elements/progress'
                    }
                ]
            },
            {
                'title'   : 'Tables',
                'type'    : 'nav-collapse',
                'icon'    : 'border_all',
                'children': [
                    {
                        'title': 'Simple Table',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/tables/simple-table'
                    },
                    {
                        'title': 'Data Table',
                        'type' : 'nav-item',
                        'url'  : '/user-interface/tables/data-table'
                    }
                ]
            },
            {
                'title'   : 'Page Layouts',
                'type'    : 'nav-collapse',
                'icon'    : 'view_quilt',
                'children': [
                    {
                        'title'   : 'Carded',
                        'type'    : 'nav-collapse',
                        'children': [
                            {
                                'title': 'Full Width',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/carded/full-width'
                            },
                            {
                                'title': 'Full Width 2',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/carded/full-width-2'
                            },
                            {
                                'title': 'Left Sidenav',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/carded/left-sidenav'
                            },
                            {
                                'title': 'Left Sidenav 2',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/carded/left-sidenav-2'
                            },
                            {
                                'title': 'Right Sidenav',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/carded/right-sidenav'
                            },
                            {
                                'title': 'Right Sidenav',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/carded/right-sidenav-2'
                            }
                        ]
                    },
                    {
                        'title'   : 'Simple',
                        'type'    : 'nav-collapse',
                        'children': [
                            {
                                'title': 'Full Width',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/full-width'
                            },
                            {
                                'title': 'Left Sidebar',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/left-sidebar'
                            },
                            {
                                'title': 'Left Sidebar Inner',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/left-sidebar-inner'
                            },
                            {
                                'title': 'Left Sidebar Floating',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/left-sidebar-floating'
                            },
                            {
                                'title': 'Right Sidebar',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/right-sidebar'
                            },
                            {
                                'title': 'Right Sidebar Inner',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/sidebar-inner'
                            },
                            {
                                'title': 'Right Sidebar Floating',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/right-sidebar-floating'
                            },
                            {
                                'title': 'Tabbed',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/tabbed'
                            }
                        ]
                    },
                    {
                        'title': 'Blank',
                        'type' : 'nav-item',
                        'url'  : '/ui/page-layouts/blank'
                    }
                ]
            },
            {
                'title': 'Colors',
                'type' : 'nav-item',
                'icon' : 'color_lens',
                'url'  : '/user-interface/colors'
            },
            {
                'title': 'COMPONENTS',
                'type' : 'subheader'
            },
            {
                'title'   : 'Charts',
                'type'    : 'nav-collapse',
                'icon'    : 'poll',
                'children': [
                    {
                        'title': 'nvD3',
                        'type' : 'nav-item',
                        'url'  : '/components/charts/nvd3'
                    }
                ]
            },
            {
                'title': 'Collapse',
                'type' : 'nav-item',
                'icon' : 'add_box',
                'url'  : '/components/collapse'
            },
            {
                'title': 'Modal',
                'type' : 'nav-item',
                'icon' : 'picture_in_picture',
                'url'  : '/components/modal'
            },
            {
                'title': 'Popovers',
                'type' : 'nav-item',
                'icon' : 'chat_buble',
                'url'  : '/components/popovers'
            },
            {
                'title': 'Snackbar',
                'type' : 'nav-item',
                'icon' : 'call_to_action',
                'url'  : '/components/snackbar'
            },
            {
                'title': 'Tooltips',
                'type' : 'nav-item',
                'icon' : 'live_help',
                'url'  : '/components/tooltips'
            }
        ];
    }
}
