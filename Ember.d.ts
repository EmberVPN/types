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

	// Invoice
	export interface Invoice {
		id: string
		object: string
		account_country: string
		account_name: string
		account_tax_ids: any
		amount_due: number
		amount_paid: number
		amount_remaining: number
		amount_shipping: number
		application: any
		application_fee_amount: any
		attempt_count: number
		attempted: boolean
		auto_advance: boolean
		automatic_tax: AutomaticTax
		billing_reason: string
		charge: string
		collection_method: string
		created: number
		currency: string
		custom_fields: any
		customer: string
		customer_address: any
		customer_email: string
		customer_name: string
		customer_phone: any
		customer_shipping: any
		customer_tax_exempt: string
		customer_tax_ids: any[]
		default_payment_method: any
		default_source: any
		default_tax_rates: any[]
		description: any
		discount: any
		discounts: any[]
		due_date: any
		ending_balance: number
		footer: any
		from_invoice: any
		hosted_invoice_url: string
		invoice_pdf: string
		last_finalization_error: any
		latest_revision: any
		lines: Lines
		livemode: boolean
		metadata: Metadata4
		next_payment_attempt: any
		number: string
		on_behalf_of: any
		paid: boolean
		paid_out_of_band: boolean
		payment_intent: string
		payment_settings: PaymentSettings
		period_end: number
		period_start: number
		post_payment_credit_notes_amount: number
		pre_payment_credit_notes_amount: number
		quote: any
		receipt_number: any
		rendering_options: any
		shipping_cost: any
		shipping_details: any
		starting_balance: number
		statement_descriptor: any
		status: string
		status_transitions: StatusTransitions
		subscription: string
		subtotal: number
		subtotal_excluding_tax: number
		tax: any
		test_clock: any
		total: number
		total_discount_amounts: any[]
		total_excluding_tax: number
		total_tax_amounts: any[]
		transfer_data: any
		webhooks_delivered_at: number
	}

	// Subscription
	export interface Subscription {
		id: string;
		cancel_at_period_end: boolean;
		current_period_start: number;
		start_date: number;
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
