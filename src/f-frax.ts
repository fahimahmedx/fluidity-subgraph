import {
  fFRAXApproval as fFRAXApprovalEvent,
  fFRAXBlockedReward as fFRAXBlockedRewardEvent,
  fFRAXBurnFluid as fFRAXBurnFluidEvent,
  fFRAXEmergency as fFRAXEmergencyEvent,
  fFRAXMaxUncheckedRewardLimitChanged as fFRAXMaxUncheckedRewardLimitChangedEvent,
  fFRAXMintApproval as fFRAXMintApprovalEvent,
  fFRAXMintFluid as fFRAXMintFluidEvent,
  fFRAXNewOperator as fFRAXNewOperatorEvent,
  fFRAXOperatorChanged as fFRAXOperatorChangedEvent,
  fFRAXReward as fFRAXRewardEvent,
  fFRAXRewardQuarantineThresholdUpdated as fFRAXRewardQuarantineThresholdUpdatedEvent,
  fFRAXTransfer as fFRAXTransferEvent,
  fFRAXUnblockReward as fFRAXUnblockRewardEvent
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
  fFRAXUnblockReward
} from "../generated/schema"

export function handlefFRAXApproval(event: fFRAXApprovalEvent): void {
  let entity = new fFRAXApproval(
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

export function handlefFRAXBlockedReward(event: fFRAXBlockedRewardEvent): void {
  let entity = new fFRAXBlockedReward(
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

export function handlefFRAXBurnFluid(event: fFRAXBurnFluidEvent): void {
  let entity = new fFRAXBurnFluid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefFRAXMintApproval(event: fFRAXMintApprovalEvent): void {
  let entity = new fFRAXMintApproval(
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

export function handlefFRAXMintFluid(event: fFRAXMintFluidEvent): void {
  let entity = new fFRAXMintFluid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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

export function handlefFRAXRewardQuarantineThresholdUpdated(
  event: fFRAXRewardQuarantineThresholdUpdatedEvent
): void {
  let entity = new fFRAXRewardQuarantineThresholdUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefFRAXTransfer(event: fFRAXTransferEvent): void {
  let entity = new fFRAXTransfer(
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

export function handlefFRAXUnblockReward(event: fFRAXUnblockRewardEvent): void {
  let entity = new fFRAXUnblockReward(
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
