import { basics } from '@/static/resume-es.json'

const { name, email, profiles } = basics

interface Ref {
	reference: string
	context: string
	resource: string
	container: string
}

export const contacts: Ref[] = [
	{
		reference: `mailto:${email}`,
		context: `Enviar correo electrónico a ${name} al correo ${email}`,
		resource: 'public/icons/email.svg',
		container: email,
	},
	...profiles.map(
		({ url, network, username }): Ref => ({
			reference: url,
			context: `Visitar el perfil de ${name} en ${network}`,
			resource: `public/icons/${network}.svg`,
			container: username,
		})
	),
]
