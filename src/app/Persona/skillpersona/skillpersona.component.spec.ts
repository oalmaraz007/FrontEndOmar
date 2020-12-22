import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillpersonaComponent } from './skillpersona.component';

describe('SkillpersonaComponent', () => {
  let component: SkillpersonaComponent;
  let fixture: ComponentFixture<SkillpersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillpersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
