import React from 'react'
import Lottie from 'react-lottie'
import animation1 from '../../assets/lotti/fly-animation-1.json'
import animation2 from '../../assets/lotti/fly-plane-loading.json'

const Home = () => {
    return (
        <div className="bg-light">

            <section className="row" style={{ backgroundColor: '#4e92f7',minHeight: '95vh'}}>
                
                <div className="col-md-6">
                    <Lottie
                        options={{
                            animationData: animation1
                        }}
                    />
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center mb-5 pb-5">
                        <div className="text-light">
                            <h2 style={{ fontSize:'4em'}}>Hello!</h2>
                            <p style={{ fontSize:'2em'}}>Where do you want to explore?</p>
                        </div>
                </div>

            </section>

            <section className="row" style={{ backgroundColor: '#6a729c',minHeight: '95vh'}}>
                
                <div className="col-md-6 d-flex justify-content-center align-items-center mt-5 pt-5">
                        <div className="text-light">
                            <h2 style={{ fontSize:'4em'}}>AIRPLANE</h2>
                            <p style={{ fontSize:'2em'}}>Current flight plan</p>
                        </div>
                </div>

                <div className="col-md-6">
                    <Lottie
                        options={{
                            animationData: animation2
                        }}
                    />
                </div>


            </section>


        </div>
    )
}

export default Home
