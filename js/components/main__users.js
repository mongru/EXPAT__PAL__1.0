import React from 'react';
// import ReactDOM from 'react-dom';

import fire from '../fire';
import users from '../../expatpal-cd11e-export.json';

// -------> COMPONENTS
import MainUser from './main__user';
import MainSearchForm from './main__searchform';



const MainUsers = () => {
    return (
            <section className="main__users">
                <div className="container main__users--container">
                    <div className="row main__users--row">
                        <div className="col-4 main__users--profilebox violet">
                            <MainUser/>
                        </div>
                        <div className="col-4 main__users--profilebox turquoise">
                            <MainUser/>
                        </div>
                        <div className="col-4 main__users--profilebox blue">
                            <MainUser/>
                        </div>
                    </div>
                </div>
            </section>
    );

}

export default MainUsers;
