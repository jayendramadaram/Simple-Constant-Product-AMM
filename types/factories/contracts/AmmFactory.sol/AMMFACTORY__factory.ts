/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AMMFACTORY,
  AMMFACTORYInterface,
} from "../../../contracts/AmmFactory.sol/AMMFACTORY";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "PoolAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "Token1Address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "Token2Address",
        type: "address",
      },
    ],
    name: "PoolCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "Token1Address",
        type: "address",
      },
      {
        internalType: "address",
        name: "Token2Address",
        type: "address",
      },
    ],
    name: "CreatePool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611b09806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063dbd2a1ea14610030575b600080fd5b61004a60048036038101906100459190610150565b610060565b604051610057919061019f565b60405180910390f35b6000808383604051610071906100e0565b61007c9291906101ba565b604051809103906000f080158015610098573d6000803e3d6000fd5b5090507f9c5d829b9b23efc461f9aeef91979ec04bb903feb3bee4f26d22114abfc7335b8185856040516100ce939291906101e3565b60405180910390a18091505092915050565b6118b98061021b83390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061011d826100f2565b9050919050565b61012d81610112565b811461013857600080fd5b50565b60008135905061014a81610124565b92915050565b60008060408385031215610167576101666100ed565b5b60006101758582860161013b565b92505060206101868582860161013b565b9150509250929050565b61019981610112565b82525050565b60006020820190506101b46000830184610190565b92915050565b60006040820190506101cf6000830185610190565b6101dc6020830184610190565b9392505050565b60006060820190506101f86000830186610190565b6102056020830185610190565b6102126040830184610190565b94935050505056fe60c06040523480156200001157600080fd5b50604051620018b9380380620018b9833981810160405281019062000037919062000111565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050505062000158565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000d982620000ac565b9050919050565b620000eb81620000cc565b8114620000f757600080fd5b50565b6000815190506200010b81620000e0565b92915050565b600080604083850312156200012b576200012a620000a7565b5b60006200013b85828601620000fa565b92505060206200014e85828601620000fa565b9150509250929050565b60805160a051611711620001a860003960008181610459015281816105d3015281816108d10152610d9e01526000818161036d015281816106f3015281816107e30152610c7e01526117116000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80639cd441da1161008c578063c076172b11610066578063c076172b14610204578063ce7c2ac214610222578063f4cb34d414610252578063fb92eb3f1461026e576100cf565b80639cd441da14610196578063a5f0a26f146101b2578063b3244041146101d3576100cf565b80630a861f2a146100d45780633944eeec146100f05780633a98ef39146101205780634832cee11461013e57806380abfda81461015c578063980d69d31461017a575b600080fd5b6100ee60048036038101906100e99190610f89565b61029e565b005b61010a60048036038101906101059190610f89565b610548565b6040516101179190610fc5565b60405180910390f35b6101286105b2565b6040516101359190610fc5565b60405180910390f35b6101466105b8565b6040516101539190610fc5565b60405180910390f35b6101646105be565b6040516101719190610fc5565b60405180910390f35b610194600480360381019061018f9190610f89565b6105c4565b005b6101b060048036038101906101ab9190610fe0565b6107e1565b005b6101ba610b8e565b6040516101ca9493929190611020565b60405180910390f35b6101ed60048036038101906101e89190610f89565b610bae565b6040516101fb929190611065565b60405180910390f35b61020c610c51565b6040516102199190610fc5565b60405180910390f35b61023c600480360381019061023791906110ec565b610c57565b6040516102499190610fc5565b60405180910390f35b61026c60048036038101906102679190610f89565b610c6f565b005b61028860048036038101906102839190610f89565b610e8c565b6040516102959190610fc5565b60405180910390f35b6000806102aa83610bae565b9150915082600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102fd9190611148565b92505081905550826000808282546103159190611148565b92505081905550816001600082825461032e9190611148565b9250508190555080600260008282546103479190611148565b92505081905550610365600254600154610ef690919063ffffffff16565b6003819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016103c692919061118b565b602060405180830381600087803b1580156103e057600080fd5b505af11580156103f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041891906111ec565b610457576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044e90611276565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016104b292919061118b565b602060405180830381600087803b1580156104cc57600080fd5b505af11580156104e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050491906111ec565b610543576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053a906112e2565b60405180910390fd5b505050565b60008061056083600254610f0c90919063ffffffff16565b9050600061057982600354610f2290919063ffffffff16565b905061059081600154610f3890919063ffffffff16565b92506001548314156105ab5782806105a790611302565b9350505b5050919050565b60005481565b60025481565b60015481565b60006105cf82610548565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161062e9392919061132c565b602060405180830381600087803b15801561064857600080fd5b505af115801561065c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068091906111ec565b6106bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b6906113af565b60405180910390fd5b81600260008282546106d191906113cf565b9250508190555080600160008282546106ea9190611148565b925050819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161074c92919061118b565b602060405180830381600087803b15801561076657600080fd5b505af115801561077a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079e91906111ec565b6107dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d4906112e2565b60405180910390fd5b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161083e9392919061132c565b602060405180830381600087803b15801561085857600080fd5b505af115801561086c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089091906111ec565b6108cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c6906113af565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161092c9392919061132c565b602060405180830381600087803b15801561094657600080fd5b505af115801561095a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097e91906111ec565b6109bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b490611471565b60405180910390fd5b60008060005414156109e057620f424060646109d99190611491565b9050610a82565b6000610a0b6001546109fd86600054610ef690919063ffffffff16565b610f2290919063ffffffff16565b90506000610a38600254610a2a86600054610ef690919063ffffffff16565b610f2290919063ffffffff16565b9050808214610a7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a739061155d565b60405180910390fd5b81925050505b60008111610ac5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abc906115c9565b60405180910390fd5b610ada83600154610f0c90919063ffffffff16565b600181905550610af582600254610f0c90919063ffffffff16565b600281905550610b12600254600154610ef690919063ffffffff16565b600381905550610b2d81600054610f0c90919063ffffffff16565b60008190555080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b8291906113cf565b92505081905550505050565b600080600080600054600154600254600354935093509350935090919293565b600080600054831115610bf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bed9061165b565b60405180910390fd5b610c1f600054610c1160015486610ef690919063ffffffff16565b610f2290919063ffffffff16565b9150610c4a600054610c3c60025486610ef690919063ffffffff16565b610f2290919063ffffffff16565b9050915091565b60035481565b60046020528060005260406000206000915090505481565b6000610c7a82610e8c565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610cd99392919061132c565b602060405180830381600087803b158015610cf357600080fd5b505af1158015610d07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2b91906111ec565b610d6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d61906113af565b60405180910390fd5b8160016000828254610d7c91906113cf565b925050819055508060026000828254610d959190611148565b925050819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610df792919061118b565b602060405180830381600087803b158015610e1157600080fd5b505af1158015610e25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4991906111ec565b610e88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7f906112e2565b60405180910390fd5b5050565b600080610ea483600154610f0c90919063ffffffff16565b90506000610ebd82600354610f2290919063ffffffff16565b9050610ed481600254610f3890919063ffffffff16565b9250600254831415610eef578280610eeb90611302565b9350505b5050919050565b60008183610f049190611491565b905092915050565b60008183610f1a91906113cf565b905092915050565b60008183610f3091906116aa565b905092915050565b60008183610f469190611148565b905092915050565b600080fd5b6000819050919050565b610f6681610f53565b8114610f7157600080fd5b50565b600081359050610f8381610f5d565b92915050565b600060208284031215610f9f57610f9e610f4e565b5b6000610fad84828501610f74565b91505092915050565b610fbf81610f53565b82525050565b6000602082019050610fda6000830184610fb6565b92915050565b60008060408385031215610ff757610ff6610f4e565b5b600061100585828601610f74565b925050602061101685828601610f74565b9150509250929050565b60006080820190506110356000830187610fb6565b6110426020830186610fb6565b61104f6040830185610fb6565b61105c6060830184610fb6565b95945050505050565b600060408201905061107a6000830185610fb6565b6110876020830184610fb6565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110b98261108e565b9050919050565b6110c9816110ae565b81146110d457600080fd5b50565b6000813590506110e6816110c0565b92915050565b60006020828403121561110257611101610f4e565b5b6000611110848285016110d7565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061115382610f53565b915061115e83610f53565b92508282101561117157611170611119565b5b828203905092915050565b611185816110ae565b82525050565b60006040820190506111a0600083018561117c565b6111ad6020830184610fb6565b9392505050565b60008115159050919050565b6111c9816111b4565b81146111d457600080fd5b50565b6000815190506111e6816111c0565b92915050565b60006020828403121561120257611201610f4e565b5b6000611210848285016111d7565b91505092915050565b600082825260208201905092915050565b7f546f6b656e31207472616e73666572206661696c656400000000000000000000600082015250565b6000611260601683611219565b915061126b8261122a565b602082019050919050565b6000602082019050818103600083015261128f81611253565b9050919050565b7f546f6b656e32207472616e73666572206661696c656400000000000000000000600082015250565b60006112cc601683611219565b91506112d782611296565b602082019050919050565b600060208201905081810360008301526112fb816112bf565b9050919050565b600061130d82610f53565b9150600082141561132157611320611119565b5b600182039050919050565b6000606082019050611341600083018661117c565b61134e602083018561117c565b61135b6040830184610fb6565b949350505050565b7f546f6b656e31205472616e7366657246726f6d206661696c6564000000000000600082015250565b6000611399601a83611219565b91506113a482611363565b602082019050919050565b600060208201905081810360008301526113c88161138c565b9050919050565b60006113da82610f53565b91506113e583610f53565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561141a57611419611119565b5b828201905092915050565b7f546f6b656e32205472616e7366657246726f6d204661696c6564000000000000600082015250565b600061145b601a83611219565b915061146682611425565b602082019050919050565b6000602082019050818103600083015261148a8161144e565b9050919050565b600061149c82610f53565b91506114a783610f53565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156114e0576114df611119565b5b828202905092915050565b7f657175616c20616d6f756e74206f6620746f6b656e73206e6f7420737570706c60008201527f6965640000000000000000000000000000000000000000000000000000000000602082015250565b6000611547602383611219565b9150611552826114eb565b604082019050919050565b600060208201905081810360008301526115768161153a565b9050919050565b7f76616c696420616d6f756e742068617320746f2062652070726f766964656400600082015250565b60006115b3601f83611219565b91506115be8261157d565b602082019050919050565b600060208201905081810360008301526115e2816115a6565b9050919050565b7f7368617265206d757374206265206c657373207468616e20746f74616c20736860008201527f6172657300000000000000000000000000000000000000000000000000000000602082015250565b6000611645602483611219565b9150611650826115e9565b604082019050919050565b6000602082019050818103600083015261167481611638565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006116b582610f53565b91506116c083610f53565b9250826116d0576116cf61167b565b5b82820490509291505056fea26469706673582212200400db4f046cdb6c55984ea2ae9369b8c0187320cb83c71fc316a8ada231f7e864736f6c63430008090033a26469706673582212206ff9d8e2dd89441d004b7d3728f2fb5dc322042d283ce57ee3bcc6c908ada71064736f6c63430008090033";

type AMMFACTORYConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AMMFACTORYConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AMMFACTORY__factory extends ContractFactory {
  constructor(...args: AMMFACTORYConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AMMFACTORY> {
    return super.deploy(overrides || {}) as Promise<AMMFACTORY>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AMMFACTORY {
    return super.attach(address) as AMMFACTORY;
  }
  override connect(signer: Signer): AMMFACTORY__factory {
    return super.connect(signer) as AMMFACTORY__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AMMFACTORYInterface {
    return new utils.Interface(_abi) as AMMFACTORYInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AMMFACTORY {
    return new Contract(address, _abi, signerOrProvider) as AMMFACTORY;
  }
}
