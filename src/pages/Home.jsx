import '../Home.css'

function Home() {
    return (
        <div className="Home">

            {/* <img className='group' src="./src/assets/Group8.png" alt="group" /> */}

            <div>
                <h1>Find the best <span>talent</span></h1>
                <div className='div'>
                    <img src="./src/assets/line.svg" alt="line" />
                    <p>
                        Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home