export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'title': 'Applications',
                'type' : 'group',
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
