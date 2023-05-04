import {
  Approval as fTUSDApprovalEvent,
  BlockedReward as fTUSDBlockedRewardEvent,
  BurnFluid as fTUSDBurnFluidEvent,
  Emergency as fTUSDEmergencyEvent,
  MaxUncheckedRewardLimitChanged as fTUSDMaxUncheckedRewardLimitChangedEvent,
  MintApproval as fTUSDMintApprovalEvent,
  MintFluid as fTUSDMintFluidEvent,
  NewOperator as fTUSDNewOperatorEvent,
  OperatorChanged as fTUSDOperatorChangedEvent,
  Reward as fTUSDRewardEvent,
  RewardQuarantineThresholdUpdated as fTUSDRewardQuarantineThresholdUpdatedEvent,
  Transfer as fTUSDTransferEvent,
  UnblockReward as fTUSDUnblockRewardEvent
} from "../generated/fTUSD/fTUSD"
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
  fTUSDUnblockReward,
  volume
} from "../generated/schema"
import {
  BigDecimal
} from "@graphprotocol/graph-ts"

export function handlefTUSDApproval(event: fTUSDApprovalEvent): void {
  let entity = new fTUSDApproval(
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

export function handlefTUSDBlockedReward(event: fTUSDBlockedRewardEvent): void {
  let entity = new fTUSDBlockedReward(
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

export function handlefTUSDBurnFluid(event: fTUSDBurnFluidEvent): void {
  let entity = new fTUSDBurnFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDEmergency(event: fTUSDEmergencyEvent): void {
  let entity = new fTUSDEmergency(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDMaxUncheckedRewardLimitChanged(
  event: fTUSDMaxUncheckedRewardLimitChangedEvent
): void {
  let entity = new fTUSDMaxUncheckedRewardLimitChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDMintApproval(event: fTUSDMintApprovalEvent): void {
  let entity = new fTUSDMintApproval(
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

export function handlefTUSDMintFluid(event: fTUSDMintFluidEvent): void {
  let entity = new fTUSDMintFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDNewOperator(event: fTUSDNewOperatorEvent): void {
  let entity = new fTUSDNewOperator(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.old = event.params.old
  entity.new_ = event.params.new_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDOperatorChanged(
  event: fTUSDOperatorChangedEvent
): void {
  let entity = new fTUSDOperatorChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.oldOperator = event.params.oldOperator
  entity.newOperator = event.params.newOperator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDReward(event: fTUSDRewardEvent): void {
  let entity = new fTUSDReward(
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

export function handlefTUSDRewardQuarantineThresholdUpdated(
  event: fTUSDRewardQuarantineThresholdUpdatedEvent
): void {
  let entity = new fTUSDRewardQuarantineThresholdUpdated(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDTransfer(event: fTUSDTransferEvent): void {
  let entity = new fTUSDTransfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let volumeEntity = volume.load('fTUSD')
  if (volumeEntity) {
    volumeEntity.totalVolume = volumeEntity.totalVolume.plus(event.params.value.toBigDecimal().div(BigDecimal.fromString("1e18")))
  } else {
    volumeEntity = new volume('fTUSD')
    volumeEntity.totalVolume = event.params.value.toBigDecimal().div(BigDecimal.fromString("1e18"))
  }

  volumeEntity.save()
  entity.save()
}

export function handlefTUSDUnblockReward(event: fTUSDUnblockRewardEvent): void {
  let entity = new fTUSDUnblockReward(
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
