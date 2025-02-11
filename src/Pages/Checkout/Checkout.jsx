import React from "react";
import classes from "../Checkout/Checkout.module.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const orderSummary = {
    subtotal: 249.98,
    shipping: 35.0,
    tax: 19.99,
    total: 304.97,
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="py-5 px-16">
        <div className="">
          <div className="bg-[#1B6392] h-80 flex items-center justify-center">
            <h3 className="text-7xl font-bold text-white">Checkout</h3>
          </div>

          <div className="max-w-7xl py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-6">
                <div className="border bg-white shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 block w-full border p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="mt-1 block w-full border p-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="border bg-white shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border p-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border p-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Apartment, suite, etc.
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select className="mt-1 block w-full border p-2">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border bg-white shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-6">Payment</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border p-2"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full border p-2"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full border p-2"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="border bg-white shadow-sm p-6 sticky top-4">
                  <h2 className="text-2xl font-semibold mb-4">Order summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${orderSummary.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping estimate</span>
                      <span>${orderSummary.shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax estimate</span>
                      <span>${orderSummary.tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-semibold">
                        <span className="mb-3 text-xl">Order total</span>
                        <span>${orderSummary.total.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate("/thankyou")}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4"
                    >
                      Place Order
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
