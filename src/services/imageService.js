import * as ImagePicker from 'expo-image-picker';

// Permissions for accessing camera roll
const CAMERA_ROLL = 'CAMERA_ROLL';
// Permissions for accessing camera
const CAMERA = 'CAMERA';

const getPermission = async (permissionTypes) => {
  if (permissionTypes.indexOf(CAMERA) >= 0) {
    await ImagePicker.requestCameraPermissionsAsync();
  }
  if (permissionTypes.indexOf(CAMERA_ROLL) >= 0) {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  }
};

export const selectFromCameraRoll = async () => {
  await getPermission([CAMERA_ROLL]);
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
    base64: true,
    aspect: [1, 1],
  });
  if (result.cancelled) return '';
  return result.uri;
};

export const takePhoto = async () => {
  await getPermission([CAMERA, CAMERA_ROLL]);
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
    base64: true,
    aspect: [1, 1],
  });

  if (result.cancelled) return '';
  return result.uri;
};
