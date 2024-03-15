import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, InputToolbar,Bubble, Avatar } from 'react-native-gifted-chat';
import { KeyboardAvoidingView, Platform } from 'react-native';
import CustomBubble from "../components/CustomBubble";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      // Initial message for space at the bottom
      {
        _id: 0,
        text: '',
        createdAt: new Date(),
        system: true,
      },
      // Example message
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  }, []);

  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: '#fff',
        borderTopWidth: 0,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: Platform.OS === 'ios' ? 10 : 5, // Adjust for iOS and Android
      }}
    />
  );

  // Dynamically adjust the vertical offset based on the platform
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 9 : 10;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? -200 : 0}
    >
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{ _id: 1 }}
        renderBubble={(props) => <CustomBubble {...props} />}
        renderInputToolbar={renderInputToolbar}
        bottomOffset={Platform.OS === "ios" ? keyboardVerticalOffset : 0}
      />
    </KeyboardAvoidingView>
  );
}
