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
	export interface Asset {
		name: string;
		downloadUrl: string;
		size: number;
		downloadCount: number;
		lastModified: number;
		platform: string;
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
		items: {
			data: {
				price: {
					id: string
					object: string
					active: boolean
					billing_scheme: string
					created: number
					currency: string
					custom_unit_amount: any
					livemode: boolean
					lookup_key: any
					metadata: Metadata2
					nickname: any
					product: string
					recurring: {
						aggregate_usage: any
						interval: string
						interval_count: number
						trial_period_days: any
						usage_type: string
					}
					tax_behavior: string
					tiers_mode: any
					transform_quantity: any
					type: string
					unit_amount: number
					unit_amount_decimal: string
				}
			}[]
		}
		plan: {
			product: {
				id: string
				object: string
				active: boolean
				attributes: any[]
				created: number
				default_price: string
				description: string
				images: string[]
				livemode: boolean
				metadata: any
				name: string
				package_dimensions: any
				shippable: any
				statement_descriptor: any
				tax_code: any
				type: string
				unit_label: any
				updated: number
				url: any
			}
			aggregate_usage: any
			interval: string
			interval_count: number
			trial_period_days: any
			usage_type: string
			start_date: number
		}
		
	}

}
