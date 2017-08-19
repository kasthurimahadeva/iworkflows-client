import { sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild, state } from '@angular/animations';

const query = (s, a, o = {optional: true}) => q(s, a, o);

export class Animations
{
    public static slideInOut = trigger('slideInOut', [
        state('0', style({
            height : '0px',
            display: 'none'
        })),
        state('1', style({
            height : '*',
            display: 'block'
        })),
        transition('1 => 0', animate('300ms ease-out')),
        transition('0 => 1', animate('300ms ease-in'))
    ]);

    public static slideInLeft = trigger('slideInLeft', [
        state('void', style({
            transform: 'translateX(-100%)',
            display  : 'none'
        })),
        state('*', style({
            transform: 'translateX(0)',
            display  : 'flex'
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ]);

    public static slideInRight = trigger('slideInRight', [
        state('void', style({
            transform: 'translateX(100%)',
            display  : 'none'
        })),
        state('*', style({
            transform: 'translateX(0)',
            display  : 'flex'
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ]);

    public static slideInTop = trigger('slideInTop', [
        state('void', style({
            transform: 'translateY(-100%)',
            display  : 'none'
        })),
        state('*', style({
            transform: 'translateY(0)',
            display  : 'flex'
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ]);

    public static slideInBottom = trigger('slideInBottom', [
        state('void',
            style({
                transform: 'translateY(100%)',
                display  : 'none'
            })),
        state('*', style({
            transform: 'translateY(0)',
            display  : 'flex'
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ]);

    public static routerTransition = trigger('routerTransition', [

        transition('* => *', [
            query(':enter, :leave', style({
                position: 'absolute',
                height  : '100vh'
            })),
            query(':enter', style({
                transform: 'translateY(100%)',
                opacity  : 0
            })),
            sequence([
                group([
                    query(':leave', [
                        style({
                            transform: 'translateY(0)',
                            opacity  : 1
                        }),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateY(-100%)',
                                opacity  : 0
                            }))
                    ]),
                    query(':enter', [
                        style({transform: 'translateY(100%)'}),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateY(0%)',
                                opacity  : 1
                            }))
                    ])
                ]),
                query(':leave', animateChild()),
                query(':enter', animateChild())
            ])
        ])
    ]);
}
