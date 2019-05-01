import { Component, OnInit, HostBinding} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {  Router } from '@angular/router';
import { DataService } from '../../services/allServices';
import { Observationslip } from '../../models/observationslip/observationslip';

@Component({
  selector: 'app-observation-slip-form',
  templateUrl: './observation-slip-form.component.html',
  styleUrls: ['./observation-slip-form.component.css']
})
export class ObservationSlipFormComponent implements OnInit {

observationSlipForm:FormGroup;

  @HostBinding('class') classes ='row';

  obsevationslip:Observationslip = {
    TIME: ' ',
Date: ' ',
Station: ' ',
TotalAmountOfAllClouds: ' ',
TotalAmountOfLowClouds: ' ',
TypeOfLowClouds1: ' ',
OktasOfLowClouds1: ' ',
HeightOfLowClouds1: ' ',
CLCODEOfLowClouds1: ' ',
TypeOfLowClouds2: ' ',
OktasOfLowClouds2: ' ',
HeightOfLowClouds2: ' ',
CLCODEOfLowClouds2: ' ',
TypeOfLowClouds3: ' ',
OktasOfLowClouds3: ' ',
HeightOfLowClouds3: ' ',
CLCODEOfLowClouds3: ' ',
TypeOfMediumClouds1: ' ',
OktasOfMediumClouds1: ' ',
HeightOfMediumClouds1: ' ',
CLCODEOfMediumClouds1: ' ',
TypeOfMediumClouds2: ' ',
OktasOfMediumClouds2: ' ',
HeightOfMediumClouds2: ' ',
CLCODEOfMediumClouds2: ' ',
TypeOfMediumClouds3: ' ',
OktasOfMediumClouds3: ' ',
HeightOfMediumClouds3: ' ',
CLCODEOfMediumClouds3: ' ',
TypeOfHighClouds1: ' ',
OktasOfHighClouds1: ' ',
HeightOfHighClouds1: ' ',
CLCODEOfHighClouds1: ' ',
TypeOfHighClouds2: ' ',
OktasOfHighClouds2: ' ',
HeightOfHighClouds2: ' ',
CLCODEOfHighClouds2: ' ',
TypeOfHighClouds3: ' ',
OktasOfHighClouds3: ' ',
HeightOfHighClouds3: ' ',
CLCODEOfHighClouds3: ' ',
CloudSearchLightReading: ' ',
Rainfall: ' ',
Dry_Bulb: ' ',
Wet_Bulb: ' ',
Max_Read: ' ',
Max_Reset: ' ',
Min_Read: ' ',
Min_Reset: ' ',
Piche_Read: ' ',
Piche_Reset: ' ',
TimeMarksThermo: ' ',
TimeMarksHygro: ' ',
TimeMarksRainRec: ' ',
Present_Weather: ' ',
Present_WeatherCode: ' ',
Past_Weather: ' ',
Visibility: ' ',
Wind_Direction: ' ',
Wind_Speed: ' ',
Gusting: ' ',
AttdThermo: ' ',
PrAsRead: ' ',
Correction: ' ',
CLP: ' ',
MSLPr: ' ',
TimeMarksBarograph: ' ',
TimeMarksAnemograph: ' ',
OtherTMarks: ' ',

SoilMoisture: ' ',
SoilTemperature: ' ',
sunduration: ' ',
trend: ' ',
windrun: ' ',
speciOrMetar: ' ',
UnitOfWindSpeed: ' ',
IndOrOmissionOfPrecipitation: ' ',
TypeOfStation_Present_Past_Weather: ' ',
HeightOfLowestCloud: ' ',
StandardIsobaricSurface: ' ',
GPM: ' ',
DurationOfPeriodOfPrecipitation: ' ',
GrassMinTemp: ' ',
CI_OfPrecipitation: ' ',
BE_OfPrecipitation: ' ',
IndicatorOfTypeOfIntrumentation: ' ',
SignOfPressureChange: ' ',
Supp_Info: ' ',
VapourPressure: ' ',
T_H_Graph: ' ',
DeviceType: ' ',
SubmittedBy: 'Test ',
Remarks: ' ',
Approved: ' '

  }

constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) { }


  ngOnInit() {
  }

  addObservationslipData(){
    console.log('yes');

  }

}
