import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzFormComponent } from './quizz-form.component';

describe('QuizzFormComponent', () => {
  let component: QuizzFormComponent;
  let fixture: ComponentFixture<QuizzFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
