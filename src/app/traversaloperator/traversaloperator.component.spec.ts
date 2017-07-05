import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraversaloperatorComponent } from './traversaloperator.component';

describe('TraversaloperatorComponent', () => {
  let component: TraversaloperatorComponent;
  let fixture: ComponentFixture<TraversaloperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraversaloperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraversaloperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
