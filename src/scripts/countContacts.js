import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    let fileData = await readContacts();
    
    let contactsNumber = fileData.length;
    return contactsNumber;
};

console.log(await countContacts());
