"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function TestPage() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Button
                    variant="outline"
                    onClick={() =>
                        toast("Event has been created", {
                            description: "Sunday, December 03, 2023 at 9:00 AM",
                            action: {
                                label: "Undo",
                                onClick: () => console.log("Undo"),
                            },
                        })
                    }
                >
                    Show Toast
                </Button>

            </div>
        </>

    )
}