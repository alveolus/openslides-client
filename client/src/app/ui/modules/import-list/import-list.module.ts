import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PblNgridModule } from '@pebula/ngrid';

import { OpenSlidesTranslationModule } from '../../../site/modules/translations';
import { ImportListComponent } from './components/import-list/import-list.component';
import { ImportListFirstTabDirective } from './directives/import-list-first-tab.directive';
import { ImportListLastTabDirective } from './directives/import-list-last-tab.directive';
import { ImportListStatusTemplateDirective } from './directives/import-list-status-template.directive';

const DECLARATIONS = [
    ImportListComponent,
    ImportListFirstTabDirective,
    ImportListLastTabDirective,
    ImportListStatusTemplateDirective
];

@NgModule({
    exports: [...DECLARATIONS, MatTabsModule, PblNgridModule],
    declarations: DECLARATIONS,
    imports: [
        CommonModule,
        MatCardModule,
        MatTabsModule,
        MatTooltipModule,
        MatIconModule,
        MatSelectModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        PblNgridModule,
        PortalModule,
        OpenSlidesTranslationModule.forChild()
    ]
})
export class ImportListModule {}
