import { MUDChain, latticeTestnet, mudFoundry } from "@latticexyz/common/chains";

type SkyStrifeChain = MUDChain & {
  indexerUrl?: string;
};

// New Redstone testnet with 2s blocktime
export const redstone = {
  name: "Redstone Testnet",
  id: 894,
  network: "redstone-testnet",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
  rpcUrls: {
    default: {
      http: ["https://894.quarry.linfra.xyz"],
      webSocket: ["wss://894.quarry.linfra.xyz/ws"],
    },
    public: {
      http: ["https://894.quarry.linfra.xyz"],
      webSocket: ["wss://894.quarry.linfra.xyz/ws"],
    },
  },
  faucetUrl: "https://894-faucet.quarry.linfra.xyz/trpc",
  indexerUrl: "https://894-indexer.quarry.linfra.xyz/trpc",
} as const satisfies SkyStrifeChain;

export const redstoneHolesky = {
  id: 17001,
  name: "Redstone Holesky",
  network: "redstone-holesky",
  summary: {
    location: "Holesky",
  },
  description: "Redstone Holesky",
  nativeCurrency: {
    decimals: 18,
    name: "Holesky Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.holesky.redstone.xyz"],
      webSocket: ["wss://rpc.holesky.redstone.xyz/ws"],
    },
    public: {
      http: ["https://rpc.holesky.redstone.xyz"],
      webSocket: ["wss://rpc.holesky.redstone.xyz/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.holesky.redstone.xyz",
    },
  },
  // faucetUrl: "https://17001-faucet.quarry.linfra.xyz/trpc",
  indexerUrl: "https://17001-postgres-indexer.quarry.linfra.xyz",
  testnet: true,
};

export const sepolia = {
  id: 11155111,
  name: "sepolia net",
  network: "sepolia net",
  summary: {
    location: "sepolia",
  },
  description: "sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "sepolia Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://eth-sepolia.g.alchemy.com/v2/y9ieSgTb0NKlNOl6P6WxOo4Qmz94Xluz/"],
      webSocket: ["wss://eth-sepolia.g.alchemy.com/v2/y9ieSgTb0NKlNOl6P6WxOo4Qmz94Xluz/"],
    },
    public: {
      http: ["https://eth-sepolia.g.alchemy.com/v2/y9ieSgTb0NKlNOl6P6WxOo4Qmz94Xluz/"],
      webSocket: ["wss://eth-sepolia.g.alchemy.com/v2/y9ieSgTb0NKlNOl6P6WxOo4Qmz94Xluz/"],
    },
  },
  blockExplorers: {
    default: {
      name: "sepolia",
      url: "https://sepolia.etherscan.io/",
    },
  },
  // faucetUrl: "https://17001-faucet.quarry.linfra.xyz/trpc",
  indexerUrl: "https://indexer.skystrife.xyz",
  testnet: false,
};

// If you are deploying to chains other than anvil or Lattice testnet, add them here
export const supportedChains: SkyStrifeChain[] = [mudFoundry, latticeTestnet, redstone, redstoneHolesky, sepolia];
