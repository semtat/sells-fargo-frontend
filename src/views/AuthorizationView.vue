<template>
    <div class="flex container h-screen bg-green-500 items-center justify-center">
        <div class="w-full shadow-2xl max-w-md p-10 bg-white">
            <form action="#" method="POST">
                <div>
                    <input id="username" name="username" type="text" placeholder="username"  required 
                        class="relative block mb-4 w-full appearance-none rounded-none p-4 bg-zinc-100 text-gray-900 placeholder-zinc-400 focus:z-10" />
                    <input id="password" name="password" type="password" autocomplete="current-password" placeholder="password" required 
                        class="relative block mb-4 w-full appearance-none rounded-none p-4 bg-zinc-100 text-gray-900 placeholder-zinc-400 focus:z-10" />
                    <button type="submit" 
                        class="relative flex mb-4 w-full justify-center bg-green-600 p-4 text-white hover:bg-green-700">
                        <span>LOGIN</span>
                    </button>
                    <div class="text-center text-zinc-400">
                        <span>Not registered?</span> <a href="#" class="text-green-500">Create an account</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>