
import React, { useState } from 'react';

import { ArrowLeft } from 'phosphor-react-native';
import { View, TextInput, Image, Text, TouchableOpacity, ViewPagerAndroidOnPageSelectedEventData } from 'react-native';
import { theme } from '../../theme';

import { FeedbackType } from '../../components/Widget';
import { Button } from '../../components/Button';
import { ScreenshotButton } from '../../components/ScreenshotButton';
import * as fileSystem from 'expo-file-system';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { captureScreen } from 'react-native-view-shot'
import { api } from '../..//libs/api'

import { styles } from './styles';

interface Props {
    feedbackType: FeedbackType;
    onFeedbackCanceled: () => void;
    onFeedbackSent: () => void;
}

export function Form({feedbackType, onFeedbackCanceled, onFeedbackSent} : Props ) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [isSendingFeedback, setIssendingFeedback] = useState(false);
    const [comment, setComment] = useState('');

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleScrennshot(){
        captureScreen({
            format: 'jpg',
            quality: 0.8,
        })
        .then(uri => setScreenshot(uri))
        .catch(error => console.log(error));
    }

    function handleScreenshotRemove(){
        setScreenshot(null);
    }

    async function hendleSendFeedback(){
        if(isSendingFeedback){
            return;
        }

        setIssendingFeedback(true);

        const screenshotBase64 = screenshot && await fileSystem.readAsStringAsync(screenshot,{encoding: 'base64'})

        try{
            await api.post('/feedbacks',{
               type: feedbackType,
               screenshot: `data:image/png;base64, ${screenshotBase64}`,
               comment 
            })
            onFeedbackSent();
        }catch(error){
            console.log(error)
            setIssendingFeedback(false)
        }
    }


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={onFeedbackCanceled}>
                <ArrowLeft
                    size={30}
                    weight="bold"
                    color={theme.colors.text_secondary}
                />
            </TouchableOpacity>


            <View style={styles.titleContainer}>
                <Image 
                    source={feedbackTypeInfo.image}
                    style={styles.image}
                />
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}
                </Text>
            </View>
        </View>
        <TextInput
            multiline
            style={styles.input}
            placeholder="Algo n??o est?? funcionando bem? Queres corrigir. Conte com detalhes o que est?? acontecendo..."
            placeholderTextColor={theme.colors.text_secondary}
            autoCorrect={false}
            onChangeText={setComment}
        />
        <View style={styles.footer}>
            <ScreenshotButton 
                onTakeShot={handleScrennshot}
                onRemoveShot={handleScreenshotRemove}
                screenshot={screenshot}
            />
             <Button 
                onPress={hendleSendFeedback}
                isLoading={isSendingFeedback}

             />
        </View>
    </View>
  );
}