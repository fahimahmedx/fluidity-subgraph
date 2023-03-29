import {
  fTUSDApproval as fTUSDApprovalEvent,
  fTUSDBlockedReward as fTUSDBlockedRewardEvent,
  fTUSDBurnFluid as fTUSDBurnFluidEvent,
  fTUSDEmergency as fTUSDEmergencyEvent,
  fTUSDMaxUncheckedRewardLimitChanged as fTUSDMaxUncheckedRewardLimitChangedEvent,
  fTUSDMintApproval as fTUSDMintApprovalEvent,
  fTUSDMintFluid as fTUSDMintFluidEvent,
  fTUSDNewOperator as fTUSDNewOperatorEvent,
  fTUSDOperatorChanged as fTUSDOperatorChangedEvent,
  fTUSDReward as fTUSDRewardEvent,
  fTUSDRewardQuarantineThresholdUpdated as fTUSDRewardQuarantineThresholdUpdatedEvent,
  fTUSDTransfer as fTUSDTransferEvent,
  fTUSDUnblockReward as fTUSDUnblockRewardEvent
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
  fTUSDUnblockReward
} from "../generated/schema"

export function handlefTUSDApproval(event: fTUSDApprovalEvent): void {
  let entity = new fTUSDApproval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDMintApproval(event: fTUSDMintApprovalEvent): void {
  let entity = new fTUSDMintApproval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDTransfer(event: fTUSDTransferEvent): void {
  let entity = new fTUSDTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefTUSDUnblockReward(event: fTUSDUnblockRewardEvent): void {
  let entity = new fTUSDUnblockReward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
