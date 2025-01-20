import { buildCountryEvaluationMap } from '@/application/country/getCountryWithEvaluationInfoList/mapGetCountryWithEvaluationInfoList'
import { CountryRepository } from '@/domain/country/countryRepository'

export function createCountryRepository(): CountryRepository {
  return {
    getCountryWithEvaluationInfoList: async () => {
      const { countries } = await fetch('/api/countries-with-evaluation-info', { method: 'get' })
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(error)
        })
      const mappedCountriesWithEvaluationInfo = await buildCountryEvaluationMap(countries)
      return mappedCountriesWithEvaluationInfo
    },
    getCountryList: async () => {
      const { countries } = await fetch('/api/countries', { method: 'get' })
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(error)
        })
      return countries
    }
  }
}
