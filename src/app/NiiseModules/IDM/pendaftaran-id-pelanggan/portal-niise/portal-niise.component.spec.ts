import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { PortalNiiseComponent } from './portal-niise.component';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../../icons/icon-subset';
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('DevModeComponent', () => {
  let component: PortalNiiseComponent;
  let fixture: ComponentFixture<PortalNiiseComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [FormModule, CardModule, GridModule, ButtonModule, IconModule, PortalNiiseComponent],
    providers: [IconSetService]
})
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(PortalNiiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
