import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

export const ServiceWorkerHandler = () => {
    const [pendingUpdate, setPendingUpdate] = useState(false);

    // // const location = useLocation();

    // useEffect(() => {
    //     if (pendingUpdate) {
    //         // Force reload
    //         window.location.reload();
    //     }
    // }, [location.pathname]);

    const onUpdate = (registration: ServiceWorkerRegistration) => {
        console.log("On update");

        // Display a notification or prompt the user to update the application
        if (
            window.confirm(
                "A new version of the application is available. Do you want to update?"
            )
        ) {
            // Send a message to the service worker to skip waiting and activate the new version
            registration.waiting?.postMessage({ type: "SKIP_WAITING" });
            // Refresh the page to activate the new version
            window.location.reload();
        } else {
            setPendingUpdate(true);
        }
    };

    useEffect(() => {
        console.log("Start registering");

        serviceWorkerRegistration.register({ onUpdate });
    }, []);

    return null;
};
