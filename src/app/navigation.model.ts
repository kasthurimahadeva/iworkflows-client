export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'title'   : 'Applications',
                'type'    : 'group',
                'icon'    : 'apps',
                'children': [
                    {
                        'title'   : 'Dashboards',
                        'type'    : 'collapse',
                        'icon'    : 'dashboard',
                        'children': [
                            {
                                'type' : 'item',
                                'title': 'Project',
                                'url'  : '/apps/dashboards/project'
                            }
                        ]
                    },
                    {
                        'title': 'Calendar',
                        'type' : 'item',
                        'icon' : 'today',
                        'url'  : '/apps/calendar'
                    },
                    {
                        'title': 'Mail',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/apps/mail',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'title': 'Chat',
                        'type' : 'item',
                        'icon' : 'chat',
                        'url'  : '/apps/chat',
                        'badge': {
                            'title': 13,
                            'bg'   : '#09d261',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'title': 'File Manager',
                        'type' : 'item',
                        'icon' : 'folder',
                        'url'  : '/apps/file-manager'
                    },
                    {
                        'title': 'Contacts',
                        'type' : 'item',
                        'icon' : 'account_box',
                        'url'  : '/apps/contacts'
                    },
                    {
                        'title': 'To-Do',
                        'type' : 'item',
                        'icon' : 'check_box',
                        'url'  : '/apps/todo',
                        'badge': {
                            'title': 3,
                            'bg'   : '#FF6F00',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'title': 'Scrumboard',
                        'type' : 'item',
                        'icon' : 'assessment',
                        'url'  : '/apps/scrumboard'
                    }
                ]
            },
            {
                'title'   : 'Pages',
                'type'    : 'group',
                'icon'    : 'pages',
                'children': [
                    {
                        'title'   : 'Authentication',
                        'type'    : 'collapse',
                        'icon'    : 'lock',
                        'children': [
                            {
                                'title': 'Login',
                                'type' : 'item',
                                'url'  : '/pages/auth/login'
                            },
                            {
                                'title': 'Login v2',
                                'type' : 'item',
                                'url'  : '/pages/auth/login-2'
                            },
                            {
                                'title': 'Register',
                                'type' : 'item',
                                'url'  : '/pages/auth/register'
                            },
                            {
                                'title': 'Register v2',
                                'type' : 'item',
                                'url'  : '/pages/auth/register-2'
                            },
                            {
                                'title': 'Forgot Password',
                                'type' : 'item',
                                'url'  : '/pages/auth/forgot-password'
                            },
                            {
                                'title': 'Reset Password',
                                'type' : 'item',
                                'url'  : '/pages/auth/reset-password'
                            },
                            {
                                'title': 'Lock Screen',
                                'type' : 'item',
                                'url'  : '/pages/auth/lock'
                            }
                        ]
                    },
                    {
                        'title': 'Coming Soon',
                        'type' : 'item',
                        'icon' : 'alarm',
                        'url'  : '/pages/coming-soon'
                    },
                    {
                        'title'   : 'Errors',
                        'type'    : 'collapse',
                        'icon'    : 'error',
                        'children': [
                            {
                                'title': '404',
                                'type' : 'item',
                                'url'  : '/pages/errors/error-404'
                            },
                            {
                                'title': '500',
                                'type' : 'item',
                                'url'  : '/pages/errors/error-500'
                            }
                        ]
                    },
                    {
                        'title'   : 'Invoice',
                        'type'    : 'collapse',
                        'icon'    : 'receipt',
                        'children': [
                            {
                                'title': 'Modern',
                                'type' : 'item',
                                'url'  : '/pages/invoices/modern'
                            },
                            {
                                'title': 'Compact',
                                'type' : 'item',
                                'url'  : '/pages/invoices/compact'
                            }
                        ]
                    },
                    {
                        'title': 'Maintenance',
                        'type' : 'item',
                        'icon' : 'build',
                        'url'  : '/pages/maintenance'
                    },
                    {
                        'title': 'Profile',
                        'type' : 'item',
                        'icon' : 'person',
                        'url'  : '/pages/profile'
                    },
                    {
                        'title': 'Search',
                        'type' : 'item',
                        'icon' : 'search',
                        'url'  : '/pages/search'
                    }
                ]
            },
            {
                'title'   : 'User Interface',
                'type'    : 'group',
                'icon'    : 'web',
                'children': [
                    {
                        'title': 'Forms',
                        'type' : 'item',
                        'icon' : 'web_asset',
                        'url'  : '/ui/forms'
                    },
                    {
                        'title': 'Icons',
                        'type' : 'item',
                        'icon' : 'photo',
                        'url'  : '/ui/icons'
                    },
                    {
                        'title': 'Typography',
                        'type' : 'item',
                        'icon' : 'text_fields',
                        'url'  : '/ui/typography'
                    },
                    {
                        'title': 'Helper Classes',
                        'type' : 'item',
                        'icon' : 'help',
                        'url'  : '/ui/helper-classes'
                    },
                    {
                        'title'   : 'Page Layouts',
                        'type'    : 'collapse',
                        'icon'    : 'view_quilt',
                        'children': [
                            {
                                'title'   : 'Carded',
                                'type'    : 'collapse',
                                'children': [
                                    {
                                        'title': 'Full Width',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/carded/full-width'
                                    },
                                    {
                                        'title': 'Full Width 2',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/carded/full-width-2'
                                    },
                                    {
                                        'title': 'Left Sidenav',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/carded/left-sidenav'
                                    },
                                    {
                                        'title': 'Left Sidenav 2',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/carded/left-sidenav-2'
                                    },
                                    {
                                        'title': 'Right Sidenav',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/carded/right-sidenav'
                                    },
                                    {
                                        'title': 'Right Sidenav 2',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/carded/right-sidenav-2'
                                    }
                                ]
                            },
                            {
                                'title'   : 'Simple',
                                'type'    : 'collapse',
                                'children': [
                                    {
                                        'title': 'Full Width',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/simple/full-width'
                                    },
                                    {
                                        'title': 'Left Sidenav',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/simple/left-sidenav'
                                    },
                                    {
                                        'title': 'Left Sidenav 2',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/simple/left-sidenav-2'
                                    },
                                    {
                                        'title': 'Left Sidenav 3',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/simple/left-sidenav-3'
                                    },
                                    {
                                        'title': 'Right Sidenav',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/simple/right-sidenav'
                                    },
                                    {
                                        'title': 'Right Sidenav 2',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/simple/right-sidenav-2'
                                    },
                                    {
                                        'title': 'Right Sidenav 3',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/simple/right-sidenav-3'
                                    },
                                    {
                                        'title': 'Tabbed',
                                        'type' : 'item',
                                        'url'  : '/ui/page-layouts/simple/tabbed'
                                    }
                                ]
                            },
                            {
                                'title': 'Blank',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/blank'
                            }
                        ]
                    },
                    {
                        'title': 'Colors',
                        'type' : 'item',
                        'icon' : 'color_lens',
                        'url'  : '/ui/colors'
                    }
                ]
            },
            {
                'title'   : 'Services',
                'type'    : 'group',
                'icon'    : 'settings',
                'children': [
                    {
                        'title': 'Config',
                        'type' : 'item',
                        'icon' : 'settings',
                        'url'  : '/services/config'
                    },
                    {
                        'title': 'Splash Screen',
                        'type' : 'item',
                        'icon' : 'settings',
                        'url'  : '/services/splash-screen'
                    }
                ]
            },
            {
                'title'   : 'Components',
                'type'    : 'group',
                'icon'    : 'settings_input_component',
                'children': [
                    {
                        'title'   : 'Angular Material Elements',
                        'type'    : 'collapse',
                        'icon'    : 'layers',
                        'children': [
                            {
                                'title'   : 'Form Controls',
                                'type'    : 'group',
                                'children': [
                                    {
                                        'title': 'Autocomplete',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/autocomplete'
                                    },
                                    {
                                        'title': 'Checkbox',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/checkbox'
                                    },
                                    {
                                        'title': 'Datepicker',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/datepicker'
                                    },
                                    {
                                        'title': 'Input',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/input'
                                    },
                                    {
                                        'title': 'Radio button',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/radio-button'
                                    },
                                    {
                                        'title': 'Select',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/select'
                                    },
                                    {
                                        'title': 'Slider',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/slider'
                                    },
                                    {
                                        'title': 'Slide toggle',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/slide-toggle'
                                    }
                                ]
                            },
                            {
                                'title'   : 'Navigation',
                                'type'    : 'group',
                                'children': [
                                    {
                                        'title': 'Menu',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/menu'
                                    },
                                    {
                                        'title': 'Sidenav',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/sidenav'
                                    },
                                    {
                                        'title': 'Toolbar',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/toolbar'
                                    }
                                ]
                            },
                            {
                                'title'   : 'Layout',
                                'type'    : 'group',
                                'children': [
                                    {
                                        'title': 'List',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/list'
                                    },
                                    {
                                        'title': 'Grid list',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/grid-list'
                                    },
                                    {
                                        'title': 'Card',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/card'
                                    },
                                    {
                                        'title': 'Stepper',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/stepper'
                                    },
                                    {
                                        'title': 'Tabs',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/tabs'
                                    },
                                    {
                                        'title': 'Expansion Panel',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/expansion-panel'
                                    }
                                ]
                            },
                            {
                                'title'   : 'Buttons & Indicators',
                                'type'    : 'group',
                                'children': [
                                    {
                                        'title': 'Button',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/button'
                                    },
                                    {
                                        'title': 'Button toggle',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/button-toggle'
                                    },
                                    {
                                        'title': 'Chips',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/chips'
                                    },
                                    {
                                        'title': 'Icon',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/icon'
                                    },
                                    {
                                        'title': 'Progress spinner',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/progress-spinner'
                                    },
                                    {
                                        'title': 'Progress bar',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/progress-bar'
                                    }
                                ]
                            },
                            {
                                'title'   : 'Popups & Modals',
                                'type'    : 'group',
                                'children': [
                                    {
                                        'title': 'Dialog',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/dialog'
                                    },
                                    {
                                        'title': 'Tooltip',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/tooltip'
                                    },
                                    {
                                        'title': 'Snackbar',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/snackbar'
                                    }
                                ]
                            },
                            {
                                'title'   : 'Data table',
                                'type'    : 'group',
                                'children': [
                                    {
                                        'title': 'Table',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/data-table'
                                    },
                                    {
                                        'title': 'Sort header',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/sort-header'
                                    },
                                    {
                                        'title': 'Paginator',
                                        'type' : 'item',
                                        'url'  : '/components/angular-material/paginator'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'title': 'Countdown',
                        'type' : 'item',
                        'icon' : 'settings_input_component',
                        'url'  : '/components/countdown'
                    },
                    {
                        'title': 'Highlight.js',
                        'type' : 'item',
                        'icon' : 'settings_input_component',
                        'url'  : '/components/highlightjs'
                    },
                    {
                        'title': 'Material Color Picker',
                        'type' : 'item',
                        'icon' : 'settings_input_component',
                        'url'  : '/components/material-color-picker'
                    },
                    {
                        'title': 'Navigation',
                        'type' : 'item',
                        'icon' : 'settings_input_component',
                        'url'  : '/components/navigation'
                    },
                    {
                        'title': 'Price Tables',
                        'type' : 'item',
                        'icon' : 'settings_input_component',
                        'url'  : '/components/price-tables'
                    },
                    {
                        'title': 'Search Bar',
                        'type' : 'item',
                        'icon' : 'settings_input_component',
                        'url'  : '/components/search-bar'
                    },
                    {
                        'title': 'Shortcuts',
                        'type' : 'item',
                        'icon' : 'settings_input_component',
                        'url'  : '/components/shortcuts'
                    },
                    {
                        'title': 'Widget',
                        'type' : 'item',
                        'icon' : 'settings_input_component',
                        'url'  : '/components/widget'
                    }
                ]
            },
            {
                'title'   : '3rd Party components',
                'type'    : 'group',
                'icon'    : 'settings_input_component',
                'children': [
                    {
                        'title'   : 'Datatables',
                        'type'    : 'collapse',
                        'icon'    : 'border_all',
                        'children': [
                            {
                                'title': 'ngx-datatable',
                                'type' : 'item',
                                'url'  : '/components-third-party/datatables/ngx-datatable'
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
