import * as FileSystem from 'expo-file-system';

// const contactDirectory = `${FileSystem.documentDirectory}/contacts`;
const contactDirectory = '../resources/contacts';

const copyFile = async (file, newLocation) => {
  await FileSystem.copyAsync({
    from: file,
    to: newLocation,
  });
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
};

const loadContact = async (fileName) => {
  console.log('hello?');
  await FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
    encoding: FileSystem.EncodingType.Base64,
  });
};

export const addContact = async (contactLocation) => {
  const folderSplit = contactLocation.split('/');
  const fileName = folderSplit[folderSplit.length - 1];

  await copyFile(contactLocation, `${contactDirectory}/${fileName}`);

  return {
    name: fileName,
    type: 'contact',
    file: await loadContact(fileName),
  };
};

export const getAllContacts = async () => {
  await setupDirectory();

  const result = await FileSystem.readDirectoryAsync(contactDirectory);

  return Promise.all(result.map(async (fileName) => (
    {
      name: fileName,
      type: 'contact',
      file: await loadContact(fileName),
    }
  )));
};
