import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Animated, Image,
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

  const processPhoto = async (photoIn) => {
    let image = photoIn;
    if (image.length > 0) {
      image = await addImage(image);
    }

    Promise.resolve(image).then((newValue) => {
      image = newValue;
      setPhoto(image);
      onChange(image);
    });
  };

  const takePhoto = async () => {
    const image = await imageService.takePhoto();
    processPhoto(image);
  };

  const selectFromCameraRoll = async () => {
    const image = await imageService.selectFromCameraRoll();
    processPhoto(image);
  };

  // <TextInput
  //   styles={styles.textInput}
  //   placeholder="Enter the name of the board"
  //   value={inputs.name}
  //   onChangeText={(text) => inputHandler('name', text)}
  // />

  return (
    <View styles={styles.view}>
      <View style={styles.imageView}>
        <Animated.Image
          style={styles.image}
          source={{ uri: photo }}
        />
      </View>
      <TouchableOpacity
        onPress={() => takePhoto()}
      >
        <Text style={styles.text}>
          {'Take new photo with camera '}
          <Entypo name="camera" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => selectFromCameraRoll()}
      >
        <Text style={styles.text}>
          {'Select photo from camera roll '}
          <Entypo name="image" />
        </Text>
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
