import {
  Approval as fDAIApprovalEvent,
  BlockedReward as fDAIBlockedRewardEvent,
  BurnFluid as fDAIBurnFluidEvent,
  Emergency as fDAIEmergencyEvent,
  MaxUncheckedRewardLimitChanged as fDAIMaxUncheckedRewardLimitChangedEvent,
  MintApproval as fDAIMintApprovalEvent,
  MintFluid as fDAIMintFluidEvent,
  NewOperator as fDAINewOperatorEvent,
  OperatorChanged as fDAIOperatorChangedEvent,
  Reward as fDAIRewardEvent,
  RewardQuarantineThresholdUpdated as fDAIRewardQuarantineThresholdUpdatedEvent,
  Transfer as fDAITransferEvent,
  UnblockReward as fDAIUnblockRewardEvent
} from "../generated/fDAI/fDAI"
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
} from "../generated/schema"

import { log } from '@graphprotocol/graph-ts'

export function handlefDAIApproval(event: fDAIApprovalEvent): void {
  let entity = new fDAIApproval(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIBlockedReward(event: fDAIBlockedRewardEvent): void {
  let entity = new fDAIBlockedReward(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.startBlock = event.params.startBlock
  entity.endBlock = event.params.endBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIBurnFluid(event: fDAIBurnFluidEvent): void {
  let entity = new fDAIBurnFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIEmergency(event: fDAIEmergencyEvent): void {
  let entity = new fDAIEmergency(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIMaxUncheckedRewardLimitChanged(
  event: fDAIMaxUncheckedRewardLimitChangedEvent
): void {
  let entity = new fDAIMaxUncheckedRewardLimitChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIMintApproval(event: fDAIMintApprovalEvent): void {
  let entity = new fDAIMintApproval(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIMintFluid(event: fDAIMintFluidEvent): void {
  let entity = new fDAIMintFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAINewOperator(event: fDAINewOperatorEvent): void {
  let entity = new fDAINewOperator(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.old = event.params.old
  entity.new_ = event.params.new_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIOperatorChanged(
  event: fDAIOperatorChangedEvent
): void {
  let entity = new fDAIOperatorChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.oldOperator = event.params.oldOperator
  entity.newOperator = event.params.newOperator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIReward(event: fDAIRewardEvent): void {
  let entity = new fDAIReward(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.startBlock = event.params.startBlock
  entity.endBlock = event.params.endBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIRewardQuarantineThresholdUpdated(
  event: fDAIRewardQuarantineThresholdUpdatedEvent
): void {
  let entity = new fDAIRewardQuarantineThresholdUpdated(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAITransfer(event: fDAITransferEvent): void {
  let entity = new fDAITransfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefDAIUnblockReward(event: fDAIUnblockRewardEvent): void {
  let entity = new fDAIUnblockReward(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.originalRewardTx = event.params.originalRewardTx
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.startBlock = event.params.startBlock
  entity.endBlock = event.params.endBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
