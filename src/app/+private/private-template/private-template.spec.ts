import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTemplate } from './private-template';

describe('PrivateTemplate', () => {
  let component: PrivateTemplate;
  let fixture: ComponentFixture<PrivateTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
