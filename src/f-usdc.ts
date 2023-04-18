import {
  Approval as ApprovalEvent,
  BlockedReward as BlockedRewardEvent,
  BurnFluid as BurnFluidEvent,
  Emergency as EmergencyEvent,
  MaxUncheckedRewardLimitChanged as MaxUncheckedRewardLimitChangedEvent,
  MintApproval as MintApprovalEvent,
  MintFluid as MintFluidEvent,
  NewOperator as NewOperatorEvent,
  OperatorChanged as OperatorChangedEvent,
  Reward as RewardEvent,
  RewardQuarantineThresholdUpdated as RewardQuarantineThresholdUpdatedEvent,
  Transfer as TransferEvent,
  UnblockReward as UnblockRewardEvent
} from "../generated/fUSDC/fUSDC"
import {
  Approval,
  BlockedReward,
  BurnFluid,
  Emergency,
  MaxUncheckedRewardLimitChanged,
  MintApproval,
  MintFluid,
  NewOperator,
  OperatorChanged,
  Reward,
  RewardQuarantineThresholdUpdated,
  Transfer,
  UnblockReward
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
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

export function handleBlockedReward(event: BlockedRewardEvent): void {
  let entity = new BlockedReward(
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

export function handleBurnFluid(event: BurnFluidEvent): void {
  let entity = new BurnFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergency(event: EmergencyEvent): void {
  let entity = new Emergency(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxUncheckedRewardLimitChanged(
  event: MaxUncheckedRewardLimitChangedEvent
): void {
  let entity = new MaxUncheckedRewardLimitChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintApproval(event: MintApprovalEvent): void {
  let entity = new MintApproval(
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

export function handleMintFluid(event: MintFluidEvent): void {
  let entity = new MintFluid(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewOperator(event: NewOperatorEvent): void {
  let entity = new NewOperator(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.old = event.params.old
  entity.new_ = event.params.new_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorChanged(event: OperatorChangedEvent): void {
  let entity = new OperatorChanged(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.oldOperator = event.params.oldOperator
  entity.newOperator = event.params.newOperator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReward(event: RewardEvent): void {
  let entity = new Reward(
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

export function handleRewardQuarantineThresholdUpdated(
  event: RewardQuarantineThresholdUpdatedEvent
): void {
  let entity = new RewardQuarantineThresholdUpdated(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
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

export function handleUnblockReward(event: UnblockRewardEvent): void {
  let entity = new UnblockReward(
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
