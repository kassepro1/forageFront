import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfacturesComponent } from './listfactures.component';

describe('ListfacturesComponent', () => {
  let component: ListfacturesComponent;
  let fixture: ComponentFixture<ListfacturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfacturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
