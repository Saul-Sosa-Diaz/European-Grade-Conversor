import { ICountryConverter } from '@/lib/interfaces/i-grade-converter'

export class CzechRepublicGradeConverter implements ICountryConverter {
  convertToDestinationCountry(grade: number): string {
    if (grade >= 9) return '1 (Výborně)'
    if (grade >= 8) return '1.5 (Velmi dobře)'
    if (grade >= 7) return '2 (Dobře)'
    if (grade >= 6) return '2.5 (Uspokojivě)'
    if (grade >= 5) return '3 (Dostatečně)'
    return '4 (neprospěl)'
  }

  convertToSpain(grade: string): string {
    const NewGrade = parseFloat(grade)
    if (NewGrade === 1) return '9.5'
    if (NewGrade === 1.5) return '8.5'
    if (NewGrade === 2) return '7.5'
    if (NewGrade === 2.5) return '6.5'
    if (NewGrade === 3) return '5.5'
    if (NewGrade === 4) return '2.5'
    return '0'
  }
}
