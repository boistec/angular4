import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApifavoriteComponent } from './apifavorite.component';

describe('ApifavoriteComponent', () => {
  let component: ApifavoriteComponent;
  let fixture: ComponentFixture<ApifavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApifavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApifavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
