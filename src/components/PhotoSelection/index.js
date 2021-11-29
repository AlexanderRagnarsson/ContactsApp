import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Animated,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import * as imageService from '../../services/imageService';
import * as fileService from '../../services/fileService';
import styles from './styles';

const PhotoSelection = ({ value, onChange }) => {
  const [photo, setPhoto] = useState(value);

  const addImage = async (image) => {
    const newImage = await fileService.addImage(image);
    return newImage.filename;
  };

  const takePhoto = async () => {
    let image = await imageService.takePhoto();

    if (image.length > 0) {
      image = await addImage(image);
    }

    Promise.resolve(image).then((newValue) => {
      image = newValue;
      setPhoto(image);
      onChange(image);
    });
  };

  const selectFromCameraRoll = () => {};

  // <TextInput
  //   styles={styles.textInput}
  //   placeholder="Enter the name of the board"
  //   value={inputs.name}
  //   onChangeText={(text) => inputHandler('name', text)}
  // />

  return (
    <View>
      <Animated.Image
        style={styles.image}
        source={{ uri: photo }}
      />
      <TouchableOpacity
        onPress={() => takePhoto()}
      >
        <Text>
          {'Take new photo with camera '}
          <Entypo styles={styles.icon} name="camera" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => selectFromCameraRoll()}
      >
        {/* <Text>
          {'Select new photo form camera roll '}
          <Entypo styles={styles.icon} name="image" />
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

PhotoSelection.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

PhotoSelection.defaultProps = {
  onChange: () => {},
};

export default PhotoSelection;
