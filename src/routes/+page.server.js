import { Actions } from '@sveltejs/kit';

export const load = async ({ fetch, cookies }) => {
	const response = await fetch('/api/');
	return {
		response: await response.json(),
		time: cookies.get('time')
	};
};

export const actions = {
	time: async ({ fetch, cookies }) => {
		const response = await fetch('/api/main/time');
		const result = await response.json();
		cookies.set('time', result.time, { path: '/' });
	},
	reset: async ({ cookies }) => {
		cookies.delete('time');
	}
};
