import React, {useState, useEffect} from 'react'
import { CardDeck, Card } from 'react-bootstrap'

import getPoster from '../actions/GetPoster'

const Titles = ({ titles }) => {
    const [posters, setPosters] = useState({})

    useEffect(() => {    
        if(titles.data) {
        titles.data.forEach( title => {
        const getData = async () => {
                let poster = await getPoster(title.TitleName)
                let name = title.TitleName
                let thisPoster = { [name]: poster }
                setPosters((prev) => { return { ...prev, ...thisPoster} } ) 
            }
            getData()
         })
        }
        
    }, [titles])

    const renderCards = (titles) => {
        return titles.data.map((title, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <Card>
                        <Card.Img variant="top" src={posters[title.TitleName]} style={{"height": "400px"}}/>
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
                titles.data && posters ? renderCards(titles) : <> </>
            }
        </CardDeck>
    )

}


export default Titles 
