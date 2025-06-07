// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

interface ImportMetaEnv {
  readonly VITE_GLOBAL_MODEL_MAX_RESPONSE_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export {};
