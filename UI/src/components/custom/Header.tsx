import { Image, Container, HStack, Heading } from "@chakra-ui/react";
import { useLocation } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ColorModeButton } from "../ui/color-mode";
import { DisconnectButton } from "../web3/disconnectButton";

const pathToTitle: { [key: string]: string } = {
	"/": "Dashboard",
	"/earn": "Earn",
	"/vault": "Vault",
};

export function Header() {
	const { pathname } = useLocation();

	const title = useMemo(() => pathToTitle[pathname], [pathname]);
	useState(() => {
		document.title = `Nlik'horne | ${title}`;
	});

	return (
		<Container
			zIndex={"sticky"}
			position={"sticky"}
			top={3}
			left={0}
			padding={0}
		>
			<HStack
				justify={"space-between"}
				paddingY={2}
				paddingX={3}
				rounded={"md"}
				shadow={"sm"}
				borderWidth={"1px"}
				borderColor={"border"}
				colorPalette={"orange"}
				bgColor={"bg"}
			>
				<Image src="../../../public/nlik.svg" bg={"bg.subtle"} />
				<Heading>{title}</Heading>
				<HStack>
					<DisconnectButton />
					<ColorModeButton />
				</HStack>
			</HStack>
		</Container>
	);
}
