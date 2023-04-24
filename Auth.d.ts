declare namespace Auth {

	// User Meta
	interface Meta {
		id: number;
		subscription?: string;
	}

	// User Session
	interface Session {
		id: number;
		session_id: string;
		created_ms: number;
		last_used_ms: number;
		user_agent: string;
		ip_address: string;
		current: boolean;
	}

	// User
	interface User {
		id: number;
		username: string;
		email: string;
		created_ms: number;
		mfa_enabled: boolean;
		passwd_md5: string;
		passwd_length: number;
		passwd_changed_ms: number;
		sessions: Session[];
		meta: Meta;
	}
	
}
