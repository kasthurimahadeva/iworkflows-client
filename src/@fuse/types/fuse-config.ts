export interface FuseConfig
{
    layout: {
        style: string,
        width: 'fullwidth' | 'boxed',
        navbar: {
            hidden: boolean,
            folded: boolean,
            position: 'left' | 'right' | 'top',
            background: string
        },
        toolbar: {
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-sticky' | 'above-fixed' | 'below' | 'below-static' | 'below-sticky' | 'below-fixed',
            background: string
        }
        footer: {
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-sticky' | 'above-fixed' | 'below' | 'below-static' | 'below-sticky' | 'below-fixed',
            background: string
        }
    };
    customScrollbars: boolean;
    routerAnimation: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideRight' | 'slideLeft' | 'none';
}
