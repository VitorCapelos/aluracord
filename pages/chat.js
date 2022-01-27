import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from "react";
import { useRouter } from "next/router"

export default function ChatPage() {
    function Title(props) {
        const Tag = props.tag || 'h1';
        return (
            <>
            <Tag>{props.children}</Tag>
        
            <style jsx>
                {`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals["000"]};
                    font-size: 24px;
                    font-weight: 600;
                }
                `}
            </style>
            </>
        );
    }

    return (
        <>
            <Box
            styleSheet={{
            display: "flex",
            alignItems: "center",
            //Justifica o chat
            justifyContent: "center",
            backgroundColor: appConfig.theme.colors.primary[200],
            backgroundImage:
                "url(https://wallpapercave.com/wp/wp10215713.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            }}
            >
            <Box
            styleSheet={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: {
                xs: "column",
                sm: "row",
                },
                width: "80%",
                // maxWidth: "700px",
                height: "80%",
                borderRadius: "5px",
                padding: "32px",
                margin: "16px",
                boxShadow: "0 2px 10px 0 rgb(0 0 0 / 50%)",
                backgroundColor: appConfig.theme.colors.neutrals[900],
            }}
            >
            </Box>
        </Box>
        </>
    )
}