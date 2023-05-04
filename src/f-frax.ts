import {
  Approval as fFRAXApprovalEvent,
  BlockedReward as fFRAXBlockedRewardEvent,
  BurnFluid as fFRAXBurnFluidEvent,
  Emergency as fFRAXEmergencyEvent,
  MaxUncheckedRewardLimitChanged as fFRAXMaxUncheckedRewardLimitChangedEvent,
  MintApproval as fFRAXMintApprovalEvent,
  MintFluid as fFRAXMintFluidEvent,
  NewOperator as fFRAXNewOperatorEvent,
  OperatorChanged as fFRAXOperatorChangedEvent,
  Reward as fFRAXRewardEvent,
  RewardQuarantineThresholdUpdated as fFRAXRewardQuarantineThresholdUpdatedEvent,
  Transfer as fFRAXTransferEvent,
  UnblockReward as fFRAXUnblockRewardEvent
} from "../generated/fFRAX/fFRAX"
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
  fFRAXUnblockReward,
  volume
} from "../generated/schema"
import {
  BigDecimal
} from "@graphprotocol/graph-ts"

export function handlefFRAXApproval(event: fFRAXApprovalEvent): void {
  let entity = new fFRAXApproval(
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

export function handlefFRAXBlockedReward(event: fFRAXBlockedRewardEvent): void {
  let entity = new fFRAXBlockedReward(
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

export function handlefFRAXBurnFluid(event: fFRAXBurnFluidEvent): void {
  let entity = new fFRAXBurnFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefFRAXEmergency(event: fFRAXEmergencyEvent): void {
  let entity = new fFRAXEmergency(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefFRAXMaxUncheckedRewardLimitChanged(
  event: fFRAXMaxUncheckedRewardLimitChangedEvent
): void {
  let entity = new fFRAXMaxUncheckedRewardLimitChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefFRAXMintApproval(event: fFRAXMintApprovalEvent): void {
  let entity = new fFRAXMintApproval(
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

export function handlefFRAXMintFluid(event: fFRAXMintFluidEvent): void {
  let entity = new fFRAXMintFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefFRAXNewOperator(event: fFRAXNewOperatorEvent): void {
  let entity = new fFRAXNewOperator(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.old = event.params.old
  entity.new_ = event.params.new_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefFRAXOperatorChanged(
  event: fFRAXOperatorChangedEvent
): void {
  let entity = new fFRAXOperatorChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.oldOperator = event.params.oldOperator
  entity.newOperator = event.params.newOperator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefFRAXReward(event: fFRAXRewardEvent): void {
  let entity = new fFRAXReward(
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

export function handlefFRAXRewardQuarantineThresholdUpdated(
  event: fFRAXRewardQuarantineThresholdUpdatedEvent
): void {
  let entity = new fFRAXRewardQuarantineThresholdUpdated(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefFRAXTransfer(event: fFRAXTransferEvent): void {
  let entity = new fFRAXTransfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let volumeEntity = volume.load('fFRAX')
  if (volumeEntity) {
    volumeEntity.totalVolume = volumeEntity.totalVolume.plus(event.params.value.toBigDecimal().div(BigDecimal.fromString("1e18")))
  } else {
    volumeEntity = new volume('fFRAX')
    volumeEntity.totalVolume = event.params.value.toBigDecimal().div(BigDecimal.fromString("1e18"))
  }

  volumeEntity.save()
  entity.save()
}

export function handlefFRAXUnblockReward(event: fFRAXUnblockRewardEvent): void {
  let entity = new fFRAXUnblockReward(
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
