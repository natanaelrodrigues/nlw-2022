import React from 'react';
import { TouchableOpacity,
         TouchableOpacityProps,
        Image, 
        ImageProps,
        Text,
} from 'react-native';

import { styles } from './styles';

export function Option({title, image, ...rest} : Props) {

    interface Props extends TouchableOpacityProps{
        title:string;
        image: ImageProps;
    }

  return (
    <TouchableOpacity 
        style={styles.container}
        {...rest}
    >

        <Image
            source={image}
            style={styles.image}
        >

        </Image>

        <Text style={styles.title}>{title}</Text>

    </TouchableOpacity>
  );
}