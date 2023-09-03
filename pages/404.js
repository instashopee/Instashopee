import Head from "next/head";
import Link from "next/link";

export default function Custom404(){
    return <section class="bg-white min-h-screen ">
        <Head>
        <title>404 Page Not Found -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
        <div class="flex flex-col items-center max-w-sm mx-auto text-center my-[6rem]">
            <p class="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
            </p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Page not found</h1>
            <p class="mt-4 text-gray-800 ">The page you are looking for doesn't exist. Here are some helpful links:</p>
            <div className="bg-blue-400 p-3 mt-3 rounded-md shadow-lg justify-between">
                <Link legacyBehavior href={'/'} >
                    Take me home
                </Link></div>
            
        </div>
  
</section>
}