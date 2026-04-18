export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export const contacts: Contact[] = [
  { id: "c1", name: "Alex Rivera", avatar: "https://github.com/shadcn.png", lastMessage: "The new UI components look amazing!", timestamp: "10:25 AM", unreadCount: 2, isOnline: true },
  { id: "c2", name: "Sarah Jenkins", avatar: "https://github.com/nutlope.png", lastMessage: "Can we review the Q3 targets?", timestamp: "Yesterday", unreadCount: 0, isOnline: true },
  { id: "c3", name: "Marcus Chen", avatar: "", lastMessage: "I'll send the documents in a minute.", timestamp: "Yesterday", unreadCount: 0, isOnline: false },
  { id: "c4", name: "Elena Rodriguez", avatar: "", lastMessage: "Let's grab a coffee and talk about it.", timestamp: "Monday", unreadCount: 0, isOnline: true },
  { id: "c5", name: "David Kim", avatar: "", lastMessage: "The server migration is complete.", timestamp: "Sunday", unreadCount: 0, isOnline: false },
];

export const chatHistory: Message[] = [
  { id: "m1", senderId: "c1", text: "Hey! How is the Strix UI project going?", timestamp: "10:20 AM", isMe: false },
  { id: "m2", senderId: "me", text: "It's going great! We just finished the Finance module.", timestamp: "10:21 AM", isMe: true },
  { id: "m3", senderId: "me", text: "I'm working on the messaging system right now.", timestamp: "10:21 AM", isMe: true },
  { id: "m4", senderId: "c1", text: "That's awesome. I can't wait to see the final result.", timestamp: "10:23 AM", isMe: false },
  { id: "m5", senderId: "c1", text: "The new UI components look amazing!", timestamp: "10:25 AM", isMe: false },
];
