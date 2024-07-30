import conf from "../conf/conf.js"
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title, slug, content, feacturedImage, status, userId}){
        try{
            return await this.databases.createDocument(
                appwriteDatabaseID, // databaseId
                appwriteCollectionID, // collectionId
                slug,                   // documentId
                 {                    // data
                    title,
                    content,
                    feacturedImage,
                    status,
                    userId
                 },                   
   
            );
        }
        catch(error){
            console.log("create post database error",error);    
        }
    }

    async updatePost(slug,{title,  content, feacturedImage, status, }){
        try {
           return await this.databases.updateDocument(
            conf.appwriteDatabaseID, // databaseId
            conf.appwriteCollectionID, // collectionId
            slug,
            {
                title,
                content,
                feacturedImage,
                status
            }
           ) 
        } catch (error) {
            console.log("appwrite service :: update post error :: ",error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID, // databaseId
                conf.appwriteCollectionID, // collectionId
                slug
            )
            return true;
        } catch (error) {
            console.log("appwrite service :: delete post error :: ",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID, // databaseId
                conf.appwriteCollectionID, // collectionId
                slug
            )
        } catch (error) {
            console.log("appwrite service :: get post error :: ",error);
            return false
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseID, // databaseId
                conf.appwriteCollectionID, // collectionId
                queries // queries (optional)
            );
        } catch (error) {
            console.log("appwrite service :: get posts error :: ",error);
        }
    
    }

    // file upload note for future me :create a saperarte file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                appwriteBucketID,
                ID.unique(),
                file
            );
           
        } catch (error) {
            console.log("appwrite service :: upload file error :: ",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                appwriteBucketID, // bucketId
                fileId, // fileId
            );
            return true;
        } catch (error) {
            console.log("appwrite service :: delete file error :: ",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            appwriteBucketID, // bucketId
            fileId // fileId
        )
    }

    
}


const service=new Service();

export default service;