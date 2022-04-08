import { writable } from 'svelte/store'
import ChallengeStatus from "./commons/enums/challengeStatus.ts"

export const imageData = writable('')
export const status = writable(ChallengeStatus.Empty)
export const challengeAnchor = writable({top: 0, left: 0})

export const imagesSelectStatus = writable([])