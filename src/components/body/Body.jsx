import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showHeroes } from '../../actions'
import './Body.css'

class Body extends Component {
    // https://www.superheroapi.com/api.php/812629123100283/search/name

    componentWillMount(){
        this.props.showHeroes()
    }

    renderHeroesList(){
        return this.props.heroes.map((heroe) => {
            return (
                <li key={heroe.id}>{heroe.name}</li>
            )
        })
    }

    render(){
        return(
            <div>
                <h2>Heroes List</h2>
                <ul>
                    { this.renderHeroesList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        heroes: state.heroe.list
    }
}

export default connect(mapStateToProps, { showHeroes })(Body)
