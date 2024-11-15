import { ICountryConverter } from '@/lib/interfaces/i-grade-converter'
import { FranceGradeConverter } from '@/lib/countriesClasses/france-grade-converter'
import { DenmarkGradeConverter } from '@/lib/countriesClasses/denmark-grade-converter'
import { IrelandGradeConverter } from '@/lib/countriesClasses/ireland-grade-converter'
import { SpainGradeConverter } from '@/lib/countriesClasses/spain-grade-converter'
import { UnitedKingdomGradeConverter } from '@/lib/countriesClasses/united-kingdom-grade-converter'
import { BelgiumGradeConverter } from '@/lib/countriesClasses/belgium-grade-converter'
import { AustriaGradeConverter } from '@/lib/countriesClasses/austria-grade-converter'
import { BulgariaGradeConverter } from '@/lib/countriesClasses/bulgaria-grade-converter'
import { CzechRepublicGradeConverter } from '@/lib/countriesClasses/czech-republic-grade-converter'
import { ItalySalernoGradeConverter } from '@/lib/countriesClasses/italy-salerno-grade-converter'
import { ItalyBoloniaScienceGradeConverter } from '@/lib/countriesClasses/italy-bolonia-science-grade-converter'
import { PortugalGradeConverter } from '@/lib/countriesClasses/portugal-grade-converter'
import { GermanyGradeConverter } from '@/lib/countriesClasses/germany-grade-converter'
import { GreeceGradeConverter } from '@/lib/countriesClasses/greece-grade-converter'
import { NorwayGradeConverter } from '@/lib/countriesClasses/norway-grade-converter'
import { PolandGradeConverter } from '@/lib/countriesClasses/poland-grade-converter'
import { SloveniaGradeConverter } from '@/lib/countriesClasses/slovenia-grade-converter'
import { SwitzerlandGradeConverter } from '@/lib/countriesClasses/switzerland-grade-converter'
import { ItalyBoloniaEngineeringGradeConverter } from '@/lib/countriesClasses/italy-bolonia-engineering-grade-converter'
import { Country } from '@/domain/countries/country'

function generateGrades(inicio: number, fin: number, paso: number): string[] {
  const resultado: string[] = []
  for (let i = inicio; i <= fin; i += paso) {
    // Redondeamos el número a dos decimales
    i = parseFloat(i.toFixed(2))
    resultado.push(String(i))
  }
  return resultado
}

// Hacer uno para los hoja y otro para los padres

