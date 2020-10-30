import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCallComponent } from './git-call.component';

describe('GitCallComponent', () => {
  let component: GitCallComponent;
  let fixture: ComponentFixture<GitCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
