import { Seconds } from "@/common/Units";
import { useEffect, useState } from "react";

/**
 * The splash screen behavior
 */
 export const useSplashScreenSimpleBehavior = () => {
    const [classes, setClasses] = useState<string[]>([]);
  
    /**
     * Add a class name the array
     */
    const addClass = (className: string) => setClasses(
      classes => [...new Set(classes.concat([className]))]
    );
  
    /**
     * Hide element after the given time
     */
     const hide = (wait: Seconds|null = null) => {
      setTimeout(() => addClass('hide'), Number(wait));
    }
    
    /**
     * On mount hook
     */
    useEffect(() => {
      addClass('animate');
      hide(Seconds(1950));
    }, []);
    return {classes}
  };