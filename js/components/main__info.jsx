import React from 'react';
import ReactDOM from 'react-dom';

export class MainInfo extends React.Component {
  render(){
    return (
        <main>
            <section className="main">
                <div className="container main__info">

                    <div className="row">
                        <div className="col-12 main__info--banner">
                            <h1>
                                Pay it forward <br/>
                                expat community
                            </h1>
                            <p>
                                Meet like-minded people in your new area <br/>
                                willing to share their knowledge, struggles and experience
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
  }
}
