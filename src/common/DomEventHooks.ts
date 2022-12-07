import { useEffect, useState } from "react";

/**
 * Mousemove hooks
 */
 export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    /**
     * On mount
     */
    useEffect(() => {
        /**
         * Event handler
         */
        const subscribe = window.addEventListener;
        const unsubscribe = window.removeEventListener;
        const setFromEvent = (e:MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        subscribe("mousemove", setFromEvent);
        return () => unsubscribe("mousemove", setFromEvent);
    }, []);
  
    return position;
};