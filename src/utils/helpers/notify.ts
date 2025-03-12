import { toast } from "react-hot-toast";

class Notify {
    success(message: string) {
        toast.success(message, {
            id: "success",
            duration: 5000,
        });
    }

    error(message: string) {
        toast.error(message, {
            id: "error",
        });
    }

    timedSuccess(message: string, time: any) {
        toast.success(message, {
            duration: time,
        })
    }

    errorWithCustomIcon(message: string) {
        toast.error(message, {
            id: "errorCustomIcon",
            icon: "⚠️",
        });
    }

    load(message: string) {
        toast.loading(message, {
            id: "loading",
            style: {
                fontSize: "16px"
            }
        });
    }

    clearloading() {
        toast.dismiss("loading");
    }
}

export const notify = new Notify();