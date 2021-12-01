import * as FileSystem from 'expo-file-system';
import uuid from 'react-native-uuid';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

// const copyFile = async (file, newLocation) => {
//   await FileSystem.copyAsync({
//     from: file,
//     to: newLocation,
//   });
// };

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  } else {
    // await FileSystem.deleteAsync(contactDirectory);
    // await FileSystem.makeDirectoryAsync(contactDirectory);
  }
};

const loadContact = async (fileName) => {
  const ret = JSON.parse(await FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
    encoding: FileSystem.EncodingType.UTF8,
  }));
  return ret;
};

export const addContact = async (contact) => {
  const filename = `${contact.name}-${uuid.v4()}.json`;
  // console.log('filename1: ', filename);

  FileSystem.writeAsStringAsync(`${contactDirectory}/${filename}`, JSON.stringify(contact), { encoding: FileSystem.EncodingType.UTF8 }).then(() => {
    loadContact('Danni-1.json').then((file) => {
      const ret = {
        name: filename,
        type: 'contact',
        file,
      };
      return ret;
    }).catch((err) => {
      console.log(err.message);
    });
  }).catch((err) => {
    console.log(err);
  });
};

export const getAllContacts = async () => {
  await setupDirectory();
  // console.log('ffk!!!!!!!!!!!!!');
  const result = await FileSystem.readDirectoryAsync(contactDirectory);

  return Promise.all(result.map(async (fileName) => (
    {
      name: fileName,
      type: 'contact',
      file: await loadContact(fileName),
    })));
};

export const editContact = async (contact) => {
  Promise.resolve(getAllContacts()).then(async (contacts) => {
    // console.log('all contacts? ', contacts);
    // console.log('new thing: ', contact);
    const setContacts = contacts.filter((item) => item.file.id === contact.id);
    // console.log('all setcontacts? ', setContacts);
    // console.log('old file name:  ', setContacts[0].name);
    await FileSystem.deleteAsync(`${contactDirectory}/${setContacts[0].name}`);
    Promise.resolve(addContact(contact));
    // Promise.resolve(getAllContacts()).then(async (contacts) => {
    //   // console.log('NEW all contacts? ', contacts);
    //   // console.log('fk');
    // });
  });
};
