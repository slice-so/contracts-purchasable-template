/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExampleModAllocator,
  ExampleModAllocatorInterface,
} from "../ExampleModAllocator";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "forProjectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Allocate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_forProjectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "allocate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060ac8061001e6000396000f3fe608060405260043610601c5760003560e01c8063ec695ef7146021575b600080fd5b6031602c3660046033565b505050565b005b600080600060608486031215604757600080fd5b833592506020840135915060408401356001600160a01b0381168114606b57600080fd5b80915050925092509256fea2646970667358221220188c9a98621f2ef5081b4a8e6fb7e062e5111a594b7a32f525e1dd4095b9425064736f6c634300080d0033";

type ExampleModAllocatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleModAllocatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleModAllocator__factory extends ContractFactory {
  constructor(...args: ExampleModAllocatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ExampleModAllocator";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExampleModAllocator> {
    return super.deploy(overrides || {}) as Promise<ExampleModAllocator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExampleModAllocator {
    return super.attach(address) as ExampleModAllocator;
  }
  connect(signer: Signer): ExampleModAllocator__factory {
    return super.connect(signer) as ExampleModAllocator__factory;
  }
  static readonly contractName: "ExampleModAllocator";
  public readonly contractName: "ExampleModAllocator";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleModAllocatorInterface {
    return new utils.Interface(_abi) as ExampleModAllocatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleModAllocator {
    return new Contract(address, _abi, signerOrProvider) as ExampleModAllocator;
  }
}
