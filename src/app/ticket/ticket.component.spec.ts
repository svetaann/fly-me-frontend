import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TicketComponent } from './ticket.component';
describe('TicketComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TicketComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TicketComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fly-me-frontend'`, () => {
    const fixture = TestBed.createComponent(TicketComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fly-me-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TicketComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('fly-me-frontend app is running!');
  });
});
