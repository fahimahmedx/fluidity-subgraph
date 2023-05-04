import {
  Approval as fUSDTApprovalEvent,
  BlockedReward as fUSDTBlockedRewardEvent,
  BurnFluid as fUSDTBurnFluidEvent,
  Emergency as fUSDTEmergencyEvent,
  MaxUncheckedRewardLimitChanged as fUSDTMaxUncheckedRewardLimitChangedEvent,
  MintApproval as fUSDTMintApprovalEvent,
  MintFluid as fUSDTMintFluidEvent,
  NewOperator as fUSDTNewOperatorEvent,
  OperatorChanged as fUSDTOperatorChangedEvent,
  Reward as fUSDTRewardEvent,
  RewardQuarantineThresholdUpdated as fUSDTRewardQuarantineThresholdUpdatedEvent,
  Transfer as fUSDTTransferEvent,
  UnblockReward as fUSDTUnblockRewardEvent
} from "../generated/fUSDT/fUSDT"
import {
  fUSDTApproval,
  fUSDTBlockedReward,
  fUSDTBurnFluid,
  fUSDTEmergency,
  fUSDTMaxUncheckedRewardLimitChanged,
  fUSDTMintApproval,
  fUSDTMintFluid,
  fUSDTNewOperator,
  fUSDTOperatorChanged,
  fUSDTReward,
  fUSDTRewardQuarantineThresholdUpdated,
  fUSDTTransfer,
  fUSDTUnblockReward,
  volume
} from "../generated/schema"
import {
  BigDecimal
} from "@graphprotocol/graph-ts"

export function handlefUSDTApproval(event: fUSDTApprovalEvent): void {
  let entity = new fUSDTApproval(
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

export function handlefUSDTBlockedReward(event: fUSDTBlockedRewardEvent): void {
  let entity = new fUSDTBlockedReward(
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

export function handlefUSDTBurnFluid(event: fUSDTBurnFluidEvent): void {
  let entity = new fUSDTBurnFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDTEmergency(event: fUSDTEmergencyEvent): void {
  let entity = new fUSDTEmergency(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDTMaxUncheckedRewardLimitChanged(
  event: fUSDTMaxUncheckedRewardLimitChangedEvent
): void {
  let entity = new fUSDTMaxUncheckedRewardLimitChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDTMintApproval(event: fUSDTMintApprovalEvent): void {
  let entity = new fUSDTMintApproval(
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

export function handlefUSDTMintFluid(event: fUSDTMintFluidEvent): void {
  let entity = new fUSDTMintFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDTNewOperator(event: fUSDTNewOperatorEvent): void {
  let entity = new fUSDTNewOperator(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.old = event.params.old
  entity.new_ = event.params.new_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDTOperatorChanged(
  event: fUSDTOperatorChangedEvent
): void {
  let entity = new fUSDTOperatorChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.oldOperator = event.params.oldOperator
  entity.newOperator = event.params.newOperator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDTReward(event: fUSDTRewardEvent): void {
  let entity = new fUSDTReward(
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

export function handlefUSDTRewardQuarantineThresholdUpdated(
  event: fUSDTRewardQuarantineThresholdUpdatedEvent
): void {
  let entity = new fUSDTRewardQuarantineThresholdUpdated(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefUSDTTransfer(event: fUSDTTransferEvent): void {
  let entity = new fUSDTTransfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let volumeEntity = volume.load('fUSDT')
  if (volumeEntity) {
    volumeEntity.totalVolume = volumeEntity.totalVolume.plus(event.params.value.toBigDecimal().div(BigDecimal.fromString("1e6")))
  } else {
    volumeEntity = new volume('fUSDT')
    volumeEntity.totalVolume = event.params.value.toBigDecimal().div(BigDecimal.fromString("1e6"))
  }

  volumeEntity.save()
  entity.save()
}

export function handlefUSDTUnblockReward(event: fUSDTUnblockRewardEvent): void {
  let entity = new fUSDTUnblockReward(
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