export const COUNTRIES: Country[] = [
  {
    key: '0',
    selectable: false,
    label: 'Italy',
    code: 'IT',
    input: true,
    children: [
      {
        label: 'Salerno',
        key: '0-0',
        code: 'IT',
        gradeConverter: new ItalySalernoGradeConverter(),
        validGrades: generateGrades(0, 30, 1).concat('30L'),
        input: true,
        aditionalInfo: 'Insert an integer number between 0 and 30. To write Cum Laude, write 30L',
      },
      {
        label: 'Bolonia',
        key: '0-1',
        code: 'IT',
        selectable: false,
        input: true,
        validGrades: generateGrades(0, 30, 1).concat('30L'),
        aditionalInfo: "Insert a number between 0 and 30. Type '30 cum Laude' as '30L'",
        children: [
          {
            label: 'Bolonia Science',
            key: '0-1-0',
            code: 'IT',
            input: true,
            validGrades: generateGrades(0, 30, 1).concat('30L'),
            aditionalInfo: "Insert a number between 0 and 30. Type '30 cum Laude' as '30L'",
            gradeConverter: new ItalyBoloniaScienceGradeConverter(),
            document_url:
              'https://www.unibo.it/it/studiare/guida-alla-scelta-del-corso/sistema-universitario/ects-label/tabelle-di-conversione-dei-voti-nella-scala-ects/tabelle-ects-a-a-2024-25',
            url: 'https://www.unibo.it/it/studiare/guida-alla-scelta-del-corso/sistema-universitario/ects-label/tabelle-di-conversione-dei-voti-nella-scala-ects/tabelle-ects-a-a-2024-25/area-isced-05-2013-natural-sciences-mathematics-and-statistics/@@download/file/Unibo_ECTS_gradingtables_24-25_AreaISCED_05%20%E2%80%93%20Natural%20sciences,%20mathematics%20and%20statistics.pdf',
          },
          {
            label: 'Bolonia Engineering',
            key: '0-1-1',
            code: 'IT',
            input: true,
            validGrades: generateGrades(0, 30, 1).concat('30L'),
            aditionalInfo: "Insert a number between 0 and 30. Type '30 cum Laude' as '30L'",
            gradeConverter: new ItalyBoloniaEngineeringGradeConverter(),
            document_url:
              'https://www.unibo.it/it/studiare/guida-alla-scelta-del-corso/sistema-universitario/ects-label/tabelle-di-conversione-dei-voti-nella-scala-ects/tabelle-ects-a-a-2024-25',
            url: 'https://www.unibo.it/it/studiare/guida-alla-scelta-del-corso/sistema-universitario/ects-label/tabelle-di-conversione-dei-voti-nella-scala-ects/tabelle-ects-a-a-2024-25/area-isced-06-2013-information-and-communication-technologies-e-area-isced-07-engineering-manufactoring-and-construction/@@download/file/Unibo_ECTS_gradingtables_24-25_AreeISCED_06%20e%2007%20%E2%80%93%20Information%20and%20comm%20tech%20and%20Engineering,%20manufactoring%20and%20co.pdf',
          },
        ],
      },
    ],
  },
  {
    // check
    key: '1',
    code: 'FR',
    label: 'France',
    input: true,
    validGrades: generateGrades(0, 20, 0.01),
    gradeConverter: new FranceGradeConverter(),
    aditionalInfo: 'Insert a number between 0 and 20, with a maximum of 2 decimal places',
    document_url: 'https://www.ensta-bretagne.fr/en/ects-grading-system',
    url: 'https://www.studying-in-france.org/french-grading-system/',
  },
  {
    // check
    key: '2',
    code: 'ES',
    label: 'Spain',
    input: true,
    validGrades: generateGrades(0, 10, 0.01),
    gradeConverter: new SpainGradeConverter(),
    aditionalInfo: 'Insert a number between 0 and 10, with a maximum of 2 decimal places',
    document_url:
      'https://www.uam.es/Economicas/documento/1446782389126/Equivalencias_ECTS.pdf?blobheader=application/pdf',
  },
  {
    // check TO DO IMPLEMENT LIKE THE OTHERS COUNTRIES
    key: '3',
    label: 'Ireland',
    input: true,
    code: 'IE',
    validGrades: generateGrades(0, 100, 1),
    gradeConverter: new IrelandGradeConverter(),
    suffix: '%',
    aditionalInfo: 'Insert an integer number between 0 and 100',
    document_url: 'https://www.irelandassignmenthelp.com/blogs/grading-system-ireland/',
  },
  {
    // checked
    key: '4',
    label: 'United Kingdom',
    code: 'GB',
    input: true,
    validGrades: generateGrades(0, 100, 1),
    gradeConverter: new UnitedKingdomGradeConverter(),
    suffix: '%',
    aditionalInfo: 'Insert an integer number between 0 and 100',
    document_url:
      'https://www.mastersportal.com/articles/3207/understanding-european-grading-systems.html',
  },
  {
    // check
    key: '5',
    label: 'Belgium',
    code: 'BE',
    input: true,
    validGrades: generateGrades(0, 20, 1),
    gradeConverter: new BelgiumGradeConverter(),
    aditionalInfo: 'Insert a number between 0 and 20.',
    document_url: 'https://www.ap.be/en/ects-grading-scale',
  },
  {
    // check
    key: '6',
    label: 'Portugal',
    code: 'PT',
    input: true,
    validGrades: generateGrades(0, 20, 0.1),
    gradeConverter: new PortugalGradeConverter(),
    aditionalInfo: 'Insert a number between 0 and 20, with a maximum of 1 decimal',
    document_url: 'https://www.uc.pt/en/ects/info_inst/ma',
  },
  {
    // check
    key: '7',
    label: 'Denmark',
    code: 'DK',
    input: false,
    validGrades: ['-3', '00', '02', '4', '7', '10', '12'],
    gradeConverter: new DenmarkGradeConverter(),
    document_url:
      'https://www.dtu.dk/english/education/student-guide/studying-at-dtu/grade-translation',
  },
  {
    // check
    key: '8',
    label: 'Austria',
    code: 'AT',
    input: false,
    validGrades: [
      '5 (Nicht genügend)',
      '4 (Genügend)',
      '3 (Befriedigend)',
      '2 (Gut)',
      '1 (Sehr gut)',
    ],
    gradeConverter: new AustriaGradeConverter(),
    document_url:
      'https://www.ul.ie/sites/default/files/global/Description_of_the_Austrian_grading_system.pdf',
  },
  {
    // check TODO IMPLEMENT FAILS
    key: '9',
    label: 'Bulgaria',
    code: 'BG',
    input: false,
    validGrades: ['3', '4', '5', '6'],
    gradeConverter: new BulgariaGradeConverter(),
    document_url:
      'https://btu.bg/index.php/en/education-m-bg-en/erasmus-plus-m-en/erasmus-grading-systems-m-en',
  },
  {
    // check
    key: '10',
    label: 'Czech Republic',
    code: 'CZ',
    input: false,
    validGrades: ['4', '3', '2.5', '2', '1.5', '1'],
    gradeConverter: new CzechRepublicGradeConverter(),
    document_url: 'https://en.wikipedia.org/wiki/Academic_grading_in_the_Czech_Republic',
    url: 'https://fsv.cuni.cz/en/study/study-regulations/grading-system',
  },
  {
    // check
    key: '11',
    label: 'Germany',
    code: 'DE',
    input: true,
    validGrades: generateGrades(1, 5, 0.01),
    gradeConverter: new GermanyGradeConverter(),
    aditionalInfo: 'Insert a number between 1 and 5, with a maximum of 2 decimal',
    document_url: 'https://www.studying-in-germany.org/german-grading-system/',
  },
  {
    // check
    key: '12',
    label: 'Greece',
    code: 'GR',
    input: true,
    validGrades: generateGrades(0, 10, 0.01),
    gradeConverter: new GreeceGradeConverter(),
    aditionalInfo: 'Insert a number between 0 and 10, with a maximum of 2 decimal places',
    document_url: 'https://physics.uoi.gr/en/ects-conversion-table/',
  },
  {
    // check
    key: '13',
    label: 'Norway',
    code: 'NO',
    input: false,
    validGrades: ['A', 'B', 'C', 'D', 'E', 'F'],
    gradeConverter: new NorwayGradeConverter(),
    document_url: 'https://en.wikipedia.org/wiki/Academic_grading_in_Norway',
  },
  {
    // check
    key: '14',
    label: 'Poland',
    code: 'PL',
    input: false,
    validGrades: [
      '2 (fail - niedostateczny)',
      '3 (Satisfactory - dostateczny)',
      '3+ (Better than satisfactory)',
      '4 (Good - dobry)',
      '4+ (Better than good)',
      '5 (Very good- bardzo dobry)',
    ],
    gradeConverter: new PolandGradeConverter(),
    document_url: 'https://www.umk.pl/en/erasmus/life/guide/grading/',
  },
  {
    // check
    key: '15',
    label: 'Slovenia',
    code: 'SI',
    input: false,
    validGrades: generateGrades(1, 10, 1),
    gradeConverter: new SloveniaGradeConverter(),
    document_url: 'https://www.fzv.um.si/en/grading-system-slovenia',
  },
  {
    // check
    key: '16',
    label: 'Switzerland',
    code: 'CH',
    input: true,
    validGrades: [
      '1',
      '2',
      '2.5',
      '3',
      '3.5',
      '4',
      ...generateGrades(4.25, 4.5, 0.01),
      ...generateGrades(4.75, 5, 0.01),
      ...generateGrades(5.25, 5.5, 0.01),
      ...generateGrades(5.75, 6, 0.01),
    ],
    gradeConverter: new SwitzerlandGradeConverter(),
    aditionalInfo:
      'The grading scale goes from 1.0 to 6.0 in quarter grade (0.25) steps. The pass grade is 4.0, the maximum grade is 6.0.',
    document_url:
      'https://ethz.ch/content/dam/ethz/main/education/rechtliches-abschluesse/grading.pdf',
  },
].sort((a, b) => a.label.localeCompare(b.label))

export function findCountryByKey(key: string): Country | undefined {
  function searchCountry(country: Country, key: string): Country | undefined {
    if (country.key === key) {
      return country
    }

    if (country.children) {
      for (const child of country.children) {
        const result = searchCountry(child, key)
        if (result) {
          return result
        }
      }
    }

    return undefined
  }

  for (const country of COUNTRIES) {
    const result = searchCountry(country, key)
    if (result) {
      return result
    }
  }

  return undefined
}
