import React, { Component } from 'react'
import styled from 'styled-components'
import spinner from '../layout/img/load.gif'


const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`
const Card = styled.div`
    box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.12);
`
export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false

    }

    componentDidMount() {
        const name = this.props.name
        const url = this.props.url
        const pokemonIndex = url.split('/')[url.split('/').length - 2]
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({ name, imageUrl, pokemonIndex})
    }

    render() {

        
        return (
            <div className="col-sm-6 col-md-3 mb-5">
                <Card className="card">         
                    <h2  className="cardHeader">{this.state.pokemonIndex}</h2>
                    {this.state.imageLoading ? (
                        <img src={spinner} style={{ width: '5em', height: '5em'}}
                             className="card-img-top rounded mx-auto d-block mt-2"
                             alt="loading"
                        ></img>
                    ) : null}
                    <Sprite className="card-img-top rounded mx-auto mt 2" 
                            src={this.state.imageUrl}
                            onLoad={() => this.setState({imageLoading: false})}
                            onError={() => this.setState({toManyRequests: true})}
                            style={
                                this.state.toManyRequests ? { display: "none"} :
                                this.state.imageLoading ? null : { display: "block"}
                            }

                    />
                    {this.state.toManyRequests ? ( <h6 className="mx-auto"><span>To many request</span></h6>) : null}    
                    
                    <div className="cardBody mx-auto">
                        <h3>{this.state.name
                                  .toLowerCase()
                                  .split(" ")
                                  .map(
                                      letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                  )
                                  .join(' ') 
                        }
                        </h3>
                    </div>
                </Card>
            </div>
        )
    }
}
