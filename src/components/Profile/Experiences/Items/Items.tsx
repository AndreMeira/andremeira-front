import Arrow from "@/assets/icons/arrow-down.svg";
import "./Items.scss";

export default function Items() {
    return (
        <div className="experience-items">
            <ul>
                <li className="experience-item">
                    <div>
                        <h3>
                            <span>PHP DEVELOPER</span><br/> 
                            <span className="company">Meetic&nbsp;-&nbsp;dating platform</span>
                        </h3>
                        <span className="starting">
                            <time>2005</time>
                        </span>
                        <ul className="tags experience-items-tags">
                            <li className="tag">Vanilla JS</li>
                            <li className="tag">PHP</li>
                            <li className="tag">MySQL</li>
                            <li className="tag important">Oracle</li>
                        </ul>
                        <p className="description">
                            Adding new features to the website and the backoffice, fixing bugs.
                            Development of system that matches ads and user profile.
                        </p>
                    </div>
                </li>
                <li className="experience-item">
                    <div>
                        <h3>
                            <span>LEAD DEVELOPER</span><br/> 
                            <span className="company">Mediaodyssee&nbsp;-&nbsp;cloud storage</span>
                        </h3>
                        <span className="starting">
                            <time>2010</time>
                        </span>
                        <ul className="experience-items-tags">
                            <li className="tag">Backbone</li>
                            <li className="tag">MySQL</li>
                            <li className="tag">Zend Framework</li>
                            <li className="tag">MySQL</li>
                            <li className="tag">Redis</li>
                            <li className="tag">Riak</li>
                            <li className="tag">RabbitMQ</li>
                            <li className="tag important">SocketIO</li>
                            <li className="tag">NodeJS</li>
                            <li className="tag">FFMPEG</li>
                            <li className="tag">Objective-C</li>

                        </ul>
                        <p className="description">
                        Architecturing software/developing features front and back end/leading the backend part. 
                        File synchronisation algorithm for different devices. Encoding video files. 
                        Live chat/notification system with nodejs/socketio. Finely grained permission system for sharing files.
                        </p>
                    </div>
                </li>
                <li className="experience-item">
                    <div>
                        <h3>
                            <span>FULLSTACK DEVELOPER</span><br/> 
                            <span className="company">Le panier volant&nbsp;-&nbsp;fresh food delivery</span>
                        </h3>
                        <span className="starting">
                            <time>2015</time>
                        </span>
                        <ul className="experience-items-tags">
                            <li className="tag">Laravel</li>
                            <li className="tag">MySQL</li>
                            <li className="tag">Vue</li>
                            <li className="tag">Redis</li>
                        </ul>
                        <p className="description">
                        Developing from scratch (and alone) a system for delivering food through a plateform 
                        that connects suppliers and freelancing motorbike drivers.
                        Management of the different resources (product supply, drivers available).
                        </p>
                    </div>
                </li>
                <li className="experience-item">
                    <div>
                        <h3>
                            <span>FULLSTACK DEVELOPER</span><br/> 
                            <span className="company">Remixjobs&nbsp;-&nbsp;Job network platform</span>
                        </h3>
                        <span className="starting">
                            <time>2016</time>
                        </span>
                        <ul className="experience-items-tags">
                            <li className="tag">Symfony</li>
                            <li className="tag">MySQL</li>
                            <li className="tag">React</li>
                            <li className="tag important">Algolia</li>
                            <li className="tag">OAuth</li>
                        </ul>
                        <p className="description">
                            Maintenance and development of the website. 
                            Matching system for employers and candidates. 
                            Development of a package for the payment system.
                        </p>
                    </div>
                </li>
                <li className="experience-item">
                    <div>
                        <h3>
                            <span>SENIOR BACKEND DEVELOPER</span><br/> 
                            <span className="company">Afidium&nbsp;-&nbsp;B2B tourism platform</span>
                        </h3>
                        <span className="starting">
                            <time>2018</time>
                        </span>
                        <ul className="experience-items-tags">
                            <li className="tag">Slim</li>
                            <li className="tag">Soap</li>
                            <li className="tag">Postgres</li>
                            <li className="tag">Elasticsearch</li>
                            <li className="tag important">Swagger</li>
                        </ul>
                        <p className="description">
                            Pluging flight/tour providers API to the plateform. Modernizing the architecture. 
                            Introducing unit tests. Development of a quote engine 
                            that gives end users the best price for their holiday package. 
                            Development of a synchronisation algorithm between PG and MySQL databases.
                        </p>
                    </div>
                </li>
                <li className="experience-item">
                    <div>
                        <h3>
                            <span>SENIOR FULLSTACK DEVELOPER</span><br/> 
                            <span className="company">Labellevie&nbsp;-&nbsp;Shopping delivery system</span>
                        </h3>
                        <span className="starting">
                            <time>2021</time>
                        </span>
                        <ul className="experience-items-tags">
                            <li className="tag">Python</li>
                            <li className="tag">Django</li>
                            <li className="tag">Postgres</li>
                            <li className="tag">React</li>
                            <li className="tag">Docker</li>
                            <li className="tag">Redis</li>
                            <li className="tag important">Networkx</li>
                            <li className="tag">Jupyter</li>
                            <li className="tag">Vue</li>
                        </ul>
                        <p className="description">
                            Developing food delivery system and logistic management, using dango vuejs, and react.
                            Conceiving and implementing an algorithm to build delivery routes, 
                            accordingly to shipping time requirement, logistic packing state, and driver resources.
                        </p>
                    </div>
                </li>
                <li className="experience-item now">
                    <div>
                        <h3></h3>
                        <span className="starting">
                            <time>NOW</time>
                        </span>
                        <ul className="tags experience-items-tags">
                            <li></li>
                        </ul>
                        <p className="description">
                            
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}