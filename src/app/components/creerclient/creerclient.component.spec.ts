import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerclientComponent } from './creerclient.component';

describe('CreerclientComponent', () => {
  let component: CreerclientComponent;
  let fixture: ComponentFixture<CreerclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
