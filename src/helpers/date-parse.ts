import { education, work } from '@/static/resume-es.json'
import capitalize from 'just-capitalize'

function normaliceDate(time: string): string {
	const date: Date = new Date(time)

	const dateYear: number = date.getFullYear()

	const dateAbbreviationMonth: string = capitalize(
		date.toLocaleString('es-ES', {
			month: 'short',
		})
	)
	return `${capitalize(dateAbbreviationMonth)}. ${dateYear}`
}

export const works = work.map((experience) => ({
	...experience,
	startDate: normaliceDate(experience.startDate),
	endDate:
		experience.endDate != null ? normaliceDate(experience.endDate) : null,
}))

export const institutions = education.map((entity) => ({
	...entity,
	startDate: normaliceDate(entity.startDate),
	endDate: entity.endDate != null ? normaliceDate(entity.endDate) : null,
}))
