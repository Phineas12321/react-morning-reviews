import React from 'react'
import IndividualPokemon from './IndividualPokemon'
import axios from 'axios'


class Pokemon extends React.Component{
    constructor(){
        super()

        this.state = {
            pokemon: [],
            baseUrl: 'https://pokeapi.co/api/v2'
        }
    }

    componentDidMount(){
        axios.get(`${this.state.baseUrl}/pokemon`).then((res) =>{
            this.setState({pokemon: res.data.results})
        })
    }

    render(){
        const displayPokemon = this.state.pokemon.map(e =>{
            return <IndividualPokemon key = {e.url} pokemon={e} />
        })
        return(
            <div>
                {displayPokemon}
            </div>
        )
    }
}

export default Pokemon