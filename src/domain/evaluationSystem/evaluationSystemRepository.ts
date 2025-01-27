import { EvaluationSystem, EvaluationType } from './evaluationSystem'

export namespace ConvertGrade {
  export type Params = {
    fromEvaluationSystemID: string
    toEvaluationSystemID: string
    fromEvaluationType: EvaluationType
    toEvaluationType: EvaluationType
    grade: string
    fixed: string
  }
  export type Response = string
  export type Request = (params: ConvertGrade.Params) => Promise<ConvertGrade.Response>
}

export namespace GetEvaluationSystemList {
  export type Params = void
  export type Response = EvaluationSystem[]
  export type Request = (
    params: GetEvaluationSystemList.Params,
  ) => Promise<GetEvaluationSystemList.Response>
}

export namespace UpdateEvaluationSystem {
  export type Params = EvaluationSystem
  export type Response = void
  export type Request = (
    params: UpdateEvaluationSystem.Params,
  ) => Promise<UpdateEvaluationSystem.Response>
}
export namespace CreateEvaluationSystem {
  export type Params = EvaluationSystem
  export type Response = void
  export type Request = (
    params: CreateEvaluationSystem.Params,
  ) => Promise<CreateEvaluationSystem.Response>
}

export namespace DeleteEvaluationSystem {
  export type Params = EvaluationSystem
  export type Response = void
  export type Request = (
    params: DeleteEvaluationSystem.Params,
  ) => Promise<DeleteEvaluationSystem.Response>
}

export interface EvalutationSystemRepository {
  convertGrade: ConvertGrade.Request
  getEvaluationSystemList: GetEvaluationSystemList.Request
  updateEvaluationSystem: UpdateEvaluationSystem.Request
  createEvaluationSystem: CreateEvaluationSystem.Request
  deleteEvaluationSystem: DeleteEvaluationSystem.Request
}
