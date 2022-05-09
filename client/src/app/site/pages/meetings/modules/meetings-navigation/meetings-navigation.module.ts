import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsNavigationWrapperComponent } from './components/meetings-navigation-wrapper/meetings-navigation-wrapper.component';
import { SidenavModule } from 'src/app/ui/modules/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { OpenSlidesTranslationModule } from 'src/app/site/modules/translations';
import { GlobalHeadbarModule } from 'src/app/ui/modules/global-headbar/global-headbar.module';
import { InteractionModule } from '../../pages/interaction/interaction.module';
import { MatBadgeModule } from '@angular/material/badge';
import { DirectivesModule } from 'src/app/ui/directives';

const EXPORTS = [MeetingsNavigationWrapperComponent];

@NgModule({
    declarations: [...EXPORTS],
    exports: EXPORTS,
    imports: [
        CommonModule,
        SidenavModule,
        DirectivesModule,
        GlobalHeadbarModule,
        InteractionModule,
        OpenSlidesTranslationModule.forChild(),
        MatListModule,
        MatIconModule,
        MatBadgeModule,
        RouterModule
    ]
})
export class MeetingsNavigationModule {}
