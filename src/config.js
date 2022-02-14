export const address = "0xCDbd74075Fe5a806A2aABD5d2f49bB23b2ebCF43";

export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_challengeHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_challengerMons",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_opponentMons",
        type: "uint256[]",
      },
    ],
    name: "AcceptChallenge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_challengeHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_xpGained",
        type: "uint16",
      },
    ],
    name: "AnnounceRoundWinner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_challengeHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "increasedMoncoins",
        type: "uint16",
      },
    ],
    name: "AnnounceWinner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_cardIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_player",
        type: "address",
      },
    ],
    name: "ChallengeReady",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "images",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "monType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "trainingGainPerHour",
        type: "uint8",
      },
    ],
    name: "CollectionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "monIndex",
        type: "uint256",
      },
    ],
    name: "LogCryptomonCard",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_cardIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_bidAmount",
        type: "uint256",
      },
    ],
    name: "NewBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_challenger",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_opponent",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_monIds",
        type: "uint256[]",
      },
    ],
    name: "NewChallenge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_challenger",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_monIds",
        type: "uint256[]",
      },
    ],
    name: "acceptChallenge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cryptomonCardIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256",
      },
    ],
    name: "addToAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctionCards",
    outputs: [
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "highestBidder",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_opponent",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_monIds",
        type: "uint256[]",
      },
    ],
    name: "challenge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "challengeStatus",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "a",
        type: "string",
      },
      {
        internalType: "string",
        name: "b",
        type: "string",
      },
    ],
    name: "compareStrings",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "array",
        type: "string[]",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "containsStringInArray",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_monIndex",
        type: "uint256",
      },
    ],
    name: "createCryptomonCard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_names",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_images",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_monType",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_trainingGainPerHour",
        type: "uint8",
      },
    ],
    name: "createMonCollection",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_profilePictureUrl",
        type: "string",
      },
      {
        internalType: "uint256[5]",
        name: "randArr",
        type: "uint256[5]",
      },
    ],
    name: "createUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "cryptomonTypesAdvantages",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "cryptomons",
    outputs: [
      {
        internalType: "uint256",
        name: "monIndex",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "monLevel",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "evolution",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "XP",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "readyTime",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "deleteMonCollection",
    outputs: [
      {
        components: [
          {
            internalType: "string[]",
            name: "names",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "images",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "monType",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "trainingGainPerHour",
            type: "uint8",
          },
        ],
        internalType: "struct CryptomonCollection.MonCollection[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_names",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_images",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_monType",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_trainingGainPerHour",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "editMonCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "exponential",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_monId",
        type: "uint256",
      },
    ],
    name: "getCryptomonCard",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "monIndex",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "monLevel",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "evolution",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "XP",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "readyTime",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct CryptomonCard.Cryptomon",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getMonCollection",
    outputs: [
      {
        components: [
          {
            internalType: "string[]",
            name: "names",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "images",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "monType",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "trainingGainPerHour",
            type: "uint8",
          },
        ],
        internalType: "struct CryptomonCollection.MonCollection",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getMonCollectionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_challengeHash",
        type: "bytes32",
      },
    ],
    name: "getMonsInBattle",
    outputs: [
      {
        components: [
          {
            internalType: "uint256[]",
            name: "challengerMons",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "opponentMons",
            type: "uint256[]",
          },
        ],
        internalType: "struct Battle.BattlingMons",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getOnlinePlayers",
    outputs: [
      {
        internalType: "address[]",
        name: "_players",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getUserCards",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_monId",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_XPToIncrease",
        type: "uint16",
      },
    ],
    name: "increaseXP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "monCollections",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "monType",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "trainingGainPerHour",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_randomNumberMultiplier",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_monWinXPIncrease",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_monWinXPLevelImpact",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_winnerMoncoinsIncrease",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_winnerMoncoinsLevelImpact",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_typeFactor",
        type: "uint16",
      },
    ],
    name: "setCalcParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_monId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_timeToTrain",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_monCoins",
        type: "uint256",
      },
    ],
    name: "trainCryptomon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_type",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_advantagesAgainst",
        type: "string[]",
      },
    ],
    name: "updateCryptomonTypeAdvantages",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_online",
        type: "bool",
      },
    ],
    name: "updateUserConnectivityStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "updateWinCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "profilePictureURL",
        type: "string",
      },
      {
        internalType: "bool",
        name: "verified",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "availableForChallenge",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "winCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lossCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "xp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "monCoinBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "winStreak",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lossStreak",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cardIndex",
        type: "uint256",
      },
    ],
    name: "bid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
    ],
    name: "transferAuctionAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
