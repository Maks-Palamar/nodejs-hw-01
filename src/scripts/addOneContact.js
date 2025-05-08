import { createFakeContact } from "../utils/createFakeContact.js";
import fs from 'node:fs/promises';
import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    let fileData = await readContacts();
    fileData.push(createFakeContact());
    await writeContacts(fileData);
};

addOneContact();


