import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { StaffsComponent } from 'src/app/admin/staffs/staffs.component';
import { HeaderComponent } from './header/header.component';
import { StaffComponent } from 'src/app/admin/staffs/staff/staff.component';
import { StaffListComponent } from './admin/staffs/staff-list/staff-list.component';
import { PatientlistComponent } from 'src/app/receptionist/patientlist/patientlist.component';
import { SpecializationComponent } from 'src/app/receptionist/specialization/specialization.component';
import { DoctorlistComponent } from 'src/app/receptionist/doctorlist/doctorlist.component';
import { PatientComponent } from 'src/app/receptionist/patient/patient.component';
import { EditpatientComponent } from './receptionist/editpatient/editpatient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DoctorComponent,
    ReceptionistComponent,
    LabtechnicianComponent,
    PharmacistComponent,
    StaffsComponent,
    HeaderComponent,
    StaffComponent,
    StaffListComponent,
    PatientlistComponent,
    SpecializationComponent,
    DoctorlistComponent,
    PatientComponent,
    EditpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
