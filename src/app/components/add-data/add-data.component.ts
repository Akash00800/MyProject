import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Data } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css'
})
export class AddDataComponent {
 data: Data = { name: '', description: '' };

  constructor(private dataService: DataService, private router: Router) {}

  saveData(): void {
    this.dataService.create(this.data).subscribe({
      next: () => this.router.navigate(['/data-list']),
      error: (err) => console.error(err),
    });
  }

  cancel(): void {
    this.router.navigate(['/data-list']);
  }
}
