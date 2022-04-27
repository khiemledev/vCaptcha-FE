import { writable } from 'svelte/store'
import ChallengeStatus from "./commons/enums/challengeStatus"

export const sessionId = writable("")
export const imageCount = writable(0)
export const imageData = writable("")
export const warningMessage = writable("")
export const status = writable(ChallengeStatus.Empty)
export const challengeAnchor = writable({top: 0, left: 0})

export const imagesSelectStatus = writable( {image1: [], image2: [],})