import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillUpComponent} from './skill-up.component';

describe('SkillUpComponent', () => {
  let component: SkillUpComponent;
  let fixture: ComponentFixture<SkillUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillUpComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SkillUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
