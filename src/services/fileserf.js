import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

console.log(contactDirectory);
// const contactDirectory = '../resources/contacts';

// const permissions = await FileSystem.requestDirectoryPermissionsAsync();

// if (permissions.granted) {
//   // Gets SAF URI from response
//   const uri = permissions.directoryUri;

//   // Gets all files inside of selected directory
//   const files = await FileSystem.readDirectoryAsync(uri);
//   alert(`Files inside ${uri}:\n\n${JSON.stringify(files)}`);
// }

const copyFile = async (file, newLocation) => {
  await FileSystem.copyAsync({
    from: file,
    to: newLocation,
  });
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  console.log(dir);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
};

const loadContact = async (fileName) => {
  console.log('hello?');
  console.log(fileName);
  await FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
    encoding: FileSystem.EncodingType.Base64,
  });
};

export const addContact = async (contactLocation) => {
  // const folderSplit = contactLocation.split('/');
  // const fileName = folderSplit[folderSplit.length - 1];

  await copyFile(contactLocation, `${contactDirectory}/${contactLocation}`);

  return {
    name: contactLocation,
    type: 'contact',
    file: await loadContact(contactLocation),
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
  ))).then((value) => console.log(value)).catch((err) => { console.error(err); });
};
