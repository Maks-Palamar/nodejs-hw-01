import { createFakeContact } from "../utils/createFakeContact.js";
import fs from 'node:fs/promises';
import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

// const generateContacts = async (number) => {
//     try {
//     for (let index = 0; index < number; index++) {
//         await fs.appendFile(PATH_DB, JSON.stringify(createFakeContact()) + '\n', 'utf-8');
//     }
//     console.log(`Added ${number} contacts`);
    
// }
//     catch (err) {
//         console.error('Error while generating contacts', err);
        
//     }
// };

const generateContacts = async (number) => {
    // let fileData;
    // try {
    //     fileData = await fs.readFile(PATH_DB, 'utf-8');
    // } catch (err) {
    //             console.error('Error while generating contacts', err);

    // }
    let fileData = await readContacts();
    
    for (let i = 0; i < number; i++) {
        fileData.push(createFakeContact());
    }
    await writeContacts(fileData);

};

generateContacts(5);
