import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import "../Cart/Cart.css";

const PlaceOrder = () => {
	const { getTotalCartAmount } = useContext(StoreContext);

	return (
		<form className="place-order">
			{/* Left side of the screen */}
			<div className="place-order-left">
				<p className="title">Delivery Information</p>
				<div className="multi-fields">
					<input type="text" placeholder="First Name" required />
					<input type="text" placeholder="Last Name" required />
				</div>
				<input type="email" placeholder="Email Address" required />
				<br />
				<input type="text" placeholder="Street" required />
				<div className="multi-fields">
					<input type="text" placeholder="City" required />
					<input type="text" placeholder="State" required />
				</div>
				<div className="multi-fields">
					<input type="text" placeholder="Zip Code" required />
					<input type="text" placeholder="Country" required />
				</div>
				<input type="text" placeholder="Phone Number" required />
			</div>
			{/* Right side of the screen */}
			<div className="place-order-right">
				<div className="cart-total">
					<h2>Cart Total</h2>
					<div>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>${getTotalCartAmount().toFixed(2)}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Taxes</p>
							<p>${(getTotalCartAmount() * 0.0835).toFixed(2)}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Delivery Fee</p>
							<p>${(getTotalCartAmount() === 0 ? 0 : 0.99).toFixed(2)}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>
							<b>
								$
								{(
									getTotalCartAmount() +
									getTotalCartAmount() * 0.0835 +
									(getTotalCartAmount() === 0 ? 0 : 0.99)
								).toFixed(2)}
							</b>
						</div>
					</div>
					<button>Proceed to payment</button>
				</div>
			</div>
		</form>
	);
};

export default PlaceOrder;
