import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data, DataService } from '../../services/data.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css',
})
export class DataListComponent {
 dataList: Data[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getAll().subscribe((data) => {
      this.dataList = data;
    });
  }

  deleteData(id: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.dataService.delete(id).subscribe(() => this.getData());
    }
  }

  editData(id: number): void {
      console.log('Navigating to edit with id:', id); 

    this.router.navigate(['/edit', id]);
  }

  addData(): void {
    this.router.navigate(['/add']);
  }

  
}
