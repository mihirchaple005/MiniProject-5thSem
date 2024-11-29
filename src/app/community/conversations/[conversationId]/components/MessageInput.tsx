"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    type?: string;
    errors: FieldErrors;
    required?: boolean;
    placeholder?: string; 
}

const MessageInput: React.FC<MessageInputProps> = ({ placeholder, id, type, register, required, errors }) => {
    return (
        <div className="relative w-full ">
            <input type={type} autoComplete={id} id={id} {...register(id, { required: required })} placeholder={placeholder} className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none" />
        </div>
    )
}

export default MessageInput;