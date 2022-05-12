import React from 'react';
import { 
        View, 
        Image, 
        Text, 
        TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
    onSenderAnotherFeedback: () => void;
}

import successImg  from '../../assets/success.png';
import { Copyright } from '../Copyright';

export function Success({ onSenderAnotherFeedback } : Props) {
  return (
    <View style={styles.container}>
        <Image 
            source={successImg}
            style={styles.image}
        />
        <Text style={styles.title} > 
            Agradecemos o feedback
        </Text>
        <TouchableOpacity 
            style={styles.button}
            onPress = {onSenderAnotherFeedback}
        >
            <Text style={styles.buttonTitle} > 
                Quero enviar outro
            </Text>
        </TouchableOpacity>
        <Copyright />
    </View>
  );
}