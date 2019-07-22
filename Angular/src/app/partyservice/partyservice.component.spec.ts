import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyserviceComponent } from './partyservice.component';

describe('PartyserviceComponent', () => {
  let component: PartyserviceComponent;
  let fixture: ComponentFixture<PartyserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
