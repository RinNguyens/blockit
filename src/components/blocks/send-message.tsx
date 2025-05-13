"use client";
import { IconBrandGithub, IconMail, IconPhone } from "@tabler/icons-react"
import SendMessageForm from "./signup-form-demo";

const SendMessage = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl font-bold">Let&apos;s work together.
          </h2>
          <p className="text-sm mt-2">Ready to start your next project? Get in touch and let&apos;s create something amazing.</p>
          <div className="flex flex-col space-y-4 mt-6">
            <div className="flex items-center gap-3">
              <a href="mailto:RinChan98.py@gmail.com" className="text-neutral-600 hover:text-blue-500 transition-colors" aria-label="Email" tabIndex={0}>
                <IconMail className="h-5 w-5" />
              </a>
              <span>RinChan98.py@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://github.com/RinChan98" className="text-neutral-600 hover:text-blue-500 transition-colors" aria-label="GitHub" tabIndex={0}>
                <IconBrandGithub className="h-5 w-5" />
              </a>
              <span>@RinNguyen98s</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://x.com/RinChan98" className="text-neutral-600 hover:text-blue-500 transition-colors" aria-label="Phone" tabIndex={0}>
                <IconPhone className="h-5 w-5" />
              </a>
              <span>+84 369045498</span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md">
          <SendMessageForm />
        </div>
        </div>
    )
}

export default SendMessage;