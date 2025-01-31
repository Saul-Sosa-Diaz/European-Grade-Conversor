import { buildContinuousGradeConversionListByEvaluationIDMap } from '@/application/evaluationSystem/getContinuousGradeConversionListByEvaluationID/mapGetContinuousGradeConversionts'
import { buildEvaluationSystemListMap } from '@/application/evaluationSystem/getEvaluationSystemList/mapGetEvaluationSystemList'
import {
  buildAPIEvaluationSystem,
  buildAPIEvaluationSystemWithGradeConversions,
} from '@/application/evaluationSystem/mapAPIEvaluationSystemy'
import { API_URL } from '@/constants/apiURL'
import {
  APIContinuousGradeConversion,
  APIEvaluationSystem,
} from '@/domain/evaluationSystem/dto/ApiEvaluationSystem'
import {
  ConvertGrade,
  EvaluationSystemRepository,
  GetContinuousGradeConversionListByEvaluationID,
} from '@/domain/evaluationSystem/evaluationSystemRepository'

export function createEvaluationSystemRepository(): EvaluationSystemRepository {
  return {
    convertGrade: async (params: ConvertGrade.Params) => {
      const { convertedGrade } = await fetch(API_URL.evaluationSystem.convertGrade, {
        method: 'post',
        body: JSON.stringify({ ...params }),
      })
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(error)
        })
      return convertedGrade
    },
    getEvaluationSystemList: async () => {
      const evaluationSystemList: { evaluationSystemList: APIEvaluationSystem[] } = await fetch(
        API_URL.evaluationSystem.getEvaluationSystemList,
      )
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(error)
        })

      const mappedEvaluationSystemList = buildEvaluationSystemListMap(
        evaluationSystemList.evaluationSystemList,
      )
      return mappedEvaluationSystemList
    },
    getContinouosGradeConversionListByEvaluationID: async (
      params: GetContinuousGradeConversionListByEvaluationID.Params,
    ) => {
      const continuousGradeConversionList: {
        continuousGradeConversionListByEvaluationID: APIContinuousGradeConversion[]
      } = await fetch(API_URL.evaluationSystem.getContinouosGradeConversionListByEvaluationID, {
        method: 'post',
        body: JSON.stringify({ ...params }),
      })
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(error)
        })
      const continuousGradeConversion = await buildContinuousGradeConversionListByEvaluationIDMap(
        continuousGradeConversionList.continuousGradeConversionListByEvaluationID,
      )
      return continuousGradeConversion
    },
    updateEvaluationSystem: async (params) => {
      const response = await fetch(API_URL.evaluationSystem.updateEvaluationSystem, {
        method: 'post',
        body: JSON.stringify(await buildAPIEvaluationSystemWithGradeConversions(params)),
      }).then((response) => response.json())
      if (!response.success) {
        throw new Error(response.error)
      }
    },
    createEvaluationSystem: async (params) => {
      const response = await fetch(API_URL.evaluationSystem.createEvaluationSystem, {
        method: 'post',
        body: JSON.stringify(await buildAPIEvaluationSystemWithGradeConversions(params)),
      }).then((response) => response.json())
      if (!response.success) {
        throw new Error(response.error)
      }
    },
    deleteEvaluationSystem: async (params) => {
      const response = await fetch(API_URL.evaluationSystem.deleteEvaluationSystem, {
        method: 'post',
        body: JSON.stringify(await buildAPIEvaluationSystem(params)),
      }).then((response) => response.json())
      if (!response.success) {
        throw new Error(response.error)
      }
    },
  }
}
