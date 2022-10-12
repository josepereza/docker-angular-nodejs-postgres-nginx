import { Component } from '@angular/core';
import { ValueServiceService } from './value-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  public numbers: Number[] | undefined;
  public number: Number | null = null;

  constructor(private valueService: ValueServiceService){
    this.getNumbers();
  }

  private getNumbers () {
    this.valueService.getValues()
    .subscribe((data: Number[]) => {
      this.numbers = data;
    });
  }

  public addNumber () {
    this.valueService.addValue(this.number)?.subscribe(_ => {
      this.getNumbers();
    });
    
  }
}
