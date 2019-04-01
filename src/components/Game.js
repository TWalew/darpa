import React, { Component } from 'react';
import Modal from 'react-modal';
import '../styles/Game.scss'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player1:0,
            player2:0,
            rope1: 300,
            rope2: 0,
            rope1Width: 270,
            rope2Width: 270,
            showModal: false,
            winner: ''
        };
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount(){
        document.addEventListener("keydown", this._handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown);
    }

    _handleKeyDown = (e) => {
        let player1obj = $('#player1'),
            player2obj = $('#player2'),
            rope1obj = $('#rope1'),
            rope2obj = $('#rope2');
        if (e.keyCode === 68){
            //alert('left');
            console.log(player2obj.css('right'));
            if (player2obj.css('right') !== '265px'){
                this.setState({
                    player2: this.state.player2 + 5,
                    rope2Width: this.state.rope2Width - 5
                });
                let right = this.state.player2 + 'px';
                let ropeWidth = this.state.rope2Width + 'px';
                rope2obj.css('width', ropeWidth);
                player2obj.css('right',right);
            } else {
                this.setState({
                    winner: "Player 1"
                });
                alert("Player 1 wins");
                this.handleOpenModal();
            }
        }
        if (e.keyCode === 80){
            //alert('right');
            console.log(player1obj.css('left'));
            if(player1obj.css('left') !== '265px'){
                //alert('if');
                this.setState({
                    player1: this.state.player1 + 5,
                    rope1: this.state.rope1 + 5,
                    rope1Width: this.state.rope1Width - 5
                });
                let left = this.state.player1 + 'px';
                let rope = this.state.rope1 + 'px';
                let ropeWidth = this.state.rope1Width + 'px';
                rope1obj.css('left', rope);
                rope1obj.css('width', ropeWidth);
                player1obj.css('left',left);
            }else {
                this.setState({
                    winner: "Player 2"
                });
                alert('Player 2 wins');
                this.handleOpenModal();
            }
        }
    };

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
        window.location.reload();
    }
    render() {
        return (
            <div className="game-wrapper container">
                <h1>DARPA</h1>
                <div className="Game row">
                    <div className="left col-sm-6">
                        <div>
                            <h2>Player 1</h2>
                        </div>
                        <div>
                            <p>Distance</p>
                            <span>{this.state.rope1Width - 5}</span>
                        </div>
                        <div id="player1" className="player"></div>
                        <div id="rope1" className="rope1"></div>
                    </div>
                    <div className="right col-sm-6">
                        <div>
                            <h2>Player 2</h2>
                        </div>
                        <div>
                            <p>Distance</p>
                            <span>{this.state.rope2Width - 5}</span>
                        </div>
                        <div id="player2" className="player"></div>
                        <div id="rope2" className="rope2"></div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="row">
                    <div className="col-sm-6 legend">
                        <h6>Press</h6>
                        <span>D</span>
                    </div>
                    <div className="col-sm-6 legend">
                        <h6>Press</h6>
                        <span>P</span>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.showModal}
                    className="Modal"
                >
                    <div className="modal-wrapper">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1 className="text-center text-success">{this.state.winner} WINS THE GAME</h1>
                        <div className="text-center">
                            <button className="btn btn-success" onClick={this.handleCloseModal}>Play Again</button>
                        </div>
                    </div>

                </Modal>
            </div>
        );
    }
}
