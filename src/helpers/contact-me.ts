import { basics } from '@/static/resume-es.json'

const { name, label, location, image, email, phone, profiles } = basics

profiles.map(({ url, network, username }) => ({
	url,
	network,
	username,
}))

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
	{
		reference: `tel:${phone}`,
		context: `Llamar por teléfono a ${name} al número ${phone}`,
		resource: 'public/icons/phone.svg',
		container: phone,
	},
	...profiles.map(
		({ url, network }): Contacts => ({
			reference: url,
			context: `Visitar el perfil de ${name} en ${network}`,
			resource: `public/icons/${network}.svg`,
			container: url,
		})
	),
]

export default contacts
