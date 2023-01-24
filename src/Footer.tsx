import './footer.css';

export function Footer() {
    return (
        <footer id="footer" className="footer">
    <div className="container text-center">

        <div className="row projects">
            <p>Check out some of my other projects:</p>
            <div className="external-links">
                <div className="col1">
                    <a target="_blank" href="https://upendra5791.github.io/SmartWatch/index.html">Smart Watch</a>
                    <a target="_blank" href="https://upendra5791.github.io/TicTacToe/index.html">TicTacToe</a>
                    <a target="_blank" href="https://upendra5791.github.io/retro-snake-game/snake-index.html">Retro Snake Game</a>
                </div>
                <div className="col1">
                    <a target="_blank" href="https://upendra5791.github.io/SpaceInvader/index.html">Space Invader</a>
                    <a target="_blank" href="https://upendra5791.github.io/CollatzConjecture/index.html">Collatz Conjecture Visualisation</a>
                    <a target="_blank" href="https://upendra5791.github.io/GameofLife/index.html">Game of Life</a>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                <div className="main-footer">

                    <div className="social">
                        <a href="https://twitter.com/Upendra_chhetri" target="_blank"><i className="fa fa-twitter"></i></a>
                        <a href="https://linkedin.com/in/upendra-chhetri-3a4132118" target="_blank"><i
                                className="fa fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/upenz/" target="_blank"><i className="fa fa-facebook"></i></a>
                        <a href="https://github.com/Upendra5791" target="_blank"><i className="fa fa-github"></i></a>
                    </div>

                    <p>“Website without visitors is like a ship lost in the horizon.” <br />
                        ― Dr. Christopher Dayagdag</p>
                </div>

            </div>
        </div>
    </div>

</footer>
    )
}