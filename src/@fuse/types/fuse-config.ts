export interface FuseConfig
{
    layout: {
        style: string,
        navigation: {
            position: 'left' | 'right' | 'top' | 'none',
            folded: boolean,
            background: string
        },
        toolbar: {
            position: 'above' | 'above-sticky' | 'below' | 'below-sticky' | 'none',
            background: string
        }
        footer: {
            position: 'above' | 'below' | 'below-sticky' | 'none',
            background: string
        },
        mode: 'fullwidth' | 'boxed'
    };
    customScrollbars: boolean;
    routerAnimation: string;
}
