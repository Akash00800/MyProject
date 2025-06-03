import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Data } from '../../services/data.service';

@Component({
  selector: 'app-edit-data',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  data?: Data;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Fetching data with ID:', id); // Debug

    this.dataService.get(id).subscribe({
      next: (response) => {
        console.log('Received:', response); // Debug
        this.data = response;
      },
      error: (err) => console.error(err),
    });
  }

  updateData(): void {
    if (!this.data?.id) return;

    this.dataService.update(this.data.id, this.data).subscribe({
      next: () => {
        console.log('Data updated successfully');
        this.router.navigate(['/data-list']);
      },
      error: (err) => console.error(err),
    });
  }

  cancel(): void {
    this.router.navigate(['/data-list']);
  }
}
