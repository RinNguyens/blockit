"use client"

import * as React from "react"
import {
  LogOut,

} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { signOut, useSession } from "next-auth/react"

const DropdownAvatar = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <Avatar className="rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage src={user?.image || ""} alt={user?.name || ""} width={32} height={32} className="rounded-full" />
            <AvatarFallback className="flex items-center justify-center">
              {user?.name || "R"}
            </AvatarFallback>
          </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/signin" })}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownAvatar