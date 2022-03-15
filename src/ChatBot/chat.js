// import React, {useState, useCallback, useEffect, useRef} from 'react';
// import {io} from 'socket.io-client';
// import {GiftedChat, Bubble} from 'react-native-gifted-chat';

// import {View, Text, SafeAreaView, LogBox} from 'react-native';
// const botAvatar = require('./assets/images/mascot.png');

// const chatBot = () => {
//   // LogBox.ignoreAllLogs()

//   const socket = useRef();
//   const Bot = {
//     _id: 2,
//     name: 'Bot',
//     avatar: botAvatar,
//   };
//   const [messages, setMessages] = useState([
//     {
//       _id: 0,
//       createdAt: new Date().getTime(),
//       user: Bot,
//       text: 'How many I help you',
//       quickReplies: {
//         type: 'radio',
//         keepIt: true,
//         values: [
//           {
//             title:
//               'I want to improve my fitness knowledge. Recommend me some sources',
//             value:
//               'I want to improve my fitness knowledge. Recommend me some sources',
//           },
//           {
//             title: 'I have complete fitness goal. What to do now',
//             value: 'I have complete fitness goal. What to do now',
//           },
//           {
//             title: 'I think im skinny fat',
//             value: 'I think im skinny fat',
//           },
//           {
//             title: 'I need basic fitness',
//             value: 'I need basic fitness',
//           },
//           {
//             title: "I don't know what goal is good for me",
//             value: "I don't know what goal is good for me",
//           },
//           {
//             title: 'I want to have strength',
//             value: 'I want to have strength',
//           },
//           {
//             title:
//               "I have a history of dieting and can't go any lower on the calories",
//             value:
//               "I have a history of dieting and can't go any lower on the calories",
//           },
//           {
//             title:
//               "I have a history of dieting and can't go any lower on the calories",
//             value:
//               "I have a history of dieting and can't go any lower on the calories",
//           },
//           {
//             title: 'I just want to improve my health a bit',
//             value: 'I just want to improve my health a bit',
//           },
//           //=======================
//         ],
//       },
//     },
//   ]);
//   const sendMessage = async message => {
//     socket.current.emit('chatMessage', message);
//   };

//   useEffect(() => {
//     socket.current = io('ws://172.24.32.1:4000', {jsonp: false});
//     socket.current.on('chatMessage', msg => {
//       sendBotResponse(msg);
//     });
//   }, [messages]);
//   const onSend = async message => {
//     console.log('message');
//     setMessages(previousMessages =>
//       GiftedChat.append(previousMessages, message),
//     );
//     sendMessage(message[0].text);
//   };

//   const onQuickReply = message => {
//     // setMessages(null)
//     const msg = {
//       _id: messages.length,
//       text: message[0].value,
//       createdAt: new Date().getTime(),
//       user: {_id: 1},
//     };
//     setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
//     sendMessage(message[0].title);
//   };
//   const sendBotResponse = text => {
//     let msg;
//     if (text.type === 'Message') {
//       msg = {
//         _id: messages.length,
//         text: text.Data,
//         createdAt: new Date().getTime(),
//         user: Bot,
//       };
//     } else if (text.type === 'Radio') {
//       if (text.size === 1) {
//         msg = {
//           _id: messages.length,
//           createdAt: new Date().getTime(),
//           user: Bot,
//           scroll: horizontal,
//           text: text.Data,
//           quickReplies: {
//             type: 'radio', // or 'checkbox',
//             keepIt: true,
//             values: [
//               //=======================
//               {
//                 title: text.Data1,
//                 value: text.DataValue1,
//               },
//               //=======================
//             ],
//           },
//         };
//       } else if (text.size === 2) {
//         msg = {
//           _id: messages.length,
//           createdAt: new Date().getTime(),
//           user: Bot,
//           text: text.Data,
//           quickReplies: {
//             type: 'radio', // or 'checkbox',
//             keepIt: true,
//             values: [
//               //=======================
//               {
//                 title: text.Data1,
//                 value: text.DataValue1,
//               },
//               {
//                 title: text.Data2,
//                 value: text.DataValue2,
//               },

