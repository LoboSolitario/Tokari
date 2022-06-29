import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LG4BtLrYzCcT1VhaohAqZIhPa8mvakR4rd9z2dI7VN0iEOKAtP73PSw1pNRE0kF4VH9bSUNxkkqdDOuEXjrzJee00Gz2np472"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}