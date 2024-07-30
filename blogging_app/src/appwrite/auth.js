
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js"
export class Authservice {
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client);
        
    }

    async createAccount({email,password,name}){
       try{
        const userAccount=await this.account.create(ID.unique(), email,password,name);
      if (userAccount) {
        // call another method
        return this.login({email,password});
        
      }else{
        return userAccount;
      }
    }
         catch(error){
              throw error;
         }
    }

    async login({email,password}){

        try{
            const session=await this.account.createEmailSession(email,password);
            return session;
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUserr(){
        try{
            const user=await this.account.get();
            return user;
        }
        catch(error){
            throw error;
        }
        return null;
    }

    async logout(){
        try{
            const response=await this.account.deleteSessions();
            return response;
        }
        catch(error){
            throw error;
        }

}
}


const authservice=new Authservice();

export default Authservice;