//               //=======================
//             ],
//           },
//         };
//       } else if (text.size === 3) {
//         msg = {
//           _id: messages.length,
//           createdAt: new Date().getTime(),
//           user: Bot,
//           text: text.Data,
//           quickReplies: {
//             type: 'radio', // or 'checkbox',
//             keepIt: true,
//             values: [
//               //=======================
//               {
//                 title: text.Data1,
//                 value: text.DataValue1,
//               },
//               {
//                 title: text.Data2,
//                 value: text.DataValue2,
//               },
//               {
//                 title: text.Data3,
//                 value: text.DataValue3,
//               },
//               //=======================
//             ],
//           },
//         };
//       } else if (type.size === 4) {
//         msg = {
//           _id: messages.length,
//           createdAt: new Date().getTime(),
//           user: Bot,
//           text: text.Data,
//           quickReplies: {
//             type: 'radio', // or 'checkbox',
//             keepIt: true,
//             values: [
//               //=======================
//               {
//                 title: text.Data1,
//                 value: text.DataValue1,
//               },
//               {
//                 title: text.Data2,
//                 value: text.DataValue2,
//               },
//               {
//                 title: text.Data3,
//                 value: text.DataValue3,
//               },
//               {
//                 title: text.Data4,
//                 value: text.DataValue4,
//               },
//               //=======================
//             ],
//           },
//         };
//       } else {
//         msg = {
//           _id: messages.length,
//           createdAt: new Date().getTime(),
//           user: Bot,
//           text: text.Data,
//           quickReplies: {
//             type: 'radio', // or 'checkbox',
//             keepIt: true,
//             values: [
//               //=======================
//               {
//                 title: text.Data1,
//                 value: text.DataValue1,
//               },
//               {
//                 title: text.Data2,
//                 value: text.DataValue2,
//               },
//               {
//                 title: text.Data3,
//                 value: text.DataValue3,
//               },
//               {
//                 title: text.Data4,
//                 value: text.DataValue4,
//               },
//               {
//                 title: text.Data5,
//                 value: text.DataValue5,
//               },
//               //=======================
//             ],
//           },
//         };
//       }
//     } else if (text.type === 'Photo') {
//     } else {
//       msg = {
//         _id: messages.length,
//         text: text.Data,
//         createdAt: new Date().getTime(),
//         user: Bot,
//       };
//     }
//     setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
//   };
//   const renderBubble = props => {
//     // console.log("=====================================");
//     //  console.log(props.currentMessage )
//     // if (props.currentMessage.isOptions) {
//     //   return (
//     //     <ScrollView style={{backgroundColor: 'white'}} horizontal={true}>
//     //       {props.currentMessage.data.radio((item) => (

//     //         <Text>ok</Text>

//     //       ))}
//     //     </ScrollView>
//     //   );
//     // }

//     return (
//       <Bubble
//         {...props}
//         textStyle={{right: {color: 'white'}}}
//         wrapperStyle={{
//           left: {backgroundColor: '#F9F7DC'},
//           right: {backgroundColor: 'blue'},
//         }}
//       />
//     );
//   };
//   return (
//     <View style={{flex: 1, backgroundColor: '#fff'}}>
//       <GiftedChat
//         messages={messages}
//         // disableComposer={true}

//         // text={' '}
//         onSend={message => onSend(message)}
//         onQuickReply={quickReply => onQuickReply(quickReply)}
//         renderBubble={rb => renderBubble(rb)}
//         user={{_id: 1}}
//       />
//     </View>
//   );
// };
// export default chatBot;

import React, {useState, useCallback, useEffect, useRef} from 'react';
import {io} from 'socket.io-client';
import {Card, Button} from 'react-native-elements';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';

import {View, Text, SafeAreaView, ScrollView} from 'react-native';
const botAvatar = require('./assets/images/mascot.png');

