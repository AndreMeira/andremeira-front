import { SplashScreenNaive } from './SplashScreenNaive';
import { useSplashScreenSimpleBehavior } from './Behavior';


/**
 * The smart component
 */
export default function SplashScreen() {
  const {classes} = useSplashScreenSimpleBehavior();
  return <SplashScreenNaive classes={classes}></SplashScreenNaive>
}
