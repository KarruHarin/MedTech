"use client"

import {
    Card, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    headerTitle:string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerTitle,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}: CardWrapperProps) => {
    return (
        <Card className="w-[30vw]">
            <CardHeader>
                <Header label={headerLabel} title={headerTitle}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
            {/* <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref}/>
            </CardFooter> */}
        </Card>
    )
}