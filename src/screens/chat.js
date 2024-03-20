import {useContext} from "react"
import Authenticator from "../auth/BionMetric"
import ChatMessageBox from '../components/ChatBox';
import ReplyMessageBar from '../components/ChatBar';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ImageBackground, StyleSheet, View ,Button} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { AuthContext } from '../auth/auth.context'; 
import ActionWheel from '../components/Ani';
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  SystemMessage,
} from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Page = () => {
  const { logout } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const insets = useSafeAreaInsets();

  const [replyMessage, setReplyMessage] = useState(null);
  const swipeableRowRef = useRef(null);

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

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{ backgroundColor: Colors.background }}
      renderActions={() => (
        <View style={{ height: 44, justifyContent: 'center', alignItems: 'center', left: 5 }}>
          <Ionicons name="add" color={Colors.primary} size={28} />
        </View>
      )}
    />
  );

  const updateRowRef = useCallback(
    (ref) => {
      if (ref && replyMessage && ref.props.children.props.currentMessage?._id === replyMessage._id) {
        swipeableRowRef.current = ref;
      }
    },
    [replyMessage]
  );

  useEffect(() => {
    if (replyMessage && swipeableRowRef.current) {
      swipeableRowRef.current.close();
      swipeableRowRef.current = null;
    }
  }, [replyMessage]);

  return (
    <ImageBackground
    
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        marginBottom: insets.bottom,
      }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        onInputTextChanged={setText}
        user={{ _id: 1 }}
        renderSystemMessage={(props) => <SystemMessage {...props} textStyle={{ color: Colors.gray }} />}
        bottomOffset={insets.bottom}
        renderAvatar={null}
        maxComposerHeight={100}
        textInputProps={styles.composer}
        renderBubble={(props) => (
          <Bubble
            {...props}
            textStyle={{
              right: { color: '#000' },
            }}
            wrapperStyle={{
              left: { backgroundColor: '#fff' },
              right: { backgroundColor: Colors.lightGreen },
            }}
          />
        )}
        renderSend={(props) => (
          <View
            style={{
              height: 44,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 14,
              paddingHorizontal: 14,
            }}>
            {/*text === '' && (
              <>
              <Ionicons name="camera-outline" color={Colors.primary} size={28} />
                <Ionicons name="mic-outline" color={Colors.primary} size={28} />
              </>
            )*/}
            {text !== '' && (
              <Send {...props} containerStyle={{ justifyContent: 'center' }}>
                <Ionicons name="send" color={Colors.primary} size={28} />
              </Send>
            )}
          </View>
        )}
        renderInputToolbar={renderInputToolbar}
        renderChatFooter={() => <ReplyMessageBar clearReply={() => setReplyMessage(null)} message={replyMessage} />}
        onLongPress={(context, message) => setReplyMessage(message)}
        renderMessage={(props) => (
          <ChatMessageBox {...props} setReplyOnSwipeOpen={setReplyMessage} updateRowRef={updateRowRef} />
        )}
      />
      <Button title="Logout" onPress={logout} />
        
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  composer: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    paddingHorizontal: 10,
    paddingTop: 8,
    fontSize: 16,
    marginVertical: 4,
  },
});

export default Page;
