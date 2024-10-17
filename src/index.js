/**
 * Cloudflare Worker Webhook
 *
 * This worker creates a simple webhook that can receive POST requests
 * and respond to them.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Send a POST request to http://localhost:8787/webhook to test
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		return new Response(JSON.stringify({ message: 'Hello World' }), {
			headers: { 'Content-Type': 'application/json' },
		});
	},
};
