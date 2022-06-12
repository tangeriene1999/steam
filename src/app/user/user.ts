

export class User{
    public username:string=""
    private password:string=""

    public User(username:string,password:string){
        this.username=username
        this.password=password
    }
    public setUsername(username:string){
        this.username=username
    }
    public setPassword(password:string){
        this.password=password
    }
}