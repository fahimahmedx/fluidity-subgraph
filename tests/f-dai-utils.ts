import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  fDAIApproval,
  fDAIBlockedReward,
  fDAIBurnFluid,
  fDAIEmergency,
  fDAIMaxUncheckedRewardLimitChanged,
  fDAIMintApproval,
  fDAIMintFluid,
  fDAINewOperator,
  fDAIOperatorChanged,
  fDAIReward,
  fDAIRewardQuarantineThresholdUpdated,
  fDAITransfer,
  fDAIUnblockReward
} from "../generated/fDAI/fDAI"

export function createfDAIApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): fDAIApproval {
  let fDaiApprovalEvent = changetype<fDAIApproval>(newMockEvent())

  fDaiApprovalEvent.parameters = new Array()

  fDaiApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  fDaiApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  fDaiApprovalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return fDaiApprovalEvent
}

export function createfDAIBlockedRewardEvent(
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): fDAIBlockedReward {
  let fDaiBlockedRewardEvent = changetype<fDAIBlockedReward>(newMockEvent())

  fDaiBlockedRewardEvent.parameters = new Array()

  fDaiBlockedRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  fDaiBlockedRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fDaiBlockedRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  fDaiBlockedRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return fDaiBlockedRewardEvent
}

export function createfDAIBurnFluidEvent(
  addr: Address,
  amount: BigInt
): fDAIBurnFluid {
  let fDaiBurnFluidEvent = changetype<fDAIBurnFluid>(newMockEvent())

  fDaiBurnFluidEvent.parameters = new Array()

  fDaiBurnFluidEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  fDaiBurnFluidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fDaiBurnFluidEvent
}

export function createfDAIEmergencyEvent(status: boolean): fDAIEmergency {
  let fDaiEmergencyEvent = changetype<fDAIEmergency>(newMockEvent())

  fDaiEmergencyEvent.parameters = new Array()

  fDaiEmergencyEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return fDaiEmergencyEvent
}

export function createfDAIMaxUncheckedRewardLimitChangedEvent(
  amount: BigInt
): fDAIMaxUncheckedRewardLimitChanged {
  let fDaiMaxUncheckedRewardLimitChangedEvent = changetype<
    fDAIMaxUncheckedRewardLimitChanged
  >(newMockEvent())

  fDaiMaxUncheckedRewardLimitChangedEvent.parameters = new Array()

  fDaiMaxUncheckedRewardLimitChangedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fDaiMaxUncheckedRewardLimitChangedEvent
}

export function createfDAIMintApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): fDAIMintApproval {
  let fDaiMintApprovalEvent = changetype<fDAIMintApproval>(newMockEvent())

  fDaiMintApprovalEvent.parameters = new Array()

  fDaiMintApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  fDaiMintApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  fDaiMintApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fDaiMintApprovalEvent
}

export function createfDAIMintFluidEvent(
  addr: Address,
  amount: BigInt
): fDAIMintFluid {
  let fDaiMintFluidEvent = changetype<fDAIMintFluid>(newMockEvent())

  fDaiMintFluidEvent.parameters = new Array()

  fDaiMintFluidEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  fDaiMintFluidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fDaiMintFluidEvent
}

export function createfDAINewOperatorEvent(
  old: Address,
  new_: Address
): fDAINewOperator {
  let fDaiNewOperatorEvent = changetype<fDAINewOperator>(newMockEvent())

  fDaiNewOperatorEvent.parameters = new Array()

  fDaiNewOperatorEvent.parameters.push(
    new ethereum.EventParam("old", ethereum.Value.fromAddress(old))
  )
  fDaiNewOperatorEvent.parameters.push(
    new ethereum.EventParam("new_", ethereum.Value.fromAddress(new_))
  )

  return fDaiNewOperatorEvent
}

export function createfDAIOperatorChangedEvent(
  oldOperator: Address,
  newOperator: Address
): fDAIOperatorChanged {
  let fDaiOperatorChangedEvent = changetype<fDAIOperatorChanged>(newMockEvent())

  fDaiOperatorChangedEvent.parameters = new Array()

  fDaiOperatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldOperator",
      ethereum.Value.fromAddress(oldOperator)
    )
  )
  fDaiOperatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newOperator",
      ethereum.Value.fromAddress(newOperator)
    )
  )

  return fDaiOperatorChangedEvent
}

export function createfDAIRewardEvent(
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): fDAIReward {
  let fDaiRewardEvent = changetype<fDAIReward>(newMockEvent())

  fDaiRewardEvent.parameters = new Array()

  fDaiRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  fDaiRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fDaiRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  fDaiRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return fDaiRewardEvent
}

export function createfDAIRewardQuarantineThresholdUpdatedEvent(
  amount: BigInt
): fDAIRewardQuarantineThresholdUpdated {
  let fDaiRewardQuarantineThresholdUpdatedEvent = changetype<
    fDAIRewardQuarantineThresholdUpdated
  >(newMockEvent())

  fDaiRewardQuarantineThresholdUpdatedEvent.parameters = new Array()

  fDaiRewardQuarantineThresholdUpdatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fDaiRewardQuarantineThresholdUpdatedEvent
}

export function createfDAITransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): fDAITransfer {
  let fDaiTransferEvent = changetype<fDAITransfer>(newMockEvent())

  fDaiTransferEvent.parameters = new Array()

  fDaiTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  fDaiTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  fDaiTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return fDaiTransferEvent
}

export function createfDAIUnblockRewardEvent(
  originalRewardTx: Bytes,
  winner: Address,
  amount: BigInt,
  startBlock: BigInt,
  endBlock: BigInt
): fDAIUnblockReward {
  let fDaiUnblockRewardEvent = changetype<fDAIUnblockReward>(newMockEvent())

  fDaiUnblockRewardEvent.parameters = new Array()

  fDaiUnblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "originalRewardTx",
      ethereum.Value.fromFixedBytes(originalRewardTx)
    )
  )
  fDaiUnblockRewardEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  fDaiUnblockRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fDaiUnblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  fDaiUnblockRewardEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )

  return fDaiUnblockRewardEvent
}
