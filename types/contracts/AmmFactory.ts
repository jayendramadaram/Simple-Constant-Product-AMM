/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface AmmFactoryInterface extends utils.Interface {
  functions: {
    "CreatePool(address,address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "CreatePool"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CreatePool",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "CreatePool", data: BytesLike): Result;

  events: {
    "PoolCreated(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}

export interface PoolCreatedEventObject {
  PoolAddress: string;
  Token1Address: string;
  Token2Address: string;
}
export type PoolCreatedEvent = TypedEvent<
  [string, string, string],
  PoolCreatedEventObject
>;

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;

export interface AmmFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AmmFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CreatePool(
      Token1Address: PromiseOrValue<string>,
      Token2Address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CreatePool(
    Token1Address: PromiseOrValue<string>,
    Token2Address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CreatePool(
      Token1Address: PromiseOrValue<string>,
      Token2Address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "PoolCreated(address,address,address)"(
      PoolAddress?: null,
      Token1Address?: null,
      Token2Address?: null
    ): PoolCreatedEventFilter;
    PoolCreated(
      PoolAddress?: null,
      Token1Address?: null,
      Token2Address?: null
    ): PoolCreatedEventFilter;
  };

  estimateGas: {
    CreatePool(
      Token1Address: PromiseOrValue<string>,
      Token2Address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CreatePool(
      Token1Address: PromiseOrValue<string>,
      Token2Address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}