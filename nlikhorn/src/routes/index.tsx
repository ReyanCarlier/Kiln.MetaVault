import {
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from "@/components/ui/select";
import { useGetCurrentMetaVault } from "@/hooks/metaVault";
import { addressConfig } from "@/utils/addressConfig";
import { metaVaultABI } from "@/utils/metaVaultABI";
import {
	Button,
	Grid,
	GridItem,
	HStack,
	Skeleton,
	Text,
	createListCollection,
} from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useWriteContract } from "wagmi";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<Grid
			gridTemplateColumns={"repeat(2, 1fr)"}
			gridTemplateRows={"repeat(2, 1fr)"}
			gap={2}
		>
			<GridItem colSpan={2} width={"full"}>
				<Skeleton boxSize={"full"} />
			</GridItem>
			<GridItem>
				<DemoMetaVaultTest />
			</GridItem>
			<GridItem as={Skeleton}>
				<Skeleton id="available founds" width={"full"} />
			</GridItem>
		</Grid>
	);
}

function DemoMetaVaultTest() {
	const { activeVaults, vaultAddress: currentVaultAddress } =
		useGetCurrentMetaVault();

	const [vaultAddress, setVaultAddress] = useState<string[]>([]);
	const vaultCollection = createListCollection({
		items: addressConfig.VAULT_ADDRESS.map((address, index) => ({
			label: `Vault ${index}`,
			value: address,
		})),
	});

	// Mutations
	const { writeContract, isPending: addVaultPending } = useWriteContract();

	// Handlers
	const handleAddVault = () => {
		writeContract({
			abi: metaVaultABI,
			address: currentVaultAddress as `0x${string}`,
			functionName: "addVault",
			args: [vaultAddress[0] as `0x${string}`, 10n],
		});
	};
	const handleRemoveVault = () => {
		writeContract({
			abi: metaVaultABI,
			address: currentVaultAddress as `0x${string}`,
			functionName: "removeVault",
			args: [vaultAddress[0] as `0x${string}`],
		});
	};

	return (
		<>
			<SelectRoot
				collection={vaultCollection}
				value={vaultAddress}
				onValueChange={(e) => setVaultAddress(e.value)}
			>
				<SelectLabel>Choose a vault to add</SelectLabel>
				<SelectTrigger>
					<SelectValueText placeholder="vaults" />
				</SelectTrigger>
				<SelectContent>
					{vaultCollection.items.map((vault) => (
						<SelectItem key={vault.value} item={vault}>
							{vault.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>

			{vaultAddress.length > 0 && (
				<>
					<Text>{`Current Vault: ${vaultAddress}`}</Text>
					<HStack>
						<Button onClick={handleAddVault} loading={addVaultPending}>
							AddVault
						</Button>
						<Button
							onClick={handleRemoveVault}
							loading={addVaultPending}
							disabled={
								!activeVaults.some(
									(vault) =>
										vault.toLowerCase() === vaultAddress[0].toLowerCase(),
								)
							}
						>
							Remove Vault
						</Button>
					</HStack>
				</>
			)}
		</>
	);
}
