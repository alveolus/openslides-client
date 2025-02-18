import { Component } from '@angular/core';
import {
    BaseModelRequestHandlerComponent,
    ModelRequestConfig
} from 'src/app/site/base/base-model-request-handler.component/base-model-request-handler.component';

import { getDesignListSubscriptionConfig } from '../../../../config/model-subscription';

@Component({
    selector: `os-design-main`,
    templateUrl: `./design-main.component.html`,
    styleUrls: [`./design-main.component.scss`]
})
export class DesignMainComponent extends BaseModelRequestHandlerComponent {
    protected override onCreateModelRequests(): void | ModelRequestConfig[] {
        return [getDesignListSubscriptionConfig()];
    }
}
