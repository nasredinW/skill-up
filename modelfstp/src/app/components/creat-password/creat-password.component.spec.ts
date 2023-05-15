import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreatPasswordComponent} from './creat-password.component';

describe('CreatPasswordComponent', () => {
  let component: CreatPasswordComponent;
  let fixture: ComponentFixture<CreatPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatPasswordComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreatPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
