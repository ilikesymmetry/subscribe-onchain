import { Address } from "viem";

export const spendPermissionManagerAddress =
  "0x67Cea99f12F58Ddca74Bdf22F92A286421E6B5d9" as Address;
export const spendPermissionManagerAbi = [
  {
    type: "function",
    name: "NATIVE_TOKEN",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spendPermission",
        type: "tuple",
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approveWithSignature",
    inputs: [
      {
        name: "spendPermission",
        type: "tuple",
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
      { name: "signature", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "eip712Domain",
    inputs: [],
    outputs: [
      { name: "fields", type: "bytes1", internalType: "bytes1" },
      { name: "name", type: "string", internalType: "string" },
      { name: "version", type: "string", internalType: "string" },
      { name: "chainId", type: "uint256", internalType: "uint256" },
      { name: "verifyingContract", type: "address", internalType: "address" },
      { name: "salt", type: "bytes32", internalType: "bytes32" },
      { name: "extensions", type: "uint256[]", internalType: "uint256[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCurrentPeriod",
    inputs: [
      {
        name: "spendPermission",
        type: "tuple",
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct SpendPermissionManager.PeriodSpend",
        components: [
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
          { name: "spend", type: "uint160", internalType: "uint160" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getHash",
    inputs: [
      {
        name: "spendPermission",
        type: "tuple",
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
    ],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApproved",
    inputs: [
      {
        name: "spendPermission",
        type: "tuple",
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "revoke",
    inputs: [
      {
        name: "spendPermission",
        type: "tuple",
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "spend",
    inputs: [
      {
        name: "spendPermission",
        type: "tuple",
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
      { name: "value", type: "uint160", internalType: "uint160" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "spendWithSignature",
    inputs: [
      {
        name: "spendPermission",
        type: "tuple",
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
      { name: "signature", type: "bytes", internalType: "bytes" },
      { name: "value", type: "uint160", internalType: "uint160" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "SpendPermissionApproved",
    inputs: [
      {
        name: "hash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spendPermission",
        type: "tuple",
        indexed: false,
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SpendPermissionRevoked",
    inputs: [
      {
        name: "hash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spendPermission",
        type: "tuple",
        indexed: false,
        internalType: "struct SpendPermissionManager.SpendPermission",
        components: [
          { name: "account", type: "address", internalType: "address" },
          { name: "spender", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
          { name: "allowance", type: "uint160", internalType: "uint160" },
          { name: "period", type: "uint48", internalType: "uint48" },
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SpendPermissionUsed",
    inputs: [
      {
        name: "hash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newUsage",
        type: "tuple",
        indexed: false,
        internalType: "struct SpendPermissionManager.PeriodSpend",
        components: [
          { name: "start", type: "uint48", internalType: "uint48" },
          { name: "end", type: "uint48", internalType: "uint48" },
          { name: "spend", type: "uint160", internalType: "uint160" },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AfterSpendPermissionEnd",
    inputs: [
      { name: "currentTimestamp", type: "uint48", internalType: "uint48" },
      { name: "end", type: "uint48", internalType: "uint48" },
    ],
  },
  {
    type: "error",
    name: "BeforeSpendPermissionStart",
    inputs: [
      { name: "currentTimestamp", type: "uint48", internalType: "uint48" },
      { name: "start", type: "uint48", internalType: "uint48" },
    ],
  },
  {
    type: "error",
    name: "ExceededSpendPermission",
    inputs: [
      { name: "value", type: "uint256", internalType: "uint256" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "InvalidSender",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "expected", type: "address", internalType: "address" },
    ],
  },
  { type: "error", name: "InvalidSignature", inputs: [] },
  {
    type: "error",
    name: "InvalidStartEnd",
    inputs: [
      { name: "start", type: "uint48", internalType: "uint48" },
      { name: "end", type: "uint48", internalType: "uint48" },
    ],
  },
  {
    type: "error",
    name: "SpendValueOverflow",
    inputs: [{ name: "value", type: "uint256", internalType: "uint256" }],
  },
  { type: "error", name: "UnauthorizedSpendPermission", inputs: [] },
  { type: "error", name: "ZeroAllowance", inputs: [] },
  { type: "error", name: "ZeroPeriod", inputs: [] },
  { type: "error", name: "ZeroValue", inputs: [] },
];
