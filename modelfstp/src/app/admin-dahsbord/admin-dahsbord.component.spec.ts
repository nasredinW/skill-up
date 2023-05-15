import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminDahsbordComponent} from './admin-dahsbord.component';

describe('AdminDahsbordComponent', () => {
  let component: AdminDahsbordComponent;
  let fixture: ComponentFixture<AdminDahsbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDahsbordComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminDahsbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
