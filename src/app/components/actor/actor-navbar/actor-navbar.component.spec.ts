import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorNavbarComponent } from './actor-navbar.component';

describe('ActorNavbarComponent', () => {
  let component: ActorNavbarComponent;
  let fixture: ComponentFixture<ActorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
