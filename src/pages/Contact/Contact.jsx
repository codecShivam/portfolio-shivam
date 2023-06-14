import React from "react";

const Contact = () => {
    return (
        <div id="contactMe" class="p-4">
            <h2 class="text-center">Contact <span class="text-blue-500">Me</span></h2>
            <div class="flex flex-col md:flex-row items-center">

                <div>
                </div>

                <div class="form-section">
                    <form>
                        <div class="mb-4">
                            <input type="text" name="from_name" required class="w-full px-4 py-2 border border-gray-300 rounded" />
                            <label class="text-gray-600">Full Name</label>
                        </div>
                        <div class="mb-4">
                            <input type="email" name="from_mail" required class="w-full px-4 py-2 border border-gray-300 rounded" />
                            <label class="text-gray-600">Email</label>
                        </div>
                        <div class="mb-4">
                            <textarea placeholder="Message 📧" name="message" class="w-full px-4 py-2 border border-gray-300 rounded"></textarea>
                        </div>
                        <input type="submit" value="Send Message" class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded" />
                    </form>
                    <div class="flex justify-between mt-4">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#e34133" class="h-6 w-6" viewBox="0 0 24 24">
                            </svg>
                            <span class="ml-2">atanu.karmakar201@gmail.com</span>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#00a14f" class="h-6 w-6" viewBox="0 0 24 24">
                            </svg>
                            <span class="ml-2">+91 81013 03481</span>
                        </div>
                    </div>
                    <div class="flex gap-4 mt-4">
                        <a href="https://wa.me/918101303481" target="_blank" class="text-blue-500 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8" viewBox="0 0 24 24">
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/atanu-karmakar-7ab110227/" target="_blank" class="text-blue-500 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8" viewBox="0 0 24 24">
                            </svg>
                        </a>
                        <a href="https://github.com/Atanu8250" target="_blank" class="text-blue-500 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8" viewBox="0 0 24 24">
                            </svg>
                        </a>
                        <a href="mailto:atanu.karmakar201@gmail.com" target="_blank" class="text-blue-500 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8" viewBox="0 0 24 24">
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;