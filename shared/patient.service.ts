import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { HttpClient} from '@angular/common/http';
import { environment } from'src/environments/environment'
import { Observable } from 'rxjs';
import { Specialization } from './specialization';
import { Doctorlist } from './doctorlist';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  //declare variables--global
  patients: Patient[]; //list of all 
  specializations: Specialization[]; //list of all 
  doctors: Doctorlist[]; //list of all 
  formData: Patient=new Patient(); //store date in an employee

  constructor(private httpClient:HttpClient) { } //HttpClient

  //get All  or Method for Binding all 
  
  getAllPatients()
  {
    this.httpClient.get(environment.apiUrl+'/api/patients')
      .toPromise().then(response =>
          this.patients=response as Patient[]);
  
  }
  getActivePatients()
  {
    this.httpClient.get(environment.apiUrl+'/api/patients/active')
      .toPromise().then(response =>
          this.patients=response as Patient[]);
  }
  //get a particular by id
  getPatient(patId: number) :Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+'/api/patients/'+patId);
  }
  //insert
  insertPatient(pat: Patient) :Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+'/api/patients/',pat);
  }
  //update 
  updatePatient(pat: Patient) :Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+'/api/patients/',pat);
  }

  //delete 
  deletePatient(patId: number) :Observable<any>
  {
    return this.httpClient.delete(environment.apiUrl+'/api/patients/'+patId);
  }

  //disable 
  disablePatient(patId: number) :Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+'/api/patients/',patId);
  }

  //GET for dropdownlist
  getAllDoctor(){
    this.httpClient.get(environment.apiUrl+'/api/doctors')
      .toPromise().then(response =>
        this.doctors=response as Doctorlist[])
  }
  getAllSpecialization(){
    this.httpClient.get(environment.apiUrl+'/api/specializations')
      .toPromise().then(response =>
        this.specializations=response as Specialization[])
  }
}
