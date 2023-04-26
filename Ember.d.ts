declare namespace Ember {
	
	// Server Location
	export interface GeoLocation {
		ip: string;
		continent_code: string;
		continent_name: string;
		country_code2: string;
		country_name: string;
		country_capital: string;
		state_prov: string;
		district: string;
		city: string;
		zipcode: string;
		latitude: string;
		longitude: string;
		isp: string;
		connection_type: string;
		organization: string;
	}

	// Server Info
	export interface Server {
		ip: string;
		iface: string;
		network: string;
		subnet: string;
		port: string;
		proto: string;
		hostname: string;
		hash: string;
		ping: number;
		location: GeoLocation;
	}

	// Platform Download
	export interface PlatformDownload {
		version: string;
		files: {
			name: string;
			sha: string;
			arch: string;
			download_url: string;
		}[];
	}

	// Plan
	export interface Plan {
		id: string;
		name: string;
		description: string;
		image: string;
		meta: Record<string, string>;
		prices: {
			id: string;
			currency: string;
			type: "one-time" | "recurring";
			amount: number;
			interval: number;
		}[];
	}

}