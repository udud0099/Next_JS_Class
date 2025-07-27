"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Avatar, X } from "@/components/icons/icon";
import { X } from "lucide-react";

type Message = {
  senderName: string;
  senderInitials: string;
  avatarSrc?: string;
  message: string;
  time: string;
  isUser: boolean;
};

export default function AgenticChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pendingStep, setPendingStep] = useState<number | null>(null);
  const [projectName, setProjectName] = useState("NextGen Pipeline");
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      senderName: "You",
      senderInitials: "Y",
      message: input,
      time: new Date().toLocaleTimeString(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    if (pendingStep !== null) {
      handleBotStep(pendingStep + 1, input);
    } else {
      // Start bot process
      handleBotStep(0);
    }
  };

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        senderName: "Future AI",
        senderInitials: "FA",
        message: text,
        time: new Date().toLocaleTimeString(),
        isUser: false,
      },
    ]);
  };

  const handleBotStep = async (step: number, userResponse?: string) => {
    setPendingStep(step);

    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    switch (step) {
      case 0:
        await delay(1000);
        addBotMessage("Analyzing input...");
        await delay(1200);
        addBotMessage("Surfing the platform...");
        await delay(1200);
        addBotMessage(`Creating a project called "${projectName}"`);
        await delay(1200);
        addBotMessage("Creating a source layout...");

        await delay(1000);
        addBotMessage(
          "Could you share me the name and description of the source layout?"
        );
        break;

      case 1:
        addBotMessage("Thanks for sharing the source layout.");
        await delay(1000);
        addBotMessage("Could you share me the source dictionary?");
        break;

      case 2:
        addBotMessage("Thanks for sharing the source dictionary.");
        await delay(1000);
        addBotMessage("Creating a destination layout...");
        await delay(1000);
        addBotMessage(
          "Could you share me the name and description of the destination layout?"
        );
        break;

      case 3:
        addBotMessage("Thank you for sharing the destination layout.");
        await delay(1000);
        addBotMessage("Could you share me the destination dictionary?");
        break;

      case 4:
        addBotMessage("Thanks for sharing the destination dictionary.");
        await delay(1000);
        addBotMessage("Touching up final refinements...");
        await delay(1000);
        addBotMessage("Almost done...");
        await delay(1500);
        addBotMessage(
          `✅ A project with source and destination layout has been created.\nYou can preview it on the right side or follow this link to view: [View Project](#)`
        );
        setPendingStep(null);
        break;

      default:
        setPendingStep(null);
    }
  };

  return (
    <aside className="max-w-[320px] w-full flex flex-col gap-3 p-3">
      <div
        ref={chatRef}
        className="flex flex-col gap-4 h-[calc(100vh-122px)] overflow-y-auto scrollbar-hide bg-white/4 border border-white/6 p-3 rounded-12"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-2 items-end ${
              msg.isUser ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Avatar className="w-[20px] h-[20px] text-white">
              <AvatarImage src={msg.avatarSrc} alt={msg.senderName} />
              <AvatarFallback>{msg.senderInitials}</AvatarFallback>
            </Avatar>

            <div
              className={`flex flex-col gap-1 items-${
                msg.isUser ? "end" : "start"
              }`}
            >
              <div
                className={`p-2 rounded-lg text-14 shadow ${
                  msg.isUser
                    ? "bg-emerald-600 text-white"
                    : "bg-black/10 text-black/80"
                }`}
              >
                {msg.message}
              </div>
              <div
                className={`flex items-center gap-2 text-10 text-black/70 ${
                  msg.isUser ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <span>{msg.senderName}</span>
                <span>{msg.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="w-full"
      >
        <input
          title="Enter your message"
          className="w-full bg-black/10 px-3 py-2 rounded-12 placeholder:text-black placeholder:text-12 text-black"
          placeholder="Enter your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </aside>
  );
}
