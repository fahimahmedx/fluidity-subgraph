import {
  Approval as fUSDCApprovalEvent,
  BlockedReward as fUSDCBlockedRewardEvent,
  BurnFluid as fUSDCBurnFluidEvent,
  Emergency as fUSDCEmergencyEvent,
  MaxUncheckedRewardLimitChanged as fUSDCMaxUncheckedRewardLimitChangedEvent,
  MintApproval as fUSDCMintApprovalEvent,
  MintFluid as fUSDCMintFluidEvent,
  NewOperator as fUSDCNewOperatorEvent,
  OperatorChanged as fUSDCOperatorChangedEvent,
  Reward as fUSDCRewardEvent,
  RewardQuarantineThresholdUpdated as fUSDCRewardQuarantineThresholdUpdatedEvent,
  Transfer as fUSDCTransferEvent,
  UnblockReward as fUSDCUnblockRewardEvent
} from "../generated/fUSDC/fUSDC"
import {
  fUSDCApproval,
  fUSDCBlockedReward,
  fUSDCBurnFluid,
  fUSDCEmergency,
  fUSDCMaxUncheckedRewardLimitChanged,
  fUSDCMintApproval,
  fUSDCMintFluid,
  fUSDCNewOperator,
  fUSDCOperatorChanged,
  fUSDCReward,
  fUSDCRewardQuarantineThresholdUpdated,
  fUSDCTransfer,
  fUSDCUnblockReward,
  volume
} from "../generated/schema"
import {
  BigDecimal
} from "@graphprotocol/graph-ts"

export function handlefUSDCApproval(event: fUSDCApprovalEvent): void {
  let entity = new fUSDCApproval(
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

export function handlefUSDCBlockedReward(event: fUSDCBlockedRewardEvent): void {
  let entity = new fUSDCBlockedReward(
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

export function handlefUSDCBurnFluid(event: fUSDCBurnFluidEvent): void {
  let entity = new fUSDCBurnFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDCEmergency(event: fUSDCEmergencyEvent): void {
  let entity = new fUSDCEmergency(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDCMaxUncheckedRewardLimitChanged(
  event: fUSDCMaxUncheckedRewardLimitChangedEvent
): void {
  let entity = new fUSDCMaxUncheckedRewardLimitChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDCMintApproval(event: fUSDCMintApprovalEvent): void {
  let entity = new fUSDCMintApproval(
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

export function handlefUSDCMintFluid(event: fUSDCMintFluidEvent): void {
  let entity = new fUSDCMintFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDCNewOperator(event: fUSDCNewOperatorEvent): void {
  let entity = new fUSDCNewOperator(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.old = event.params.old
  entity.new_ = event.params.new_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDCOperatorChanged(
  event: fUSDCOperatorChangedEvent
): void {
  let entity = new fUSDCOperatorChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.oldOperator = event.params.oldOperator
  entity.newOperator = event.params.newOperator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDCReward(event: fUSDCRewardEvent): void {
  let entity = new fUSDCReward(
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

export function handlefUSDCRewardQuarantineThresholdUpdated(
  event: fUSDCRewardQuarantineThresholdUpdatedEvent
): void {
  let entity = new fUSDCRewardQuarantineThresholdUpdated(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDCTransfer(event: fUSDCTransferEvent): void {
  let entity = new fUSDCTransfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let volumeEntity = volume.load('fUSDC')
  if (volumeEntity) {
    volumeEntity.totalVolume = volumeEntity.totalVolume.plus(event.params.value.toBigDecimal())
  } else {
    volumeEntity = new volume('fUSDC')
    volumeEntity.totalVolume = BigDecimal.fromString("0")
  }

  volumeEntity.save()
  entity.save()
}

export function handlefUSDCUnblockReward(event: fUSDCUnblockRewardEvent): void {
  let entity = new fUSDCUnblockReward(
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
