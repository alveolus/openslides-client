import { TestBed } from '@angular/core/testing';

import { ServerTimePresenterService } from './server-time-presenter.service';

describe(`ServerTimePresenterService`, () => {
    let service: ServerTimePresenterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ServerTimePresenterService);
    });

    it(`should be created`, () => {
        expect(service).toBeTruthy();
    });
});
