import type { IEunoia, IMeetEunoia } from "../Interfaces";

export const eunoiaData: IEunoia[] = [
    {
        id: 1,
        title: "Track Your Emotions Easily",
        description: "Monitor and understand your emotional patterns with our intuitive tracking system.",
        icon: "Smile"
    },
    {
        id: 2,
        title: "Get Personalized Recommendations",
        description: "Receive tailored suggestions and insights based on your emotional journey.",
        icon: "Target"
    },
    {
        id: 3,
        title: "Chat With An AI For Guidance And Motivations",
        description: "Connect with our AI companion for supportive conversations and motivation.",
        icon: "MessageCircle"
    }
];

export const meetEunoiaData: IMeetEunoia[] = [
    {
        id: 1,
        name: "Sarah Johns",
        feedback: "Eunoia feels like a safe space. Logging my mood every day helps me understand myself better, and the AI's gentle reminders keep me motivated",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Karl Henrik",
        feedback: "I never thought a chatbot could feel this comforting. Whenever I'm stressed, Eunoia suggests breathing exercises that actually calm me down",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
];
