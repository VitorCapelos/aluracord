import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from "react";
import { useRouter } from "next/router"

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

export default function PaginaInicial() {
    const [username, setUsername] = React.useState("VitorCapelos");
    const roteamento = useRouter();

    console.log(roteamento);
    return (
        <>
        <Box
            styleSheet={{
            display: "flex",
            alignItems: "center",
            //Justifica o login
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
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 50%)",
            backgroundColor: appConfig.theme.colors.neutrals[900],
        }}
        >
            {/* Formulário */}
            <Box
            
                as="form"
                onSubmit={function (event) {
                    event.preventDefault();
                    roteamento.push("/chat")
                }}
                styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", sm: "50%" },
                textAlign: "center",
                marginBottom: "32px",
                }}
            >
                <Image 
                styleSheet={{
                    alignItems: "right"
                    }}
                width="60"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bf05683-a63e-4860-9910-eaa626e4a96c/ddy4qy2-559ff5f5-2945-41ab-bf0b-4cf235356a62.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiZjA1NjgzLWE2M2UtNDg2MC05OTEwLWVhYTYyNmU0YTk2Y1wvZGR5NHF5Mi01NTlmZjVmNS0yOTQ1LTQxYWItYmYwYi00Y2YyMzUzNTZhNjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EzOIlVV5Y9upYV3h6LjGDIEiC9pwOn_qJd3ToEFuYs8"
                />
                <Title>Boas vindas!</Title>
                <Text
                variant="body3"
                styleSheet={{
                    marginBottom: "32px",
                    color: appConfig.theme.colors.neutrals[200],
                }}
                >
                {appConfig.name}
                </Text>

                <TextField
                value={username}
                onChange={function Handle(event) { 
                    setUsername(event.target.value)
                    }}
                fullWidth
                textFieldColors={{
                    neutral: {
                    textColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[700],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                    },
                }}
                
                />

                <Button
                type="submit"
                label="Entrar"
                fullWidth
                buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary[700],
                    mainColorLight: appConfig.theme.colors.primary[400],
                    mainColorStrong: appConfig.theme.colors.primary[800],
                }}
                />
            </Box>
            {/* Formulário */}

            {/* Photo Area */}
            <Box
                styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "200px",
                padding: "16px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: "1px solid",
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: "10px",
                flex: 1,
                minHeight: "240px",
                }}
            >
                <Image
                styleSheet={{
                    borderRadius: "50%",
                    marginBottom: "16px",
                }}
                src={`https://github.com/${username}.png`}
                />
                <Text
                variant="body4"
                styleSheet={{
                    color: appConfig.theme.colors.neutrals[200],
                    backgroundColor: appConfig.theme.colors.neutrals[900],
                    padding: "3px 10px",
                    borderRadius: "1000px",
                }}
                >
                {username}
                </Text>
            </Box>
            {/* Photo Area */}
            </Box>
        </Box>
        </>
    );
}
