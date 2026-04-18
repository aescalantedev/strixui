"use client";

import * as React from "react";
import { 
  Search, 
  Edit, 
  Phone, 
  Video, 
  MoreVertical, 
  Paperclip, 
  Send
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { contacts, chatHistory as initialChatHistory } from "@/lib/mock-messages";
import { cn } from "@/lib/utils";

export default function MessagesPage() {
  const [activeContactId, setActiveContactId] = React.useState("c1");
  const activeContact = contacts.find(c => c.id === activeContactId) || contacts[0];
  
  // ESTADOS DE INTERACTIVIDAD
  const [messages, setMessages] = React.useState(initialChatHistory);
  const [inputValue, setInputValue] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  // AUTO-SCROLL AL FONDO
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // FUNCIONALIDAD DE ENVÍO
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      senderId: "me",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="flex-1 flex overflow-hidden bg-card rounded-2xl border border-border/40 shadow-sm">
        
        {/* PANEL IZQUIERDO: CONTACT LIST */}
        <div className="w-full md:w-[350px] flex flex-col border-r border-border/40 shrink-0">
          <div className="p-6 border-b border-border/40">
            <div className="flex items-center justify-between mb-6">
               <h2 className="text-xl font-black uppercase tracking-tight">Messages</h2>
               <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                  <Edit className="h-4 w-4" />
               </Button>
            </div>
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search contacts..." 
                className="pl-10 h-10 rounded-xl border-border/50 bg-secondary/20 focus-visible:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-none">
            {contacts.map((contact) => (
              <div 
                key={contact.id} 
                onClick={() => setActiveContactId(contact.id)}
                className={cn(
                  "p-4 flex items-center gap-4 cursor-pointer transition-all hover:bg-muted/50 border-b border-border/20 last:border-0",
                  activeContactId === contact.id ? "bg-primary/5 border-l-4 border-l-primary" : "border-l-4 border-l-transparent"
                )}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12 border border-border/50">
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback className="bg-primary/5 text-primary text-xs font-black">
                      {contact.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {contact.isOnline && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-background" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-black text-sm tracking-tight truncate">{contact.name}</span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-50">{contact.timestamp}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate font-medium">
                    {contact.id === activeContactId && messages.length > 0 
                      ? messages[messages.length - 1].text 
                      : contact.lastMessage}
                  </p>
                </div>
                {contact.unreadCount > 0 && contact.id !== activeContactId && (
                   <Badge className="h-5 min-w-[20px] rounded-full bg-primary text-primary-foreground border-none font-black text-[10px] px-1.5 flex items-center justify-center">
                      {contact.unreadCount}
                   </Badge>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PANEL DERECHO: CHAT ACTIVO */}
        <div className="flex-1 flex flex-col min-w-0 bg-secondary/5">
          
          {/* HEADER DEL CHAT */}
          <div className="p-4 px-6 border-b border-border/40 bg-background flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Avatar className="h-10 w-10 border border-border/50">
                  <AvatarImage src={activeContact.avatar} />
                  <AvatarFallback className="bg-primary/5 text-primary text-xs font-black">
                     {activeContact.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
               </Avatar>
               <div className="flex flex-col">
                  <span className="font-black text-sm tracking-tight">{activeContact.name}</span>
                  <div className="flex items-center gap-1.5">
                     <div className={cn("h-1.5 w-1.5 rounded-full", activeContact.isOnline ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground/30")} />
                     <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-70">
                        {activeContact.isOnline ? "Online Now" : "Offline"}
                     </span>
                  </div>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
               </Button>
               <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-muted-foreground hover:text-primary transition-colors">
                  <Video className="h-4 w-4" />
               </Button>
               <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-muted-foreground">
                  <MoreVertical className="h-4 w-4" />
               </Button>
            </div>
          </div>

          {/* ÁREA DE MENSAJES (SCROLLABLE) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-300",
                  message.isMe ? "items-end" : "items-start"
                )}
              >
                <div className={cn(
                  "max-w-[70%] px-4 py-3 shadow-sm transition-all duration-300",
                  message.isMe 
                    ? "bg-primary text-primary-foreground rounded-l-2xl rounded-tr-2xl" 
                    : "bg-background border border-border/40 text-foreground rounded-r-2xl rounded-tl-2xl"
                )}>
                  <p className="text-sm font-medium leading-relaxed">{message.text}</p>
                </div>
                <span className="mt-1.5 text-[9px] font-black uppercase tracking-tighter text-muted-foreground opacity-50">
                  {message.timestamp}
                </span>
              </div>
            ))}
            {/* ANCLA PARA EL AUTO-SCROLL */}
            <div ref={messagesEndRef} />
          </div>

          {/* ÁREA DE INPUT INTERACTIVA */}
          <div className="p-4 px-6 bg-background border-t border-border/40">
             <div className="flex items-center gap-4 bg-secondary/30 p-2 pl-4 rounded-2xl border border-border/20 group focus-within:border-primary/30 transition-all shadow-inner">
                <Button variant="ghost" size="icon" className="rounded-xl h-9 w-9 text-muted-foreground hover:text-primary transition-colors shrink-0">
                   <Paperclip className="h-4 w-4" />
                </Button>
                <Input 
                  placeholder="Type your message here..." 
                  className="border-none bg-transparent shadow-none focus-visible:ring-0 text-sm font-medium"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="rounded-xl h-10 w-10 p-0 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 shrink-0 transition-all active:scale-90 disabled:opacity-50 disabled:grayscale"
                >
                   <Send className="h-4 w-4" />
                </Button>
             </div>
             <p className="mt-2 text-center text-[9px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em]">
                Secure End-to-End Encryption Active
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
