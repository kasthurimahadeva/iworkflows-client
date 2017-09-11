export class FuseNavigation
{
    public verticalNavItems: any[];
    public horizontalNavItems: any[];

    constructor()
    {
        this.verticalNavItems = [
            {
                'title': 'APPS',
                'type' : 'subheader'
            },
            {
                'title': 'Sample',
                'type' : 'nav-item',
                'icon' : 'email',
                'url'  : '/sample',
                'badge': {
                    'title': 25,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            }
        ];

        this.horizontalNavItems = [
            {
                'title'   : 'Apps',
                'icon'    : 'apps',
                'type'    : 'nav-collapse',
                'children': [
                    {
                        'title': 'Sample',
                        'type' : 'nav-item',
                        'icon' : 'email',
                        'url'  : '/sample',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    }
                ]
            }
        ];
    }
}
