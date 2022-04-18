import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrecomponenetComponent } from './padrecomponenet.component';

describe('PadrecomponenetComponent', () => {
  let component: PadrecomponenetComponent;
  let fixture: ComponentFixture<PadrecomponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrecomponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadrecomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
