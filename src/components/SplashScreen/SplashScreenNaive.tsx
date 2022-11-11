import classNames from "classnames";
import './SplashScreen.scss';

/**
 * Props of the naive component
 */
 interface SplashScreenNaiveProps {
    classes: string[];
  }
  
  /**
   * The naive splash screen component
   */
  export const SplashScreenNaive = (
    {classes}: SplashScreenNaiveProps
  ): JSX.Element => {
    return (
      <div 
        id="splash-screen" 
        className={classNames(...classes)}>
        <section className='brand-name'>
          <p><span className="fullname">Andre Meira</span></p>
        </section>
      </div>
    )
  };