/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface AMMInterface extends utils.Interface {
  functions: {
    "PoolStats()": FunctionFragment;
    "addLiquidity(uint256,uint256)": FunctionFragment;
    "estimateToken1GivenToken2(uint256)": FunctionFragment;
    "estimateToken2GivenToken1(uint256)": FunctionFragment;
    "getWithdrawEstimate(uint256)": FunctionFragment;
    "swapToken1(uint256)": FunctionFragment;
    "swapToken2(uint256)": FunctionFragment;
    "withdrawLiquidity(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PoolStats"
      | "addLiquidity"
      | "estimateToken1GivenToken2"
      | "estimateToken2GivenToken1"
      | "getWithdrawEstimate"
      | "swapToken1"
      | "swapToken2"
      | "withdrawLiquidity"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "PoolStats", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateToken1GivenToken2",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateToken2GivenToken1",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWithdrawEstimate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToken1",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToken2",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLiquidity",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "PoolStats", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateToken1GivenToken2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateToken2GivenToken1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWithdrawEstimate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapToken1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapToken2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLiquidity",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AMM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AMMInterface;

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
    PoolStats(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addLiquidity(
      _token1: PromiseOrValue<BigNumberish>,
      _token2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    estimateToken1GivenToken2(
      _amtToken2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountToken1: BigNumber }>;

    estimateToken2GivenToken1(
      _amtToken1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountToken2: BigNumber }>;

    getWithdrawEstimate(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { token1out: BigNumber; token2out: BigNumber }
    >;

    swapToken1(
      _amtToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapToken2(
      _amtToken2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawLiquidity(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  PoolStats(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addLiquidity(
    _token1: PromiseOrValue<BigNumberish>,
    _token2: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  estimateToken1GivenToken2(
    _amtToken2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  estimateToken2GivenToken1(
    _amtToken1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWithdrawEstimate(
    _share: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { token1out: BigNumber; token2out: BigNumber }
  >;

  swapToken1(
    _amtToken1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapToken2(
    _amtToken2: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawLiquidity(
    _share: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PoolStats(overrides?: CallOverrides): Promise<void>;

    addLiquidity(
      _token1: PromiseOrValue<BigNumberish>,
      _token2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    estimateToken1GivenToken2(
      _amtToken2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateToken2GivenToken1(
      _amtToken1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawEstimate(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { token1out: BigNumber; token2out: BigNumber }
    >;

    swapToken1(
      _amtToken1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapToken2(
      _amtToken2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawLiquidity(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    PoolStats(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addLiquidity(
      _token1: PromiseOrValue<BigNumberish>,
      _token2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    estimateToken1GivenToken2(
      _amtToken2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateToken2GivenToken1(
      _amtToken1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawEstimate(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapToken1(
      _amtToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapToken2(
      _amtToken2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawLiquidity(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PoolStats(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidity(
      _token1: PromiseOrValue<BigNumberish>,
      _token2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    estimateToken1GivenToken2(
      _amtToken2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateToken2GivenToken1(
      _amtToken1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithdrawEstimate(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapToken1(
      _amtToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapToken2(
      _amtToken2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawLiquidity(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}