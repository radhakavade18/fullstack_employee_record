import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe({
      next: (employees) => {
        this.employees = employees;
      }
    })
  }
}
