import App from "@/App";

import HSC from "@/components/HSCBOOk/Hsc";

import CheckoutFormWithBKashAndLocation from "@/pages/From";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index : true,
                Component:  HSC
            },
            {
                path: "/from",
                Component: CheckoutFormWithBKashAndLocation
            },

            
            
        
        ],
    },
   
    
]);

export default router;