export class AnalyticsDashboardDb
{
    public static widgets = {
        /*widget2: {
            overallGrowthPercentage: 17,
            overallGrowthTrend     : 'decrease',
            averageDailyPercentage : 28,
            averageDailyTrend      : 'increase'
        },*/
        widget1: {
            chartType: 'line',
            datasets : {
                '2015': [
                    {
                        label: 'Sales',
                        data : [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
                        fill : 'start'

                    }
                ],
                '2016': [
                    {
                        label: 'Sales',
                        data : [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
                        fill : 'start'

                    }
                ],
                '2017': [
                    {
                        label: 'Sales',
                        data : [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
                        fill : 'start'

                    }
                ]

            },
            labels   : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            colors   : [
                {
                    borderColor              : '#42a5f5',
                    backgroundColor          : '#42a5f5',
                    pointBackgroundColor     : '#1e88e5',
                    pointHoverBackgroundColor: '#1e88e5',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top  : 32,
                        left : 32,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    },
                    line : {
                        tension: 0
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display       : false,
                                drawBorder    : false,
                                tickMarkLength: 18
                            },
                            ticks    : {
                                fontColor: '#ffffff'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min     : 1.5,
                                max     : 5,
                                stepSize: 0.5
                            }
                        }
                    ]
                },
                plugins            : {
                    filler      : {
                        propagate: false
                    },
                    xLabelsOnTop: {
                        active: true
                    }
                }
            }
        },
        widget2: {
            conversion: {
                value   : 492,
                ofTarget: 22
            },
            scheme    : {
                domain: ['#5c84f1']
            },
            data      : [
                {
                    name : 'Monday',
                    value: 221
                },
                {
                    name : 'Tuesday',
                    value: 428
                },
                {
                    name : 'Wednesday',
                    value: 492
                },
                {
                    name : 'Thursday',
                    value: 471
                },
                {
                    name : 'Friday',
                    value: 413
                },
                {
                    name : 'Saturday',
                    value: 344
                },
                {
                    name : 'Sunday',
                    value: 294
                }
            ]
        },
        widget3: {
            impressions: {
                value   : '87.4M',
                ofTarget: 12.3
            },
            scheme     : {
                domain: ['#5c84f1']
            },
            data       : [
                {
                    name  : 'Impressions',
                    series: [
                        {
                            name : 'Jan 1',
                            value: 670000
                        },
                        {
                            name : 'Jan 2',
                            value: 540000
                        },
                        {
                            name : 'Jan 3',
                            value: 820000
                        },
                        {
                            name : 'Jan 4',
                            value: 570000
                        },
                        {
                            name : 'Jan 5',
                            value: 720000
                        },
                        {
                            name : 'Jan 6',
                            value: 570000
                        },
                        {
                            name : 'Jan 7',
                            value: 870000
                        },
                        {
                            name : 'Jan 8',
                            value: 720000
                        },
                        {
                            name : 'Jan 9',
                            value: 890000
                        },
                        {
                            name : 'Jan 10',
                            value: 987000
                        },
                        {
                            name : 'Jan 11',
                            value: 1120000
                        },
                        {
                            name : 'Jan 12',
                            value: 1360000
                        },
                        {
                            name : 'Jan 13',
                            value: 1100000
                        },
                        {
                            name : 'Jan 14',
                            value: 1490000
                        },
                        {
                            name : 'Jan 15',
                            value: 980000
                        }
                    ]
                }
            ]
        },
        widget4: {
            visits: {
                value   : 882,
                ofTarget: -12
            },
            scheme: {
                domain: ['#f44336']
            },
            data  : [
                {
                    name : 'Monday',
                    value: 432
                },
                {
                    name : 'Tuesday',
                    value: 428
                },
                {
                    name : 'Wednesday',
                    value: 477
                },
                {
                    name : 'Thursday',
                    value: 471
                },
                {
                    name : 'Friday',
                    value: 456
                },
                {
                    name : 'Saturday',
                    value: 267
                },
                {
                    name : 'Sunday',
                    value: 231
                }
            ]
        },
        widget5: {
            chartType: 'line',
            datasets : {
                'yesterday': [
                    {
                        label: 'Visitors',
                        data : [190, 300, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290],
                        fill : 'start'

                    },
                    {
                        label: 'Page views',
                        data : [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
                        fill : 'start'
                    }
                ],
                'today'    : [
                    {
                        label: 'Visitors',
                        data : [410, 380, 320, 290, 190, 390, 250, 380, 300, 340, 220, 290],
                        fill : 'start'
                    },
                    {
                        label: 'Page Views',
                        data : [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800],
                        fill : 'start'

                    }
                ]
            },
            labels   : ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm'],
            colors   : [
                {
                    borderColor              : '#3949ab',
                    backgroundColor          : '#3949ab',
                    pointBackgroundColor     : '#3949ab',
                    pointHoverBackgroundColor: '#3949ab',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                },
                {
                    borderColor              : 'rgba(30, 136, 229, 0.87)',
                    backgroundColor          : 'rgba(30, 136, 229, 0.87)',
                    pointBackgroundColor     : 'rgba(30, 136, 229, 0.87)',
                    pointHoverBackgroundColor: 'rgba(30, 136, 229, 0.87)',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                tooltips           : {
                    position : 'nearest',
                    mode     : 'index',
                    intersect: false
                },
                layout             : {
                    padding: {
                        left : 24,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            ticks    : {
                                fontColor: 'rgba(0,0,0,0.54)'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                tickMarkLength: 16
                            },
                            ticks  : {
                                stepSize: 1000
                            }
                        }
                    ]
                },
                plugins            : {
                    filler: {
                        propagate: false
                    }
                }
            }
        },
        widget6: {
            markers: [
                {
                    lat: 52,
                    lng: -73,
                    label: '120'
                },
                {
                    lat: 37,
                    lng: -104,
                    label: '498'
                },
                {
                    lat: 21,
                    lng: -7,
                    label: '443'
                },
                {
                    lat: 55,
                    lng: 75,
                    label: '332'
                },
                {
                    lat: 51,
                    lng: 7,
                    label: '50'
                },
                {
                    lat: 31,
                    lng: 12,
                    label: '221'
                },
                {
                    lat: 45,
                    lng: 44,
                    label: '455'
                },
                {
                    lat: -26,
                    lng: 134,
                    label: '231'
                },
                {
                    lat: -9,
                    lng: -60,
                    label: '67'
                },
                {
                    lat: 33,
                    lng: 104,
                    label: '665'
                }
            ]
        },
        widget7: {
            scheme : {
                domain: ['#4867d2', '#5c84f1', '#89a9f4']
            },
            devices: [
                {
                    name  : 'Desktop',
                    value : 92.8,
                    change: -0.6
                },
                {
                    name  : 'Mobile',
                    value : 6.1,
                    change: 0.7
                },
                {
                    name  : 'Tablet',
                    value : 1.1,
                    change: 0.1
                }
            ]
        },
        widget8: {
            scheme : {
                domain: ['#5c84f1']
            },
            today  : '12,540',
            change : {
                value     : 321,
                percentage: 2.05
            },
            data   : [
                {
                    name  : 'Sales',
                    series: [
                        {
                            name : 'Jan 1',
                            value: 540
                        },
                        {
                            name : 'Jan 2',
                            value: 539
                        },
                        {
                            name : 'Jan 3',
                            value: 538
                        },
                        {
                            name : 'Jan 4',
                            value: 539
                        },
                        {
                            name : 'Jan 5',
                            value: 540
                        },
                        {
                            name : 'Jan 6',
                            value: 539
                        },
                        {
                            name : 'Jan 7',
                            value: 540
                        }
                    ]
                }
            ],
            dataMin: 538,
            dataMax: 541
        },
        widget9: {
            rows: [
                {
                    title     : 'Holiday Travel',
                    clicks    : 3621,
                    conversion: 90
                },
                {
                    title     : 'Get Away Deals',
                    clicks    : 703,
                    conversion: 7
                },
                {
                    title     : 'Airfare',
                    clicks    : 532,
                    conversion: 0
                },
                {
                    title     : 'Vacation',
                    clicks    : 201,
                    conversion: 8
                },
                {
                    title     : 'Hotels',
                    clicks    : 94,
                    conversion: 4
                }
            ]
        }
    };
}
