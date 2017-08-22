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
    }
}
