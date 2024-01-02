import { Space } from 'antd';
import Image from 'next/image';

interface Message {
    user: string;
    text: string;
    type?: string; // Added type for the recipient
}

interface MessageBubbleProps extends Message { }

const MessageBubble: React.FC<MessageBubbleProps> = ({ type, user, text }) => (
    <div className={`message-bubble ${type === 'Recipient' ? 'recipient' : ''}`}>
        <div className='user-image'>
            <Image src='/image/testimonial.png' width={30} height={30} alt={`Profile of ${user}`} className='rounded-full w-12 h-12' />
        </div>
        <div className='message-content'>
            <p className='message-text'>{text}</p>
        </div>
    </div>
);

const ChatMessage: React.FC = () => {
    const messages: Message[] = [
        {
            user: 'Sodiq',
            text: 'This is the User message!',
        },
        {
            user: 'Sodiq',
            text: 'This is the User message 2!',
            type: 'Recipient',
        },
    ];

    return (
        <Space className='chat-container'>
            {messages?.map((msg, index) => (
                <MessageBubble key={index} {...msg} />
            ))}
        </Space>
    );
};

export default ChatMessage;
