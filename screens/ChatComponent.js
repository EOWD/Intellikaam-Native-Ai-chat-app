import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat,InputToolbar } from 'react-native-gifted-chat';
import { KeyboardAvoidingView, Platform } from 'react-native';
export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          // Use a placeholder service for avatars
          avatar: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  }, []);
  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopColor: "#E8E8E8",
          borderTopWidth: 1,
          padding: 8
        }}
      />
    );
  };
  const customSystemMessage = props => {
    return (
      <View style={styles.ChatMessageSytemMessageContainer}>
        <Icon name="lock" color="" size={678}  />
        <Text style={styles.ChatMessageSystemMessageText}>
          Your chat is secured. Remember to be cautious about what you share
          with others.
        </Text>
      </View>
    );
  };
  return (
    
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        
      />
    
  );
}
