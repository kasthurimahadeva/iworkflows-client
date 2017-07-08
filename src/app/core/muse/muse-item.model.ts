export class MuseItem
{
    name: string;

    constructor(name: string)
    {
        this.name = name;
    }
    save()
    {
        console.info('saved', this.name);
    }
}
