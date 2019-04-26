export class User{
  constructor(
    public Userid: number,
    public station: string,
    public FirstName: string,
    public SurName: string,
    public UserName: string,
    public UserPassword: string,
    public UserRole: string,
    public UserEmail: string,
    public UserPhone: string,
    public Active: string,
    public LoggedOn: string,
    public Reset: string,
    public LastPasswdChange: string,
    public LastLoggedIn: string,
    public CreatedBy: string,
    public CreationDate: string
  ) {}
}
