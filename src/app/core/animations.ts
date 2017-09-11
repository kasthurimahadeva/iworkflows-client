import { sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild, state } from '@angular/animations';

// const query = (s, a, o = {optional: true}) => q(s, a, o);

export class Animations
{
    public static fadeInOut = trigger('fadeInOut', [
        state('0', style({
            display: 'none',
            opacity: 0
        })),
        state('1', style({
            display: 'block',
            opacity: 1
        })),
        transition('1 => 0', animate('300ms ease-out')),
        transition('0 => 1', animate('300ms ease-in'))
    ]);

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

    public static routerTransitionLeft = trigger('routerTransitionLeft', [

        transition('* => *', [
            query('fuse-content > :enter, fuse-content > :leave', [
                style({
                    position: 'absolute',
                    top     : 0,
                    bottom  : 0,
                    left    : 0,
                    right   : 0
                })
            ], {optional: true}),
            query('fuse-content > :enter', [
                style({
                    transform: 'translateX(100%)',
                    opacity  : 0
                })
            ], {optional: true}),
            sequence([
                group([
                    query('fuse-content > :leave', [
                        style({
                            transform: 'translateX(0)',
                            opacity  : 1
                        }),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateX(-100%)',
                                opacity  : 0
                            }))
                    ], {optional: true}),
                    query('fuse-content > :enter', [
                        style({transform: 'translateX(100%)'}),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateX(0%)',
                                opacity  : 1
                            }))
                    ], {optional: true})
                ]),
                query('fuse-content > :leave', animateChild(), {optional: true}),
                query('fuse-content > :enter', animateChild(), {optional: true})
            ])
        ])
    ]);

    public static routerTransitionRight = trigger('routerTransitionRight', [

        transition('* => *', [
            query('fuse-content > :enter, fuse-content > :leave', [
                style({
                    position: 'absolute',
                    top     : 0,
                    bottom  : 0,
                    left    : 0,
                    right   : 0
                })
            ], {optional: true}),
            query('fuse-content > :enter', [
                style({
                    transform: 'translateX(-100%)',
                    opacity  : 0
                })
            ], {optional: true}),
            sequence([
                group([
                    query('fuse-content > :leave', [
                        style({
                            transform: 'translateX(0)',
                            opacity  : 1
                        }),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateX(100%)',
                                opacity  : 0
                            }))
                    ], {optional: true}),
                    query('fuse-content > :enter', [
                        style({transform: 'translateX(-100%)'}),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateX(0%)',
                                opacity  : 1
                            }))
                    ], {optional: true})
                ]),
                query('fuse-content > :leave', animateChild(), {optional: true}),
                query('fuse-content > :enter', animateChild(), {optional: true})
            ])
        ])
    ]);

    public static routerTransitionUp = trigger('routerTransitionUp', [

        transition('* => *', [
            query('fuse-content > :enter, fuse-content > :leave', [
                style({
                    position: 'absolute',
                    top     : 0,
                    bottom  : 0,
                    left    : 0,
                    right   : 0
                })
            ], {optional: true}),
            query('fuse-content > :enter', [
                style({
                    transform: 'translateY(100%)',
                    opacity  : 0
                })
            ], {optional: true}),
            sequence([
                group([
                    query('fuse-content > :leave', [
                        style({
                            transform: 'translateY(0)',
                            opacity  : 1
                        }),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateY(-100%)',
                                opacity  : 0
                            }))
                    ], {optional: true}),
                    query('fuse-content > :enter', [
                        style({transform: 'translateY(100%)'}),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateY(0%)',
                                opacity  : 1
                            }))
                    ], {optional: true})
                ]),
                query('fuse-content > :leave', animateChild(), {optional: true}),
                query('fuse-content > :enter', animateChild(), {optional: true})
            ])
        ])
    ]);

    public static routerTransitionDown = trigger('routerTransitionDown', [

        transition('* => *', [
            query('fuse-content > :enter, fuse-content > :leave', [
                style({
                    position: 'absolute',
                    top     : 0,
                    bottom  : 0,
                    left    : 0,
                    right   : 0
                })
            ], {optional: true}),
            query('fuse-content > :enter', [
                style({
                    transform: 'translateY(-100%)',
                    opacity  : 0
                })
            ], {optional: true}),
            sequence([
                group([
                    query('fuse-content > :leave', [
                        style({
                            transform: 'translateY(0)',
                            opacity  : 1
                        }),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateY(100%)',
                                opacity  : 0
                            }))
                    ], {optional: true}),
                    query('fuse-content > :enter', [
                        style({transform: 'translateY(-100%)'}),
                        animate('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            style({
                                transform: 'translateY(0%)',
                                opacity  : 1
                            }))
                    ], {optional: true})
                ]),
                query('fuse-content > :leave', animateChild(), {optional: true}),
                query('fuse-content > :enter', animateChild(), {optional: true})
            ])
        ])
    ]);

    public static routerTransitionFade = trigger('routerTransitionFade', [

        transition('* => *', [

            query('fuse-content > :enter, fuse-content > :leave ', [
                style({
                    position: 'absolute',
                    top     : 0,
                    bottom  : 0,
                    left    : 0,
                    right   : 0
                })
            ], {optional: true}),
            query('fuse-content > :enter', [
                style({
                    opacity: 0
                })
            ], {optional: true}),
            // sequence([
                query('fuse-content > :leave', [
                    style({
                        opacity: 1
                    }),
                    animate('300ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                        style({
                            opacity: 0
                        }))
                ], {optional: true}),
                query('fuse-content > :enter', [
                    style({
                        opacity: 0
                    }),
                    animate('300ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                        style({
                            opacity: 1
                        }))
                ], {optional: true}),
            // ]),
            query('fuse-content > :enter', animateChild(), {optional: true}),
            query('fuse-content > :leave', animateChild(), {optional: true})
        ])
    ]);
}
