// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface user {
			id: number;
			name: string;
			email: string;
		  }
		
		  type users = user[];
	}
}



export {};
