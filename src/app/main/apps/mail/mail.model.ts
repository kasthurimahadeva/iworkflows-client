export class MailModel
{
    id: string;
    subject: string;
    from: {
        name: string,
        avatar: string,
        email: string
    };
    to: {
        name: string,
        email: string
    }[];

    message: string;
    time: string;
    read: boolean;
    starred: boolean;
    important: boolean;
    hasAttachments: boolean;
    attachments: [
        {
            type: string,
            fileName: string,
            preview: string,
            url: string,
            size: string
        }
        ];
    labels: string[];

    constructor()
    {

    }
}
