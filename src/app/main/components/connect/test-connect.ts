export const TestProviders = [
    {
        'name': 'NextCloud',
        'redirectUri': 'authorize/NextCloud',
        'revokeUri': '/token/revoke/NextCloud',
        'authorized': false
    },
    {
        'name': 'Google',
        'redirectUri': 'authorize/Google',
        'revokeUri': '/token/revoke/Google',
        'authorized': false
    },
    {
        'name': 'Moodle',
        'redirectUri': '/moodle/token',
        'revokeUri': '/token/revoke/moodle',
        'authorized': false
    }
];
