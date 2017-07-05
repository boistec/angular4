import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcaseComponent } from './inputcase.component';

describe('InputcaseComponent', () => {
  let component: InputcaseComponent;
  let fixture: ComponentFixture<InputcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
