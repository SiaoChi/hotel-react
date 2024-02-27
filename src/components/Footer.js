const Footer = () =>{
  return (
    
<footer class="w-full">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="favicon.ico" className="h-8" alt="Flowbite Logo" />
                <span class="self-center text-xl whitespace-nowrap dark:text-white">詠珍文旅</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">關於我們</a>
                </li>
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">入住須知</a>
                </li>
                <li>
                    <a href="https://maps.app.goo.gl/gKLBgqpF5cb5SXEi8" class="hover:underline me-4 md:me-6">Google導航</a>
                </li>
                <li>
                    <a href="https://lin.ee/BPI4HRC" class="hover:underline me-4 md:me-6">加入LINE好友</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Yong Jen™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer;