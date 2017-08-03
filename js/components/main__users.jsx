import React from 'react';
import ReactDOM from 'react-dom';

export class MainUsers extends React.Component {
  render(){
    return (
        <section className="main__users">
            <div className="container main__users--container">
                <div className="row main__users--row">
                    <div className="col-4 main__users--profilebox violet">
                        <figure className="main__users--avatar">

                        </figure>
                        <div className="main__users--info">
                            <p className="main__users--name">Nice Person</p>
                            <p className="main__users--location">Location: Warsaw, PL</p>
                        </div>
                    </div>
                    <div className="col-4 main__users--profilebox turquoise">
                        <figure className="main__users--avatar">

                        </figure>
                        <div className="main__users--info">
                            <p className="main__users--name">Nice Person</p>
                            <p className="main__users--location">Location: Warsaw, PL</p>
                        </div>
                    </div>
                    <div className="col-4 main__users--profilebox blue">
                        <figure className="main__users--avatar">

                        </figure>
                        <div className="main__users--info">
                            <p className="main__users--name">Nice Person</p>
                            <p className="main__users--location">Location: Warsaw, PL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
