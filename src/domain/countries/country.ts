import { ICountryConverter } from '@/lib/interfaces/i-grade-converter'

export enum EvaluationType {
  CONTINOUOS = 'continuous',
  DISCRETE = 'discrete',
}

export type Country = {
  label: string
  code?: string
  key: string
  selectable?: boolean
  gradeConverter?: ICountryConverter
  validGrades?: string[]
  suffix?: string
  evaluationType?: EvaluationType
  aditionalInfo?: string
  children?: Country[]
  document_url?: string
  url?: string
}
