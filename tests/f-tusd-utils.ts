import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  fTUSDApproval,
  fTUSDBlockedReward,
  fTUSDBurnFluid,
  fTUSDEmergency,
  fTUSDMaxUncheckedRewardLimitChanged,
  fTUSDMintApproval,
  fTUSDMintFluid,
  fTUSDNewOperator,
  fTUSDOperatorChanged,
  fTUSDReward,
  fTUSDRewardQuarantineThresholdUpdated,
  fTUSDTransfer,
  fTUSDUnblockReward
} from "../generated/fTUSD/fTUSD"

export function createfTUSDApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): fTUSDApproval {
  let fTusdApprovalEvent = changetype<fTUSDApproval>(newMockEvent())

  fTusdApprovalEvent.parameters = new Array()

  fTusdApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  fTusdApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  fTusdApprovalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return fTusdApprovalEvent
}

export function createfTUSDBlockedRewardEvent(
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): fTUSDBlockedReward {
  let fTusdBlockedRewardEvent = changetype<fTUSDBlockedReward>(newMockEvent())

  fTusdBlockedRewardEvent.parameters = new Array()

  fTusdBlockedRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  fTusdBlockedRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fTusdBlockedRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  fTusdBlockedRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return fTusdBlockedRewardEvent
}

export function createfTUSDBurnFluidEvent(
  addr: Address,
  amount: BigInt
): fTUSDBurnFluid {
  let fTusdBurnFluidEvent = changetype<fTUSDBurnFluid>(newMockEvent())

  fTusdBurnFluidEvent.parameters = new Array()

  fTusdBurnFluidEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  fTusdBurnFluidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fTusdBurnFluidEvent
}

export function createfTUSDEmergencyEvent(status: boolean): fTUSDEmergency {
  let fTusdEmergencyEvent = changetype<fTUSDEmergency>(newMockEvent())

  fTusdEmergencyEvent.parameters = new Array()

  fTusdEmergencyEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return fTusdEmergencyEvent
}

export function createfTUSDMaxUncheckedRewardLimitChangedEvent(
  amount: BigInt
): fTUSDMaxUncheckedRewardLimitChanged {
  let fTusdMaxUncheckedRewardLimitChangedEvent = changetype<
    fTUSDMaxUncheckedRewardLimitChanged
  >(newMockEvent())

  fTusdMaxUncheckedRewardLimitChangedEvent.parameters = new Array()

  fTusdMaxUncheckedRewardLimitChangedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fTusdMaxUncheckedRewardLimitChangedEvent
}

export function createfTUSDMintApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): fTUSDMintApproval {
  let fTusdMintApprovalEvent = changetype<fTUSDMintApproval>(newMockEvent())

  fTusdMintApprovalEvent.parameters = new Array()

  fTusdMintApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  fTusdMintApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  fTusdMintApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fTusdMintApprovalEvent
}

export function createfTUSDMintFluidEvent(
  addr: Address,
  amount: BigInt
): fTUSDMintFluid {
  let fTusdMintFluidEvent = changetype<fTUSDMintFluid>(newMockEvent())

  fTusdMintFluidEvent.parameters = new Array()

  fTusdMintFluidEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  fTusdMintFluidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fTusdMintFluidEvent
}

export function createfTUSDNewOperatorEvent(
  old: Address,
  new_: Address
): fTUSDNewOperator {
  let fTusdNewOperatorEvent = changetype<fTUSDNewOperator>(newMockEvent())

  fTusdNewOperatorEvent.parameters = new Array()

  fTusdNewOperatorEvent.parameters.push(
    new ethereum.EventParam("old", ethereum.Value.fromAddress(old))
  )
  fTusdNewOperatorEvent.parameters.push(
    new ethereum.EventParam("new_", ethereum.Value.fromAddress(new_))
  )

  return fTusdNewOperatorEvent
}

export function createfTUSDOperatorChangedEvent(
  oldOperator: Address,
  newOperator: Address
): fTUSDOperatorChanged {
  let fTusdOperatorChangedEvent = changetype<fTUSDOperatorChanged>(
    newMockEvent()
  )

  fTusdOperatorChangedEvent.parameters = new Array()

  fTusdOperatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldOperator",
      ethereum.Value.fromAddress(oldOperator)
    )
  )
  fTusdOperatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newOperator",
      ethereum.Value.fromAddress(newOperator)
    )
  )

  return fTusdOperatorChangedEvent
}

export function createfTUSDRewardEvent(
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): fTUSDReward {
  let fTusdRewardEvent = changetype<fTUSDReward>(newMockEvent())

  fTusdRewardEvent.parameters = new Array()

  fTusdRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  fTusdRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fTusdRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  fTusdRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return fTusdRewardEvent
}

export function createfTUSDRewardQuarantineThresholdUpdatedEvent(
  amount: BigInt
): fTUSDRewardQuarantineThresholdUpdated {
  let fTusdRewardQuarantineThresholdUpdatedEvent = changetype<
    fTUSDRewardQuarantineThresholdUpdated
  >(newMockEvent())

  fTusdRewardQuarantineThresholdUpdatedEvent.parameters = new Array()

  fTusdRewardQuarantineThresholdUpdatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fTusdRewardQuarantineThresholdUpdatedEvent
}

export function createfTUSDTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): fTUSDTransfer {
  let fTusdTransferEvent = changetype<fTUSDTransfer>(newMockEvent())

  fTusdTransferEvent.parameters = new Array()

  fTusdTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  fTusdTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  fTusdTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return fTusdTransferEvent
}

export function createfTUSDUnblockRewardEvent(
  originalRewardTx: Bytes,
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): fTUSDUnblockReward {
  let fTusdUnblockRewardEvent = changetype<fTUSDUnblockReward>(newMockEvent())

  fTusdUnblockRewardEvent.parameters = new Array()

  fTusdUnblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "originalRewardTx",
      ethereum.Value.fromFixedBytes(originalRewardTx)
    )
  )
  fTusdUnblockRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  fTusdUnblockRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fTusdUnblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  fTusdUnblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return fTusdUnblockRewardEvent
}
