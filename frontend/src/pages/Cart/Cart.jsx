import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
		useContext(StoreContext);

	const navigate = useNavigate();

	return (
		<div className="cart">
			<div className="cart-items">
				<div className="cart-items-title">
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<br />
				<hr />
				{food_list.map((item, index) => {
					if (cartItems[item._id] > 0) {
						return (
							<>
								<div className="cart-items-title cart-items-item">
									<img src={item.image} alt="Item Image" />
									<p>{item.name}</p>
									<p>${item.price}</p>
									<p>{cartItems[item._id]}</p>
									<p>${item.price * cartItems[item._id]}</p>
									<p onClick={() => removeFromCart(item._id)} className="cross">
										x
									</p>
								</div>
								<hr />
							</>
						);
					}
				})}
			</div>
			<div className="cart-bottom">
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
					<button onClick={() => navigate("/order")}>
						Proceed to checkout
					</button>
				</div>
				<div className="cart-promo-code">
					<div>
						<p>Have a promo code?</p>
						<div className="cart-promo-code-input">
							<input type="text" placeholder="Promo Code" />
							<button>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
