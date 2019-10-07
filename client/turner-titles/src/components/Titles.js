import React, {useState, useEffect} from 'react'
import { CardDeck, Card } from 'react-bootstrap'

import getPoster from '../actions/GetPoster'

const Titles = ({ titles }) => {
    const [setPoster] = useState()

    useEffect(() => {
        if(titles.data) {
        titles.data.forEach( title => {
        const getData = async () => {
                let poster = await getPoster(title.TitleName)
                //setPoster(title.poster = poster)
            }
            getData()
         })
        }
        
    }, [titles])

                // for (let i = 0; i < t.data.length; i++) {
                //     let title = t.data[i]
                //     console.log(title.TitleName)
                //     let poster =  getPoster(title.TitleName);
                //     let data =  poster.then(
                //         data => {
                //             title.poster = data.toString()
                //             console.log(data)
                //             setPoster([...posters, data])
                //         }
                //     )
                //     console.log(data)
                // }




    const renderCards = (titles) => {
        return titles.data.map((title, i) => {
            console.log(typeof title.poster)
            return (
                <div className="col-md-4" key={i}>
                    <Card>
                        <Card.Img variant="top" src={title.poster} />
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
