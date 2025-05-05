// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Higor',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '4aacab47a34cdd0baac1f6cf5ea060e1', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'pt_br', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-23.420999',
	defaultLongitude: '-51.933056',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'TodoIst',
			icon: 'trello',
			link: 'https://app.todoist.com/app/projects/active',
		},
		{
			id: '4',
			name: 'ChatGPT',
			icon: 'bot',
			link: 'https://chatgpt.com',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'University',
					link: 'https://uninga.jacad.com.br/academico/aluno-v2/login',
				},
				{
					name: 'Cisco Academy',
					link: 'https://www.netacad.com/pt/catalogs/learn',
				},
				{
					name: 'DLtec',
					link: 'https://www.dltec.com.br/login',
				},
				{
					name: 'Google Docs',
					link: 'https://docs.google.com',
				},
			],
		},
		{
			icon: 'shield',
			id: '2',
			links: [
				{
					name: 'Milvus',
					link: 'https://app.milvus.com.br/login',
				},
				{
					name: 'Bitsac',
					link: 'https://new.bitsac.com.br/login',
				},
				{
					name: 'Email',
					link: 'https://webmail.bitsafeti.com.br',
				},
				{
					name: 'Zabbix',
					link: 'http://172.16.10.82/zabbix/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'shield',
			id: '1',
			links: [
				{
					name: 'Milvus',
					link: 'https://app.milvus.com.br/login',
				},
				{
					name: 'Bitsac',
					link: 'https://new.bitsac.com.br/login',
				},
				{
					name: 'Email',
					link: 'https://webmail.bitsafeti.com.br',
				},
				{
					name: 'Zabbix',
					link: 'http://172.16.10.82/zabbix/',
				},
			],
		},
		{
			icon: 'castle',
			id: '2',
			links: [
				{
					name: 'Painel Email',
					link: 'https://painel.bitsafeti.com.br/',
				},
				{
					name: 'Painel Acronis',
					link: 'https://cloud.bitsafeti.com.br/',
				},
				{
					name: 'Painel Bitdefender',
					link: 'https://gravityzone.bitdefender.com/',
				},
				{
					name: 'Painel Ruije',
					link: 'https://cloud-la.ruijienetworks.com/',
				},
			],
		},
	],
};
