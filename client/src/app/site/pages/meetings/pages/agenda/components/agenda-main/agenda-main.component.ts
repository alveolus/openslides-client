import { Component } from '@angular/core';
import { BaseModelRequestHandlerComponent } from 'src/app/site/base/base-model-request-handler.component';

import { getAssignmentSubscriptionConfig } from '../../../assignments/config/model-subscription';
import {
    getMotionBlockSubscriptionConfig,
    getMotionListSubscriptionConfig
} from '../../../motions/config/model-subscription';
import { getAgendaSubscriptionConfig, getTopicSubscriptionConfig } from '../../config/model-subscription';

@Component({
    selector: `os-agenda-main`,
    templateUrl: `./agenda-main.component.html`,
    styleUrls: [`./agenda-main.component.scss`]
})
export class AgendaMainComponent extends BaseModelRequestHandlerComponent {
    protected override onNextMeetingId(id: number | null): void {
        if (id) {
            this.subscribeTo(
                getAgendaSubscriptionConfig(id, () => this.hasMeetingIdChangedObservable()),
                getTopicSubscriptionConfig(id, () => this.hasMeetingIdChangedObservable()),
                getMotionListSubscriptionConfig(id, () => this.hasMeetingIdChangedObservable()),
                getMotionBlockSubscriptionConfig(id, () => this.hasMeetingIdChangedObservable()),
                getAssignmentSubscriptionConfig(id, () => this.hasMeetingIdChangedObservable())
            );
        }
    }
}
