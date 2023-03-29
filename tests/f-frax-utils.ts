import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  fFRAXApproval,
  fFRAXBlockedReward,
  fFRAXBurnFluid,
  fFRAXEmergency,
  fFRAXMaxUncheckedRewardLimitChanged,
  fFRAXMintApproval,
  fFRAXMintFluid,
  fFRAXNewOperator,
  fFRAXOperatorChanged,
  fFRAXReward,
  fFRAXRewardQuarantineThresholdUpdated,
  fFRAXTransfer,
  fFRAXUnblockReward
} from "../generated/fFRAX/fFRAX"

export function createfFRAXApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): fFRAXApproval {
  let fFraxApprovalEvent = changetype<fFRAXApproval>(newMockEvent())

  fFraxApprovalEvent.parameters = new Array()

  fFraxApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  fFraxApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  fFraxApprovalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return fFraxApprovalEvent
}

export function createfFRAXBlockedRewardEvent(
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): fFRAXBlockedReward {
  let fFraxBlockedRewardEvent = changetype<fFRAXBlockedReward>(newMockEvent())

  fFraxBlockedRewardEvent.parameters = new Array()

  fFraxBlockedRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  fFraxBlockedRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fFraxBlockedRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  fFraxBlockedRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return fFraxBlockedRewardEvent
}

export function createfFRAXBurnFluidEvent(
  addr: Address,
  amount: BigInt
): fFRAXBurnFluid {
  let fFraxBurnFluidEvent = changetype<fFRAXBurnFluid>(newMockEvent())

  fFraxBurnFluidEvent.parameters = new Array()

  fFraxBurnFluidEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  fFraxBurnFluidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fFraxBurnFluidEvent
}

export function createfFRAXEmergencyEvent(status: boolean): fFRAXEmergency {
  let fFraxEmergencyEvent = changetype<fFRAXEmergency>(newMockEvent())

  fFraxEmergencyEvent.parameters = new Array()

  fFraxEmergencyEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return fFraxEmergencyEvent
}

export function createfFRAXMaxUncheckedRewardLimitChangedEvent(
  amount: BigInt
): fFRAXMaxUncheckedRewardLimitChanged {
  let fFraxMaxUncheckedRewardLimitChangedEvent = changetype<
    fFRAXMaxUncheckedRewardLimitChanged
  >(newMockEvent())

  fFraxMaxUncheckedRewardLimitChangedEvent.parameters = new Array()

  fFraxMaxUncheckedRewardLimitChangedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fFraxMaxUncheckedRewardLimitChangedEvent
}

export function createfFRAXMintApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): fFRAXMintApproval {
  let fFraxMintApprovalEvent = changetype<fFRAXMintApproval>(newMockEvent())

  fFraxMintApprovalEvent.parameters = new Array()

  fFraxMintApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  fFraxMintApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  fFraxMintApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fFraxMintApprovalEvent
}

export function createfFRAXMintFluidEvent(
  addr: Address,
  amount: BigInt
): fFRAXMintFluid {
  let fFraxMintFluidEvent = changetype<fFRAXMintFluid>(newMockEvent())

  fFraxMintFluidEvent.parameters = new Array()

  fFraxMintFluidEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  fFraxMintFluidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fFraxMintFluidEvent
}

export function createfFRAXNewOperatorEvent(
  old: Address,
  new_: Address
): fFRAXNewOperator {
  let fFraxNewOperatorEvent = changetype<fFRAXNewOperator>(newMockEvent())

  fFraxNewOperatorEvent.parameters = new Array()

  fFraxNewOperatorEvent.parameters.push(
    new ethereum.EventParam("old", ethereum.Value.fromAddress(old))
  )
  fFraxNewOperatorEvent.parameters.push(
    new ethereum.EventParam("new_", ethereum.Value.fromAddress(new_))
  )

  return fFraxNewOperatorEvent
}

export function createfFRAXOperatorChangedEvent(
  oldOperator: Address,
  newOperator: Address
): fFRAXOperatorChanged {
  let fFraxOperatorChangedEvent = changetype<fFRAXOperatorChanged>(
    newMockEvent()
  )

  fFraxOperatorChangedEvent.parameters = new Array()

  fFraxOperatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldOperator",
      ethereum.Value.fromAddress(oldOperator)
    )
  )
  fFraxOperatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newOperator",
      ethereum.Value.fromAddress(newOperator)
    )
  )

  return fFraxOperatorChangedEvent
}

export function createfFRAXRewardEvent(
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): fFRAXReward {
  let fFraxRewardEvent = changetype<fFRAXReward>(newMockEvent())

  fFraxRewardEvent.parameters = new Array()

  fFraxRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  fFraxRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fFraxRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  fFraxRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return fFraxRewardEvent
}

export function createfFRAXRewardQuarantineThresholdUpdatedEvent(
  amount: BigInt
): fFRAXRewardQuarantineThresholdUpdated {
  let fFraxRewardQuarantineThresholdUpdatedEvent = changetype<
    fFRAXRewardQuarantineThresholdUpdated
  >(newMockEvent())

  fFraxRewardQuarantineThresholdUpdatedEvent.parameters = new Array()

  fFraxRewardQuarantineThresholdUpdatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fFraxRewardQuarantineThresholdUpdatedEvent
}

export function createfFRAXTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): fFRAXTransfer {
  let fFraxTransferEvent = changetype<fFRAXTransfer>(newMockEvent())

  fFraxTransferEvent.parameters = new Array()

  fFraxTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  fFraxTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  fFraxTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return fFraxTransferEvent
}

export function createfFRAXUnblockRewardEvent(
  originalRewardTx: Bytes,
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): fFRAXUnblockReward {
  let fFraxUnblockRewardEvent = changetype<fFRAXUnblockReward>(newMockEvent())

  fFraxUnblockRewardEvent.parameters = new Array()

  fFraxUnblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "originalRewardTx",
      ethereum.Value.fromFixedBytes(originalRewardTx)
    )
  )
  fFraxUnblockRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  fFraxUnblockRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fFraxUnblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  fFraxUnblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return fFraxUnblockRewardEvent
}
