import React from "react";
import classes from "../Cart/Cart.module.css";
import { X } from "lucide-react";
import seventh from "../../assets/seventh.png";
import sixth from "../../assets/sixth.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Sample Product",
      price: 99.99,
      quantity: 1,
      color: "Black",
      size: "M",
      image: seventh,
    },
    {
      id: 2,
      name: "Another Item",
      price: 149.99,
      quantity: 2,
      color: "Blue",
      size: "L",
      image: sixth,
    },
  ];

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 35.0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <>
      <section className="py-5 px-16">
        <div className="">
          <div className="bg-[#1B6392] h-80 flex items-center justify-center">
            <h3 className="text-7xl font-bold text-white">Cart</h3>
          </div>

          <div className="max-w-7xl py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-6">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="border p-4 bg-white shadow-sm"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-40 h-40 object-cover"
                        />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-2xl">{item.name}</h3>
                              <p className="text-md text-gray-600">
                                {item.color} {item.size && `/ ${item.size}`}
                              </p>
                              <p className="mt-1 text-lg">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                              <X size={20} />
                            </button>
                          </div>
                          <div className="mt-4">
                            <select
                              value={item.quantity}
                              className="border p-1 text-sm"
                            >
                              {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="lg:col-span-4">
                <div className="border bg-white shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-4">Order summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping estimate</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax estimate</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-semibold">
                        <span className="mb-3 text-xl">Order total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate("/checkout")}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
