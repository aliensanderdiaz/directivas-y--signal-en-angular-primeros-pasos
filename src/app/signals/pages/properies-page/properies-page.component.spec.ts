import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperiesPageComponent } from './properies-page.component';

describe('ProperiesPageComponent', () => {
  let component: ProperiesPageComponent;
  let fixture: ComponentFixture<ProperiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProperiesPageComponent]
    });
    fixture = TestBed.createComponent(ProperiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
