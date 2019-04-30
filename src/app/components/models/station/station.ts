export class Station {
  constructor (
                public stationName:string,
                public stationNumber:number,
                public stationRegNumber:number,
                public location:string,
                public indicator:string,
                public region:string,
                public country:string,
                public latitude:number,
                public longitude:number,
                public status:string,
                public stationType:string
  ){}
}
