import './Identity.scss';
import Portrait from "@/assets/profile/portrait.png";
import { useMousePosition } from '@/common/DomEventHooks';


interface IdentityProps {
    picture?: string;
}

export default function Identity({picture}: IdentityProps): JSX.Element {
    let x = 1;
    let y = 1;
    const position = useMousePosition();
    
    if (position.x) {
        x = 1 - (window.innerWidth / 2 - position.x) * 3 / window.innerWidth;
        y = 1 - (window.innerHeight / 2 - position.y) / window.innerHeight;
    }
    
    // console.log(`translate(${position.x}px, ${position.y}%)`);
    // console.log(`translate(${x * 10}px, ${-25 * y}%)`);
    // console.log(`translate(${x * -10}px, ${-10 * y}px)`)

    return (
        <div className='identity'>
            <div className="vcard">
                <div className='portrait'>
                    <img src={Portrait} className="profile-portrait"></img>
                    <div className='big-circle' style={{transform: `translate(${x * 30}px, ${-25 * x * y}%)`}}></div>
                    <div className='small-circle' style={{transform: `translate(${x * -55}px, ${84 * y}px)`}}></div>
                </div>
                <div className="infos">
                    <ul>
                        <li><span className="fn">André Meira</span></li>
                        <li><span className="category">senior developer</span></li>
                        <li><time className="bday">1981-02-17</time></li>
                        <li><span className="nationality">French</span></li>
                    </ul>
                </div>
                
            </div>
        </div>
        
    );
}