import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseFormatComponent } from './response-format.component';

describe('ResponseFormatComponent', () => {
  let component: ResponseFormatComponent;
  let fixture: ComponentFixture<ResponseFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseFormatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
