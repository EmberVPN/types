declare namespace Ember {
	export type StripeInvoice = import("stripe").default.Invoice;

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

	// Invoice
	export interface Invoice extends StripeInvoice {
		charge: import("stripe").default.Charge;
		lines: {
			data: import("stripe").default.InvoiceLineItem[];
		};
	}

	// Subscription
	export interface Subscription {
		id: string;
		cancel_at_period_end: boolean;
		current_period_start: number;
		start_date: number;
		current_period_end: number;
		status: "active" | "canceled" | "incomplete" | "incomplete_expired" | "past_due" | "trialing" | "unpaid";
		default_payment_method: Stripe.PaymentMethod;
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
			product: Omit<Plan, "prices" | "image"> & { images: string[], metadata: Record<string, string> };
			aggregate_usage: any
			interval: string
			interval_count: number
			trial_period_days: any
			usage_type: string
			start_date: number
		}
		
	}

}
