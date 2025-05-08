import fs from 'node:fs/promises';
import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {

    let fileData = await readContacts();
    return fileData;
};

console.log(await getAllContacts());
