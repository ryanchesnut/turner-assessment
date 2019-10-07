import React, {useState, useEffect} from 'react'
import { CardDeck, Card } from 'react-bootstrap'

import getPoster from '../actions/GetPoster'

const Titles = ({ titles }) => {
    const [posters, setPoster] = useState([])

    useEffect ( () => {
        if(titles.data){        
            titles.data.map( (title) => {
                let poster = getPoster(title.TitleName);
                poster.then(
                    data => {
                        title.poster = data.toString()
                        console.log(data)
                    }
                )
            })
        }
    }, [])



    const renderCards = (titles) => {
        return titles.data.map((title, i) => {
            console.log(posters[i])
            return (
                <div className="col-md-4" key={i}>
                    <Card>
                        <Card.Img variant="top" src={posters[i]} />
                        <Card.Body>
                            <Card.Title>{title.TitleName}</Card.Title>
                            <Card.Text>
                                <b>Genres: </b>
                                <i>{title.Genres.map( (elem, i) => <i key={100 + i}> {elem}, </i> ) }</i>
                            </Card.Text>
                            <Card.Text>
                                <b>Release Year: </b>
                                <i>{ title.ReleaseYear}</i>
                            </Card.Text>
                            <Card.Text>
                                <b>Plot:</b><br/>
                                {title.Storylines[0].Description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Awards: <br/> 
                                {title.Awards ? title.Awards.map((award, i) => <i key={i}>{award.Award}</i>): <></>} </small>
                        </Card.Footer>
                    </Card>
                </div>

            )
        })
    }


    return (
        <CardDeck>
            {
                titles.data ? renderCards(titles) : <> </>
            }
        </CardDeck>
    )

}


export default Titles 
