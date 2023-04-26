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
		platform: Record<string, Ember.PlatformDownload>;
	}

	interface Servers {
		servers: Record<string, Ember.Server>;
	}

	interface Store {
		plans: Record<string, Ember.Plan>;
	}

}
