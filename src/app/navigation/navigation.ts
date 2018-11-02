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
    }
];
