import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    let updatedContacts = [];
    await readContacts().then((contacts) => {
        updatedContacts = contacts.slice(0, contacts.length-1);
        writeContacts(updatedContacts);
    });
};

removeLastContact();
