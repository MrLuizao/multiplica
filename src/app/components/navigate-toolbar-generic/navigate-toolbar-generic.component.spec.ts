import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavigateToolbarGenericComponent } from './navigate-toolbar-generic.component';

describe('NavigateToolbarGenericComponent', () => {
  let component: NavigateToolbarGenericComponent;
  let fixture: ComponentFixture<NavigateToolbarGenericComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateToolbarGenericComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigateToolbarGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
