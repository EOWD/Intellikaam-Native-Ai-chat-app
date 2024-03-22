import { useContext } from "react";
import Authenticator from "../auth/BionMetric";
import ChatMessageBox from "../components/ChatBox";
import ReplyMessageBar from "../components/ChatBar";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { ImageBackground, StyleSheet, View, Button, Text } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { AuthContext } from "../auth/auth.context";
import ActionWheel from "../components/Ani";
import Picker from '../components/picker';
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  SystemMessage,
} from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Page = () => {
  const { logout } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const insets = useSafeAreaInsets();
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [replyMessage, setReplyMessage] = useState(null);
  const swipeableRowRef = useRef(null);
  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
    console.log("toggleSuggestions");
  };
  const SuggestionsComponent = () => {
    return (
      <>
      <Picker/>
        <View
          style={{
            flex: "auto",
            flexDirection: "row",
            justifyContent: "center",
            padding: 20,
            gap:10,
          }}
        >
          <View style={styles.composer2}>
            <Text style={{ color: "gray" }}>what is bio-teck?</Text>
          </View>
           
          <View style={styles.composer2} >
          <Text style={{ color: "gray" }}>what is bio-teck?</Text>
            </View>
        </View>
      </>
    );
  };
  useEffect(() => {
    setMessages([
      // Initial message for space at the bottom
      {
        _id: 0,
        text: "",
        createdAt: new Date(),
        system: true,
      },
      // Example message
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{ backgroundColor: Colors.background }}
      textInputStyle={styles.composer}
      renderActions={() => (
        <View
          style={{
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            left: 5,
          }}
        >
          <Ionicons
            name="add"
            onPress={toggleSuggestions}
            color={Colors.primary}
            size={28}
          />
        </View>
      )}
    />
  );

  const updateRowRef = useCallback(
    (ref) => {
      if (
        ref &&
        replyMessage &&
        ref.props.children.props.currentMessage?._id === replyMessage._id
      ) {
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
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <ImageBackground
        style={{
          flex: 1,
          backgroundColor: "#010004",
          marginBottom: insets.bottom,
        }}
      >
      
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          onInputTextChanged={setText}
          user={{ _id: 1 }}
          renderSystemMessage={(props) => (
            <SystemMessage {...props} textStyle={{ color: Colors.gray }} />
          )}
          bottomOffset={insets.bottom}
          renderAvatar={null}
          maxComposerHeight={100}
          textInputProps={styles.composer}
          renderBubble={(props) => (
            <Bubble
              {...props}
              textStyle={{
                right: { color: "#DCDCE2" },
                left: { color: "#DCDCE2" },
              }}
              wrapperStyle={{
                left: { backgroundColor: "#091061" },
                right: { backgroundColor: "#4B57E1" },
              }}
            />
          )}
          renderSend={(props) => (
            <View
              style={{
               
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                paddingHorizontal: 14,
              }}
            >
              {/*text === '' && (
              <>
              <Ionicons name="camera-outline" color={Colors.primary} size={28} />
                <Ionicons name="mic-outline" color={Colors.primary} size={28} />
              </>
            )*/}
              {text !== "" && (
                <Send {...props} containerStyle={{ justifyContent: "center" }}>
                  <Ionicons name="send" color={Colors.primary} size={28} />
                </Send>
              )}
            </View>
          )}
          renderInputToolbar={renderInputToolbar}
          renderChatFooter={() => (
            <ReplyMessageBar
              clearReply={() => setReplyMessage(null)}
              message={replyMessage}
            />
          )}
        />
        <View style={{backgroundColor:'gray',width: '100%'}}></View>
        {showSuggestions && <SuggestionsComponent />}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  composer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 20,
    paddingTop: 8,
    fontSize: 16,
    marginVertical: 4,
    backgroundColor: "black",
    color: "white",
  },
  composer2: {
    height: '100%',
    gap:15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 20,
    paddingTop: 8,
    fontSize: 16,
    marginVertical: 4,
    backgroundColor: "black",
    color: "white",
  },
});

export default Page;
