import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorListadoComponent } from './actor-listado.component';

describe('ActorListadoComponent', () => {
  let component: ActorListadoComponent;
  let fixture: ComponentFixture<ActorListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
