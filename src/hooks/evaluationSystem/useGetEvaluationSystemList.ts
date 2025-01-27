import { useApi } from '@/context/ApiContext'
import { useQuery } from '@tanstack/react-query'

export const useGetEvaluationSystemList = () => {
  const { EvaluationSystem } = useApi()
  const { data, ...rest } = useQuery({
    queryKey: ['evaluationSystemList'],
    queryFn: async () => await EvaluationSystem.getEvaluationSystemList(),
  })
  console.log(data)

  return { evaluationSystemList: data, ...rest }
}
