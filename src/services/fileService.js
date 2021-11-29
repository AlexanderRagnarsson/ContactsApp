import * as FileSystem from 'expo-file-system';

const imageDirectory = `${FileSystem.documentDirectory}`;

const loadImage = async (filename) => {
  const image = await FileSystem.readAsStringAsync(`${imageDirectory}/${filename}`, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return image;
};

export const copyFile = async (file, newLocation) => {
  const newLoc = await FileSystem.copyAsync({
    from: file,
    to: newLocation,
  });
  return newLoc;
};

export const addImage = async (imageLocation) => {
  const foldersplit = imageLocation.split('/');
  const filename = foldersplit[foldersplit.length - 1];

  await copyFile(imageLocation, `${imageDirectory}/${filename}`);

  return {
    name: filename,
    type: 'image',
    file: await loadImage(filename),
    filename: `${imageDirectory}/${filename}`,
  };
};
