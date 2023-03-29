import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  BlockedReward,
  BurnFluid,
  Emergency,
  MaxUncheckedRewardLimitChanged,
  MintApproval,
  MintFluid,
  NewOperator,
  OperatorChanged,
  Reward,
  RewardQuarantineThresholdUpdated,
  Transfer,
  UnblockReward
} from "../generated/fUSDC/fUSDC"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createBlockedRewardEvent(
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): BlockedReward {
  let blockedRewardEvent = changetype<BlockedReward>(newMockEvent())

  blockedRewardEvent.parameters = new Array()

  blockedRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  blockedRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  blockedRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  blockedRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return blockedRewardEvent
}

export function createBurnFluidEvent(addr: Address, amount: BigInt): BurnFluid {
  let burnFluidEvent = changetype<BurnFluid>(newMockEvent())

  burnFluidEvent.parameters = new Array()

  burnFluidEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  burnFluidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return burnFluidEvent
}

export function createEmergencyEvent(status: boolean): Emergency {
  let emergencyEvent = changetype<Emergency>(newMockEvent())

  emergencyEvent.parameters = new Array()

  emergencyEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return emergencyEvent
}

export function createMaxUncheckedRewardLimitChangedEvent(
  amount: BigInt
): MaxUncheckedRewardLimitChanged {
  let maxUncheckedRewardLimitChangedEvent = changetype<
    MaxUncheckedRewardLimitChanged
  >(newMockEvent())

  maxUncheckedRewardLimitChangedEvent.parameters = new Array()

  maxUncheckedRewardLimitChangedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return maxUncheckedRewardLimitChangedEvent
}

export function createMintApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): MintApproval {
  let mintApprovalEvent = changetype<MintApproval>(newMockEvent())

  mintApprovalEvent.parameters = new Array()

  mintApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  mintApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  mintApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return mintApprovalEvent
}

export function createMintFluidEvent(addr: Address, amount: BigInt): MintFluid {
  let mintFluidEvent = changetype<MintFluid>(newMockEvent())

  mintFluidEvent.parameters = new Array()

  mintFluidEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  mintFluidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return mintFluidEvent
}

export function createNewOperatorEvent(
  old: Address,
  new_: Address
): NewOperator {
  let newOperatorEvent = changetype<NewOperator>(newMockEvent())

  newOperatorEvent.parameters = new Array()

  newOperatorEvent.parameters.push(
    new ethereum.EventParam("old", ethereum.Value.fromAddress(old))
  )
  newOperatorEvent.parameters.push(
    new ethereum.EventParam("new_", ethereum.Value.fromAddress(new_))
  )

  return newOperatorEvent
}

export function createOperatorChangedEvent(
  oldOperator: Address,
  newOperator: Address
): OperatorChanged {
  let operatorChangedEvent = changetype<OperatorChanged>(newMockEvent())

  operatorChangedEvent.parameters = new Array()

  operatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldOperator",
      ethereum.Value.fromAddress(oldOperator)
    )
  )
  operatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newOperator",
      ethereum.Value.fromAddress(newOperator)
    )
  )

  return operatorChangedEvent
}

export function createRewardEvent(
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): Reward {
  let rewardEvent = changetype<Reward>(newMockEvent())

  rewardEvent.parameters = new Array()

  rewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  rewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  rewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  rewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return rewardEvent
}

export function createRewardQuarantineThresholdUpdatedEvent(
  amount: BigInt
): RewardQuarantineThresholdUpdated {
  let rewardQuarantineThresholdUpdatedEvent = changetype<
    RewardQuarantineThresholdUpdated
  >(newMockEvent())

  rewardQuarantineThresholdUpdatedEvent.parameters = new Array()

  rewardQuarantineThresholdUpdatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rewardQuarantineThresholdUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUnblockRewardEvent(
  originalRewardTx: Bytes,
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): UnblockReward {
  let unblockRewardEvent = changetype<UnblockReward>(newMockEvent())

  unblockRewardEvent.parameters = new Array()

  unblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "originalRewardTx",
      ethereum.Value.fromFixedBytes(originalRewardTx)
    )
  )
  unblockRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  unblockRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  unblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  unblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return unblockRewardEvent
}
