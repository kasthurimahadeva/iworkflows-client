import { Component, OnInit, ViewChild } from '@angular/core';
import { FuseNavigationService } from '../navigation/navigation.service';

@Component({
    selector   : 'fuse-shortcuts',
    templateUrl: './shortcuts.component.html',
    styleUrls  : ['./shortcuts.component.scss']
})
export class FuseShortcutsComponent implements OnInit
{
    shortcutItems: any[] = [];
    navigationItems: any[];
    filteredNavigationItems: any[];
    searching = false;
    @ViewChild('searchInput') searchInputField;

    constructor(private fuseNavigationService: FuseNavigationService)
    {
        this.filteredNavigationItems = this.navigationItems = this.fuseNavigationService.getFlatNavigation();
    }

    ngOnInit()
    {
        // User's shortcut items
        this.shortcutItems = [
            {
                'title': 'Calendar',
                'type' : 'nav-item',
                'icon' : 'today',
                'url'  : '/apps/calendar'
            },
            {
                'title': 'Mail',
                'type' : 'nav-item',
                'icon' : 'email',
                'url'  : '/apps/mail'
            },
            {
                'title': 'Contacts',
                'type' : 'nav-item',
                'icon' : 'account_box',
                'url'  : '/apps/contacts'
            },
            {
                'title': 'To-Do',
                'type' : 'nav-item',
                'icon' : 'check_box',
                'url'  : '/apps/todo'
            }
        ];
    }

    search(event)
    {
        const value = event.target.value.toLowerCase();

        if ( value === '' )
        {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;

            return;
        }

        this.searching = true;

        this.filteredNavigationItems = this.navigationItems.filter((navigationItem) => {
            return navigationItem.title.toLowerCase().includes(value);
        });
    }

    toggleShortcut(event, itemToToggle)
    {
        event.stopPropagation();

        for ( let i = 0; i < this.shortcutItems.length; i++ )
        {
            if ( this.shortcutItems[i].url === itemToToggle.url )
            {
                this.shortcutItems.splice(i, 1);
                return;
            }

        }

        this.shortcutItems.push(itemToToggle);
    }

    isInShortcuts(navigationItem)
    {
        return this.shortcutItems.find(item => {
            return item.url === navigationItem.url;
        });
    }

    onMenuOpen()
    {
        this.searchInputField.nativeElement.focus();
    }
}
