import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { DevModeComponent } from './dev-mode-component';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../icons/icon-subset';
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('DevModeComponent', () => {
  let component: DevModeComponent;
  let fixture: ComponentFixture<DevModeComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [FormModule, CardModule, GridModule, ButtonModule, IconModule, DevModeComponent],
    providers: [IconSetService]
})
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(DevModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
