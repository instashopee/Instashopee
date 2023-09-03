import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
const Forgot = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const handleChange = async (e) => {
    if (e.target.name == "password") {
      setpassword(e.target.value);
    }
    else if (e.target.name == "cpassword") {
      setCpassword(e.target.value);
    }
    else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  const sendEmail = async () => {
    let data = { email, sendMail: true };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if (res.success) {
    } else {
    }
  };
  const resetPassword = async () => {
    if (password == cpassword) {
      let data = { password, sendMail: false };
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res = await a.json();
      if (res.success) {
      } else {
      }
    } else {
    }
  };
  return (
    <div class="flex min-h-[100vh] flex-col justify-center px-6 py-12 lg:px-8">
      <Head>
        <title>Forgot Password -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="/logo1.png" alt="" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forgot Password
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {router.query.token && (
          <div>
            <form class="space-y-6" action="" method="POST">
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
                <div class="mt-2">
                  <input onChange={handleChange}
                  value={password}
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="cpassword"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm New Password
                </label>
                <div class="mt-2">
                  <input
                  value={cpassword} onChange={handleChange}
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    autocomplete="cpassword"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-start"></div>
              </div>
              <div>
                <button
                  onClick={resetPassword}
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Continue
                </button>
              </div>
              {password!==cpassword && 
              <span className="text-red-600">
                Password don't match
              </span>
              }
              {password&&password===cpassword && 
              <span className="text-grren-600">
                Passwords matched
              </span>
              }

            </form>
          </div>
        )}
        {!router.query.token && (
          <form class="space-y-6" action="" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input value={email} onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-start"></div>
            </div>
            <div>
              <button
                onClick={sendEmail}
                type="submit"
                class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Continue
              </button>
            </div>
          </form>
        )}

        <p class="mt-10 text-center text-sm text-gray-500">
          Already a user?
          <Link legacyBehavior href={"/login"}>
            <a
              href="#"
              class="font-semibold leading-6 text-red-600 hover:text-red-500"
            >
              Login
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Forgot;
