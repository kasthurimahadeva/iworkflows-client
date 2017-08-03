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
                        'url'  : '/pages/auth/login-2'
                    },
                    {
                        'title': 'Register',
                        'type' : 'nav-item',
                        'url'  : '/pages/auth/register'
                    },
                    {
                        'title': 'Register v2',
                        'type' : 'nav-item',
                        'url'  : '/pages/auth/register-2'
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
                        'url'  : '/pages/auth/lock'
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
                        'url'  : '/pages/errors/error-404'
                    },
                    {
                        'title': '500',
                        'type' : 'nav-item',
                        'url'  : '/pages/errors/error-500'
                    }
                ]
            },
            {
                'title'   : 'Invoice',
                'type'    : 'nav-collapse',
                'icon'    : 'receipt',
                'children': [
                    {
                        'title': 'Modern',
                        'type' : 'nav-item',
                        'url'  : '/pages/invoices/modern'
                    },
                    {
                        'title': 'Compact',
                        'type' : 'nav-item',
                        'url'  : '/pages/invoices/compact'
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
                'icon' : 'person',
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
            /*{
                'title'   : 'Elements',
                'type'    : 'nav-collapse',
                'icon'    : 'layers',
                'children': [
                    {
                        'title': 'Alerts',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/alerts'
                    },
                    {
                        'title': 'Badges',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/badges'
                    },
                    {
                        'title': 'Breadcrumb',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/breadcrumb'
                    },
                    {
                        'title': 'Buttons',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/buttons'
                    },
                    {
                        'title': 'Button Group',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/button-group'
                    },
                    {
                        'title': 'Cards',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/cards'
                    },
                    {
                        'title': 'Dropdowns',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/dropdowns'
                    },
                    {
                        'title': 'Forms',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/forms'
                    },
                    {
                        'title': 'Input Group',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/input-group'
                    },
                    {
                        'title': 'Jumbotron',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/jumbotron'
                    },
                    {
                        'title': 'List Group',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/list-group'
                    },
                    {
                        'title': 'Navs',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/navs'
                    },
                    {
                        'title': 'Navbar',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/navbar'
                    },
                    {
                        'title': 'Pagination',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/pagination'
                    },
                    {
                        'title': 'Progress',
                        'type' : 'nav-item',
                        'url'  : '/ui/elements/progress'
                    }
                ]
            },*/
            {
                'title': 'Icons',
                'type' : 'nav-item',
                'icon' : 'photo',
                'url'  : '/ui/icons'
            },
            {
                'title': 'Typography',
                'type' : 'nav-item',
                'icon' : 'text_fields',
                'url'  : '/ui/typography'
            },
            {
                'title': 'Helper Classes',
                'type' : 'nav-item',
                'icon' : 'help',
                'url'  : '/ui/helper-classes'
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
                                'title': 'Right Sidenav 2',
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
                                'title': 'Left Sidenav',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/left-sidenav'
                            },
                            {
                                'title': 'Left Sidenav 2',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/left-sidenav-2'
                            },
                            {
                                'title': 'Left Sidenav 3',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/left-sidenav-3'
                            },
                            {
                                'title': 'Right Sidenav',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/right-sidenav'
                            },
                            {
                                'title': 'Right Sidenav 2',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/right-sidenav-2'
                            },
                            {
                                'title': 'Right Sidenav 3',
                                'type' : 'nav-item',
                                'url'  : '/ui/page-layouts/simple/right-sidenav-3'
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
                'url'  : '/ui/colors'
            },
            {
                'title': 'COMPONENTS',
                'type' : 'subheader'
            },
            {
                'title'   : 'Datatables',
                'type'    : 'nav-collapse',
                'icon'    : 'border_all',
                'children': [
                    {
                        'title': 'ngx-datatable',
                        'type' : 'nav-item',
                        'url'  : '/components/datatables/ngx-datatable'
                    }
                ]
            },
        ];
    }
}
