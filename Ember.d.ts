declare namespace Ember {

	// Server
	export interface Server {
		ip: string;
		port: number;
		proto: "tcp" | "udp";
		hash: string;
		location: {
			latitude: number;
			longitude: number;
			countryCode: string;
			country: string;
			state: string;
		};
	}

	// Platform Download
	export interface PlatformDownload {
		version: string;
		files: {
			name: string;
			arch: string;
			download_url: string;
		}[];
	}

	// Price
	export interface Price {
		isActive: boolean;
		isBestValue: boolean;
		id: string;
		currency: string;
		type: "one_time" | "recurring";
		amount: number;
		interval: number;
		tax: number;
	}

	// Plan
	export interface Plan {
		id: string;
		name: string;
		description: string;
		image: string;
		default_price: string;
		features: string[];
		meta: Record<string, string>;
		prices: Price[];
	}

	// Subscription
	export interface Subscription {
		id: string;
		cancel_at_period_end: boolean;
		current_period_start: number;
		current_period_end: number;
		status: "active" | "canceled" | "incomplete" | "incomplete_expired" | "past_due" | "trialing" | "unpaid";
		default_payment_method: import("@stripe/stripe-js").PaymentMethod;
		plan: {
			product: Plan;
		}
		
	}

}