const chatBot = () => {
  const socket = useRef();
  const Bot = {
    _id: 2,
    name: 'Bot',
    avatar: botAvatar,
  };
  const [messages, setMessages] = useState([
    {
      _id: 0,
      createdAt: new Date().getTime(),
      user: Bot,
      text: 'How many I help you',
      quickReplies: {
        type: 'radio',
        keepIt: true,
        values: [
          {
            title:
              'I want to improve my fitness knowledge. Recommend me some sources',
            value:
              'I want to improve my fitness knowledge. Recommend me some sources',
          },
          {
            title: 'I think im skinny fat',
            value: 'I think im skinny fat',
          },
          {
            title: 'I have complete fitness goal. What to do now',
            value: 'I have complete fitness goal. What to do now',
          },
          {
            title: 'I want to improve overall general health',
            value: 'I want to improve overall general health',
          },
          {
            title: "I have a history of dieting and I can't go any lower on calories",
            value: "I have a history of dieting and I can't go any lower on calories",
          },
          
          //=======================
        ],
      },
    },
  ]);
  useEffect(() => {
    socket.current = io('ws://172.24.32.1:4000', {jsonp: false});

    socket.current.on('chatMessage', msg => {
      sendBotResponse(msg);
      // console.log(msg);
    });
  }, [messages]);
  const onSend = async message => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message),
    );
    socket.current.emit('chatMessage', message[0].text);
  };

  const onQuickReply = message => {

    if(message[0].title=='I want to improve my fitness knowledge. Recommend me some sources' || message[0].title=='I think im skinny fat' || message[0].title=='I have complete fitness goal. What to do now' || message[0].title=='I want to improve overall general health' || message[0].title=="I have a history of dieting and I can't go any lower on calories"  ){
      setMessages([
        {
          _id: 0,
          createdAt: new Date().getTime(),
          user: Bot,
          text: 'How many I help you',
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title:
                  'I want to improve my fitness knowledge. Recommend me some sources',
                value:
                  'I want to improve my fitness knowledge. Recommend me some sources',
              },
              {
                title: 'I think im skinny fat',
                value: 'I think im skinny fat',
              },
              {
                title: 'I have complete fitness goal. What to do now',
                value: 'I have complete fitness goal. What to do now',
              },
              {
                title: 'I want to improve overall general health',
                value: 'I want to improve overall general health',
              },
              {
                title: "I have a history of dieting and I can't go any lower on calories",
                value: "I have a history of dieting and I can't go any lower on calories",
              },
              
              //=======================
            ],
          },
        },
      ])
      
    }
    const msg = {
      _id: messages.length + 1,
      text: message[0].value,
      createdAt: new Date().getTime(),
      user: {_id: 1},
    };

    setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
    socket.current.emit('chatMessage', message[0].title);
    // console.log(message)
  };
  const sendBotResponse = text => {
    let msg;
    if (text.type === 'Message') {
      msg = {
        _id: messages.length,
        text: text.Data,
        createdAt: new Date().getTime(),
        user: Bot,
      };
    } else if (text.type === 'Radio') {
      if (text.size === 1) {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          scroll: horizontal,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              //=======================
            ],
          },
        };
      } else if (text.size === 2) {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              {
                title: text.Data2,
                value: text.DataValue2,
              },

              //=======================
            ],
          },
        };
      } else if (text.size === 3) {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              {
                title: text.Data2,
                value: text.DataValue2,
              },
              {
                title: text.Data3,
                value: text.DataValue3,
              },
              //=======================
            ],
          },
        };
      } else if (type.size === 4) {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              {
                title: text.Data2,
                value: text.DataValue2,
              },
              {
                title: text.Data3,
                value: text.DataValue3,
              },
              {
                title: text.Data4,
                value: text.DataValue4,
              },
              //=======================
            ],
          },
        };
      } else {
        msg = {
          _id: messages.length,
          createdAt: new Date().getTime(),
          user: Bot,
          text: text.Data,
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              //=======================
              {
                title: text.Data1,
                value: text.DataValue1,
              },
              {
                title: text.Data2,
                value: text.DataValue2,
              },
              {
                title: text.Data3,
                value: text.DataValue3,
              },
              {
                title: text.Data4,
                value: text.DataValue4,
              },
              {
                title: text.Data5,
                value: text.DataValue5,
              },
              //=======================
            ],
          },
        };
      }
    } else if (text.type === 'Photo') {
      msg = {
        _id: messages.length,
        text: text.text,
        createdAt: new Date().getTime(),
        user: Bot,
        isOptions: true,
        data: text.data,
      };
    } else if (text.type === 'Recommend') {
      msg = {
        _id: messages.length,
        text: text.text,
        createdAt: new Date().getTime(),
        user: Bot,
        isRecommend: true,
        data: text.data,
      };
    } else {
      msg = {
        _id: messages.length,
        text: text.Data,
        createdAt: new Date().getTime(),
        user: Bot,
      };
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
  };
  const renderBubble = props => {
    //  console.log(props.currentMessage.text)
    if (props.currentMessage.isOptions) {
      return (
        <View>
          <Text>{props.currentMessage.text}</Text>

          <ScrollView style={{backgroundColor: 'white'}} horizontal={true}>
            {props.currentMessage.data.map(item => (
              <Card
                containerStyle={{
                  padding: 0,
                  borderRadius: 15,
                  paddingBottom: 7,
                  overflow: 'hidden',
                }}
                key={item.title}>
                <Card.Image
                  style={{width: 220, height: 110}}
                  resizeMode="cover"
                  source={{uri: item.image}}></Card.Image>
                <Card.Divider />
                <Card.Title>{item.title}</Card.Title>
                <Button
                  title="Choose"
                  style={{height: 35}}
                  onPress={() => {
                    socket.current.emit('chatMessage', item.title);
                    // setMessages(previousMessages => GiftedChat.append(previousMessages, msg));

                    // sendBotResponse(item.title)
                  }}
                />
              </Card>
            ))}
          </ScrollView>
        </View>
      );
    } else if (props.currentMessage.isRecommend) {
      return (
        <ScrollView style={{backgroundColor: 'white'}} horizontal={false}>
           <Text >{props.currentMessage.text}</Text>
          {props.currentMessage.data.map(item => (
            <Card
              containerStyle={{
                padding: 8,
                borderRadius: 15,
                paddingBottom: 7,
                overflow: 'hidden',
              }}
              key={item.tipKey}>
              <Text>{item.tip}</Text>
            </Card>
          ))}
          <Button
            title="Pricest Recommendations"
            style={{height: 25,margin: 20}}
            onPress={() => {
              alert("Not completed yet")
            }}
          />
        </ScrollView>
      );
    }
    return (
      <Bubble
        {...props}
        textStyle={{right: {color: 'white'}}}
        wrapperStyle={{
          left: {backgroundColor: 'yellow'},
          right: {backgroundColor: 'pink'},
        }}
      />
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <GiftedChat
        messages={messages}
        disableComposer={true}
        text={' '}
        onSend={message => onSend(message)}
        onQuickReply={quickReply => onQuickReply(quickReply)}
        renderBubble={rb => renderBubble(rb)}
        user={{_id: 1}}
      />
    </View>
  );
};
export default chatBot;
