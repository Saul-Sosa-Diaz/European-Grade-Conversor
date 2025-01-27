export enum EvaluationType {
  CONTINUOUS = 'continuous',
  DISCRETE = 'discrete',
}

export type EvaluationSystem = {
  evaluationSystemID: string
  evaluationSystemName: string
  evaluationType: EvaluationType
  validGrades: string[]
  fixed: number
  universityID: string
  universityName: string
}
