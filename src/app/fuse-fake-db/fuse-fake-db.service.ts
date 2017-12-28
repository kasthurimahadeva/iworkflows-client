import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MailFakeDb } from './mail';
import { ChatFakeDb } from './chat';
import { CalendarFakeDb } from './calendar';
import { TodoFakeDb } from './todo';
import { ProfileFakeDb } from './profile';
import { ContactsFakeDb } from './contacts';
import { InvoiceFakeDb } from './invoice';
import { FileManagerFakeDb } from './file-manager';
import { SearchFakeDb } from './search';
import { QuickPanelFakeDb } from './quick-panel';
import { IconsFakeDb } from './icons';
import { ProjectsDashboardDb } from './projects-dashboard';
import { ScrumboardFakeDb } from './scrumboard';
import { FaqFakeDb } from './faq';
import { KnowledgeBaseFakeDb } from './knowledge-base';
import { ECommerceFakeDb } from './e-commerce';
import { AcademyFakeDb } from './academy';

export class FuseFakeDbService implements InMemoryDbService
{
    createDb()
    {
        return {
            'mail-mails'                 : MailFakeDb.mails,
            'mail-folders'               : MailFakeDb.folders,
            'mail-filters'               : MailFakeDb.filters,
            'mail-labels'                : MailFakeDb.labels,
            'chat-contacts'              : ChatFakeDb.contacts,
            'chat-chats'                 : ChatFakeDb.chats,
            'chat-user'                  : ChatFakeDb.user,
            'calendar'                   : CalendarFakeDb.data,
            'todo-todos'                 : TodoFakeDb.todos,
            'todo-filters'               : TodoFakeDb.filters,
            'todo-tags'                  : TodoFakeDb.tags,
            'profile-timeline'           : ProfileFakeDb.timeline,
            'profile-photos-videos'      : ProfileFakeDb.photosVideos,
            'profile-about'              : ProfileFakeDb.about,
            'contacts-contacts'          : ContactsFakeDb.contacts,
            'contacts-user'              : ContactsFakeDb.user,
            'invoice'                    : InvoiceFakeDb.invoice,
            'file-manager'               : FileManagerFakeDb.files,
            'search-classic'             : SearchFakeDb.classic,
            'search-table'               : SearchFakeDb.table,
            'quick-panel-notes'          : QuickPanelFakeDb.notes,
            'quick-panel-events'         : QuickPanelFakeDb.events,
            'icons'                      : IconsFakeDb.icons,
            'projects-dashboard-projects': ProjectsDashboardDb.projects,
            'projects-dashboard-widgets' : ProjectsDashboardDb.widgets,
            'scrumboard-boards'          : ScrumboardFakeDb.boards,
            'faq'                        : FaqFakeDb.data,
            'knowledge-base'             : KnowledgeBaseFakeDb.data,
            'e-commerce-dashboard'       : ECommerceFakeDb.dashboard,
            'e-commerce-products'        : ECommerceFakeDb.products,
            'e-commerce-orders'          : ECommerceFakeDb.orders,
            'academy-categories'         : AcademyFakeDb.categories,
            'academy-courses'            : AcademyFakeDb.courses,
            'academy-course'             : AcademyFakeDb.course
        };
    }
}
