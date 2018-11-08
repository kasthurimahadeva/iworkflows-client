import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                translate: 'NAV.DASHBOARD',
                icon: 'dashboard',
                url: '/dashboard'
            },
            {
                id: 'to-do',
                title: 'To-Do',
                translate: 'NAV.TODO',
                type: 'item',
                icon: 'check_box',
                url: '/todo',
                badge: {
                    title: '3',
                    bg: '#FF6F00',
                    fg: '#FFFFFF'
                }
            },
            {
                id: 'task',
                title: 'Task',
                translate: 'NAV.TASK',
                type: 'item',
                icon: 'assignment',
                url: '/tasks',
            },
            {
                id: 'test',
                title: 'Test',
                translate: 'NAV.TEST',
                type: 'item',
                icon: 'title',
                url: '/test',
            }
        ]
    },
    {
        id: 'forms',
        title: 'Forms',
        translate: 'NAV.FORMS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'leave-form',
                title: 'Leave form',
                translate: 'NAV.LEAVE FORM',
                type: 'item',
                icon: 'web_asset',
                url: '/forms/leave-form',
            }
        ]
    },
    {
        id: 'settings',
        title: 'Settings',
        translate: 'NAV.SETTINGS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'connect',
                title: 'Connect',
                translate: 'NAV.CONNECT',
                type: 'item',
                icon: 'cached',
                url: '/connect',
            }
        ]
    },
    {
        id      : 'angular-material-elements',
        title   : 'Angular Material Elements',
        type    : 'group',
        icon    : 'layers',
        children: [
            {
                id      : 'form-controls',
                title   : 'Form Controls',
                type    : 'collapsable',
                icon    : 'layers',
                children: [
                    {
                        id   : 'autocomplete',
                        title: 'Autocomplete',
                        type : 'item',
                        url  : '/angular-material-elements/autocomplete'
                    },
                    {
                        id   : 'checkbox',
                        title: 'Checkbox',
                        type : 'item',
                        url  : '/angular-material-elements/checkbox'
                    },
                    {
                        id   : 'datepicker',
                        title: 'Datepicker',
                        type : 'item',
                        url  : '/angular-material-elements/datepicker'
                    },
                    {
                        id   : 'form-field',
                        title: 'Form field',
                        type : 'item',
                        url  : '/angular-material-elements/form-field'
                    },
                    {
                        id   : 'input',
                        title: 'Input',
                        type : 'item',
                        url  : '/angular-material-elements/input'
                    },
                    {
                        id   : 'radio-button',
                        title: 'Radio button',
                        type : 'item',
                        url  : '/angular-material-elements/radio-button'
                    },
                    {
                        id   : 'select',
                        title: 'Select',
                        type : 'item',
                        url  : '/angular-material-elements/select'
                    },
                    {
                        id   : 'slider',
                        title: 'Slider',
                        type : 'item',
                        url  : '/angular-material-elements/slider'
                    },
                    {
                        id   : 'slide-toggle',
                        title: 'Slide toggle',
                        type : 'item',
                        url  : '/angular-material-elements/slide-toggle'
                    }
                ]
            },
            {
                id      : 'navigation',
                title   : 'Navigation',
                type    : 'collapsable',
                icon    : 'layers',
                children: [
                    {
                        id   : 'menu',
                        title: 'Menu',
                        type : 'item',
                        url  : '/angular-material-elements/menu'
                    },
                    {
                        id   : 'sidenav',
                        title: 'Sidebar',
                        type : 'item',
                        url  : '/angular-material-elements/sidenav'
                    },
                    {
                        id   : 'toolbar',
                        title: 'Toolbar',
                        type : 'item',
                        url  : '/angular-material-elements/toolbar'
                    }
                ]
            },
            {
                id      : 'layout',
                title   : 'Layout',
                type    : 'collapsable',
                icon    : 'layers',
                children: [
                    {
                        id   : 'badge',
                        title: 'Badge',
                        type : 'item',
                        url  : '/angular-material-elements/badge'
                    },
                    {
                        id   : 'bottom-sheet',
                        title: 'Bottom Sheet',
                        type : 'item',
                        url  : '/angular-material-elements/bottom-sheet'
                    },
                    {
                        id   : 'card',
                        title: 'Card',
                        type : 'item',
                        url  : '/angular-material-elements/card'
                    },
                    {
                        id   : 'divider',
                        title: 'Divider',
                        type : 'item',
                        url  : '/angular-material-elements/divider'
                    },
                    {
                        id   : 'elevation',
                        title: 'Elevation',
                        type : 'item',
                        url  : '/angular-material-elements/elevation'
                    },
                    {
                        id   : 'expansion-panel',
                        title: 'Expansion Panel',
                        type : 'item',
                        url  : '/angular-material-elements/expansion-panel'
                    },
                    {
                        id   : 'grid-list',
                        title: 'Grid list',
                        type : 'item',
                        url  : '/angular-material-elements/grid-list'
                    },
                    {
                        id   : 'list',
                        title: 'List',
                        type : 'item',
                        url  : '/angular-material-elements/list'
                    },
                    {
                        id   : 'stepper',
                        title: 'Stepper',
                        type : 'item',
                        url  : '/angular-material-elements/stepper'
                    },
                    {
                        id   : 'tabs',
                        title: 'Tabs',
                        type : 'item',
                        url  : '/angular-material-elements/tabs'
                    },
                    {
                        id   : 'tree',
                        title: 'Tree',
                        type : 'item',
                        url  : '/angular-material-elements/tree'
                    }
                ]
            },
            {
                id      : 'buttons-indicators',
                title   : 'Buttons & Indicators',
                type    : 'collapsable',
                icon    : 'layers',
                children: [
                    {
                        id   : 'button',
                        title: 'Button',
                        type : 'item',
                        url  : '/angular-material-elements/button'
                    },
                    {
                        id   : 'button-toggle',
                        title: 'Button toggle',
                        type : 'item',
                        url  : '/angular-material-elements/button-toggle'
                    },
                    {
                        id   : 'chips',
                        title: 'Chips',
                        type : 'item',
                        url  : '/angular-material-elements/chips'
                    },
                    {
                        id   : 'icon',
                        title: 'icon',
                        type : 'item',
                        url  : '/angular-material-elements/icon'
                    },
                    {
                        id   : 'progress-spinner',
                        title: 'Progress spinner',
                        type : 'item',
                        url  : '/angular-material-elements/progress-spinner'
                    },
                    {
                        id   : 'progress-bar',
                        title: 'Progress bar',
                        type : 'item',
                        url  : '/angular-material-elements/progress-bar'
                    },
                    {
                        id   : 'ripples',
                        title: 'Ripples',
                        type : 'item',
                        url  : '/angular-material-elements/ripples'
                    }
                ]
            },
            {
                id      : 'popups-modals',
                title   : 'Popups & Modals',
                type    : 'collapsable',
                icon    : 'layers',
                children: [
                    {
                        id   : 'dialog',
                        title: 'Dialog',
                        type : 'item',
                        url  : '/angular-material-elements/dialog'
                    },
                    {
                        id   : 'snackbar',
                        title: 'Snackbar',
                        type : 'item',
                        url  : '/angular-material-elements/snackbar'
                    },
                    {
                        id   : 'tooltip',
                        title: 'Tooltip',
                        type : 'item',
                        url  : '/angular-material-elements/tooltip'
                    }
                ]
            },
            {
                id      : 'data-table',
                title   : 'Data table',
                type    : 'collapsable',
                icon    : 'layers',
                children: [
                    {
                        id   : 'paginator',
                        title: 'Paginator',
                        type : 'item',
                        url  : '/angular-material-elements/paginator'
                    },
                    {
                        id   : 'sort-header',
                        title: 'Sort header',
                        type : 'item',
                        url  : '/angular-material-elements/sort-header'
                    },
                    {
                        id   : 'table',
                        title: 'Table',
                        type : 'item',
                        url  : '/angular-material-elements/table'
                    }
                ]
            }
        ]
    }
];
