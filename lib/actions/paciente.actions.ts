"use server";

import { ID, Query, Users } from "node-appwrite"
import { users } from "../appwrite.config"
import { use } from "react"
import { parseStringify } from "../utils";

export const createUser = async(user: CreateUserParams) =>{
    try {
        const newUser = await users.create(
            ID.unique(), 
            user.email, 
            user.name, 
            undefined,
            user.phone)
        
    } catch (error:any) {
        if (error && error?.code === 409) {
            const documents = await users.list([
                Query.equal('email', [user.email])
            ])
            return documents?.users[0]
        }
        console.error("An error occurred while creating a new user:", error);
    }
}


export const getUser = async (userId: string) =>{
    try {
        const user = await users.get(userId);
        return parseStringify(user)
    } catch (error) {
        console.log(error)
    }
}