"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function ToastDestructive () {
    return (
        <Button
            variant="outline"
            onClick={() =>
                toast.error("Event has been created", {
                    classNames: {
                        toast: "bg-red-500 text-white",
                        description: "text-white",
                        title: "text-white",
                    },
                    dismissible: true,
                    closeButton: true,
                    title: "Error",
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    
                })
            }
        >
            Show Toast
        </Button>
    )
}
