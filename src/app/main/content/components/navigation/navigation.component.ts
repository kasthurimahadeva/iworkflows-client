import { Component } from '@angular/core';
import { FuseNavigationService } from '../../../../core/components/navigation/navigation.service';

@Component({
    selector   : 'fuse-navigation-docs',
    templateUrl: './navigation.component.html',
    styleUrls  : ['./navigation.component.scss']
})
export class FuseNavigationDocsComponent
{
    constructor(private navigationService: FuseNavigationService)
    {

    }

    updateMailBadge()
    {
        // Get the mail nav item
        const mailNavItem = this.navigationService.getNavigationItem('applications.mail');

        // Update the badge title
        mailNavItem.badge.title = 35;
    }

    addSubitemToCalendar()
    {
        // Prepare the new nav item
        const newNavItem = {
            id   : 'sub-item',
            title: 'Sub Item',
            type : 'item',
            url  : '/apps/calendar'
        };

        // Add the new nav item
        this.navigationService.addNavigationItem('applications.calendar', newNavItem);
    }

    addNavItemWithCustomFunction()
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
        const applicationsNavItem = this.navigationService.getNavigationItem('applications');

        // Add the new nav item at the beginning of the applications
        applicationsNavItem.children.unshift(newNavItem);
    }
}
