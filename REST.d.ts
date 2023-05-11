declare namespace REST {
	type APIResponse<T = unknown> = T & { success: true } | APIError;
	type Status = `${ number } ${ string }`;
	interface APIError {
		success: false;
		error: Status;
		description?: string;
		readable?: string;
	}
}

declare namespace EmberAPI {

	interface ClientDownloads {
		assets: Ember.Asset[];
		version: string;
	}

	interface Servers {
		servers: Record<string, Ember.Server>;
	}

	interface Store {
		plans: Record<string, Ember.Plan>;
	}

	interface SecretIntent {
		intent: string;
		secret: string;
		public: string;
	}

	interface Subscription {
		active: Ember.Subscription;
		inactive: Ember.Subscription[];
	}

}
