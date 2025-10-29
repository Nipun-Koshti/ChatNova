import { error } from "console";

export const getKey = (key: string, defaultValue: string = "")=>{
    const val = process.env[key] ?? defaultValue;

    if(!val)throw new Error("Missing Env variable: " + key);

    return val;
}