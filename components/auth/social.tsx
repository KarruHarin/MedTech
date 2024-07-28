"use client";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

import { IconType } from 'react-icons';

export const Social = () => {
    interface ButtonWithIconProps {
        label: string;
        Icon: IconType;
        onClick: () => void;
    }

    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        });
    }

    const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ label, Icon, onClick }) => (
        <div
            className="flex items-center justify-center bg-white border rounded-md shadow-sm cursor-pointer hover:bg-gray-100 p-2 w-[13vw] mx-0 my-2"
            onClick={onClick}
        >
            <Icon className="w-5 h-5 mr-2" />
            <span className="text-base">{label}</span>
        </div>
    );

    return (
        <div className="flex space-x-4">
            <ButtonWithIcon
                label="Sign up with Google"
                Icon={FcGoogle}
                onClick={() => onClick("google")}
            />
            <ButtonWithIcon
                label="Sign up with GitHub"
                Icon={FaGithub}
                onClick={() => onClick("github")}
            />
        </div>
    )
}
