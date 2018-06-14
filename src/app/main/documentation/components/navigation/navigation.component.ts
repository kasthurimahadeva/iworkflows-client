import { Component } from '@angular/core';

import { navigation } from 'app/navigation/navigation';

@Component({
    selector   : 'docs-components-navigation',
    templateUrl: './navigation.component.html',
    styleUrls  : ['./navigation.component.scss']
})
export class DocsComponentsNavigationComponent
{
    navigation: any;
    hidden: boolean;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.navigation = navigation;
        this.hidden = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Show/hide calendar menu item
     */
    showHideCalendarMenuItem(): void
    {
        // Get the calendar item from the navigation
        const calendarNavItem = this.navigation[0].children[1];

        // Toggle the visibility
        this.hidden = !this.hidden;
        calendarNavItem.hidden = this.hidden;
    }

    /**
     * Update mail badge
     */
    updateMailBadge(): void
    {
        // Get the mail nav item
        const mailNavItem = this.navigation[0].children[4];

        // Update the badge title
        mailNavItem.badge.title = 35;
    }

    /**
     * Add subitem to the calendar
     */
    addSubitemToCalendar(): void
    {
        // Prepare the new nav item
        const newNavItem = {
            id   : 'sub-item',
            title: 'Sub Item',
            type : 'item',
            url  : '/apps/calendar'
        };

        // Get the calendar item from the navigation
        const calendarNavItem = this.navigation[0].children[1];

        // Make the calendar navigation item collapsable
        calendarNavItem.type = 'collapse';

        // Create an empty children array
        calendarNavItem.children = [];

        // Push the new children
        calendarNavItem.children.push(newNavItem);
    }

    /**
     * Add a nav item with custom function
     */
    addNavItemWithCustomFunction(): void
    {
        // Prepare the new nav item
        const newNavItem = {
            id      : 'custom-item',
            title   : 'Custom Item',
            type    : 'item',
            function: () => {
                alert('Custom function!');
            }
        };

        // Get the applications nav item
        const applicationsNavItem = this.navigation[0];

        // Add the new nav item at the beginning of the applications
        applicationsNavItem.children.unshift(newNavItem);
    }
}
