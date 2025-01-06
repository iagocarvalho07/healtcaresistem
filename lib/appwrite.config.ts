import * as sdk from "node-appwrite";

export const{
    PROJECT_ID, API_KEY, DATABASE_ID, PACIENTE_COLETION_ID,DOCTOR_COLLECTION_ID,APPOTIMENT_COLLECTION_ID, NEXT_PUBLIC_BUKET_ID, NEXT_PUBLIC_ENDPOINT
} = process.env;

const client = new sdk.Client();
client.setEndpoint(NEXT_PUBLIC_ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);