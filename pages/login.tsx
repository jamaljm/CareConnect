import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import router, { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-white h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold font-display leading-tight text-black sm:text-4xl">
              Login Now
            </h2>
            <p className="mt-2 text-base mr-2 text-gray-600">
              Don't have account
              <Link
                href="/signup"
                title=""
                className="font-medium font-body text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
              >
                Signup
              </Link>
            </p>
            <form className="mt-8" onSubmit={handleLogin}>
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium font-body text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium font-body text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2.5">
                    <input
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                     onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex font-body items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-3 space-y-3">
      
            </div>
          </div>
        </div>

        <div className="flex h-screen items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div>
            <img
              className="w-full mx-auto"
              src="/images/doctor.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
