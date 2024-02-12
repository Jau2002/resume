import { basics } from '@/static/resume-es.json'

const { name, email, profiles } = basics

interface Contacts {
	reference: string
	context: string
	resource: string
	container: string
}

const contacts: Contacts[] = [
	{
		reference: `mailto:${email}`,
		context: `Enviar correo electrónico a ${name} al correo ${email}`,
		resource: 'public/icons/email.svg',
		container: email,
	},
	...profiles.map(
		({ url, network, username }): Contacts => ({
			reference: url,
			context: `Visitar el perfil de ${name} en ${network}`,
			resource: `public/icons/${network}.svg`,
			container: username,
		})
	),
]

export default contacts
