import Home from "../../components/Home";
import Sidebar from "../../components/Sidebar";

const ContactUs = ({ setIsSidebarOpen, closeSidebar, isSidebarOpen }) => {
    return (
        <div>
            <Home openSidebar={() => setIsSidebarOpen(true)} />
            <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="absolute sm:left-[10%] left-0 sm:top-[11%] top-[6%] right-0 sm:right-[10%]">
                <div className="content pt-12">
                    <div className="mx-auto px-16" id="contact">
                        <div className="mb-5 flex items-center max-w-md">
                            <h2 className="text-gray-500 text-4xl font-bold">
                                {" "}
                                Contact Me 
                            </h2>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-500 lg:justify-between -mx-4">
                            <div
                                className="w-full lg:w-1/2 xl:w-6/12 px-4"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="max-w-[570px] mb-12 lg:mb-0">
                                    <p className=" text-4xl font-extrabold text-body-color leading-relaxed stand__out__text mb-9 mx-5">
                                        For all enquiries, please email me using the given form
                                    </p>
                                    <p className="text-2xl font-medium text-body-color leading-relaxed mb-9 mx-5">
                                        I am excited to hear from you and explore how we can work together. Whether you have a question, a project proposal, or just want to say hello, I am always ready to engage in meaningful conversations.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="w-full lg:w-1/2 mb-24 xl:w-5/12 px-4 z-20"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="2000"
                            >
                                <div className="bg-gray-800 relative rounded-lg p-8 sm:p-12 shadow-lg">
                                    <form>
                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                                name="full_name"
                                                id="full_name"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                                name="email"
                                                id="email"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                                inputMode="numeric"
                                                placeholder="Your Phone"
                                                className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                                name="phone_number"
                                                id="phone_number"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <textarea
                                                rows="8"
                                                placeholder="Your Message"
                                                className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                                name="message"
                                                id="message"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    alert("Message Sent Successfuly");
                                                }}
                                                className="
                                    w-full
                                    text-gray-100
                                    hover:text-gray-700
                                    bg-cyan-500
                                    rounded
                                    border border-primary
                                    dark:border-slate-600
                                    p-3
                                    transition
                                    ease-in-out
                                    duration-500
                                    hover:bg-cyan-300
                                    "
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                    <div>
                                        <span className="absolute -top-10 -right-9 -z-10">
                                            <svg
                                                width="100"
                                                height="100"
                                                viewBox="0 0 100 100"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                    fill="#00bcd4"
                                                />
                                            </svg>
                                        </span>
                                        <span className="absolute -right-10 top-[90px] z-[-1]">
                                            <svg
                                                width="34"
                                                height="134"
                                                viewBox="0 0 34 134"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="31.9993"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 1.66665)"
                                                    fill="#13C296"
                                                />
                                            </svg>
                                        </span>
                                        <span className="absolute -left-7 -bottom-7 z-[-1]">
                                            <svg
                                                width="107"
                                                height="134"
                                                viewBox="0 0 107 134"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="104.999"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="132"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="88"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="45"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="16"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="59"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 1.66665)"
                                                    fill="#13C296"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;