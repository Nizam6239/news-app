import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles =  [
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Peter Kafka",
        "title": "Why Netflix's $5 billion pro wrestling deal makes sense",
        "description": "The deal to bring the WWE to Netflix is a major marker for the streamer, which spent years insisting it didn't want to get into live sports.",
        "url": "http://www.businessinsider.com/why-netflix-pro-wrestling-wwe-deal-makes-sense-2024-1",
        "urlToImage": "https://i.insider.com/65afe2d66c8f0a134f792b5b?width=1200&format=jpeg",
        "publishedAt": "2024-01-23T16:18:28Z",
        "content": "For years, people have asked Netflix executives when the company would finally start streaming live sports. Or, at least, \"live sports entertainment.\"\r\nNow they know: 2025.\r\nThat's when a new $5 bill… [+2908 chars]"
    },
    {
        "source": {
            "id": "business-insider-uk",
            "name": "Business Insider (UK)"
        },
        "author": "Peter Kafka",
        "title": "Why Netflix's $5 billion pro wrestling deal makes sense",
        "description": "The deal to bring the WWE to Netflix is a major marker for the streamer, which spent years insisting it didn't want to get into live sports.",
        "url": "http://uk.businessinsider.com/why-netflix-pro-wrestling-wwe-deal-makes-sense-2024-1",
        "urlToImage": "https://i.insider.com/65afe2d66c8f0a134f792b5b?width=1200&format=jpeg",
        "publishedAt": "2024-01-23T16:18:28Z",
        "content": "For years, people have asked Netflix executives when the company would finally start streaming live sports. Or, at least, \"live sports entertainment.\"Now they know: 2025.\r\nThat's when a new $5 billio… [+2923 chars]"
    },
    {
        "source": {
            "id": "fox-sports",
            "name": "Fox Sports"
        },
        "author": "Joel Klatt",
        "title": "How Michigan winning the national championship has influenced Ohio State’s offseason",
        "description": "Ohio State has picked up several star transfers since Michigan's national title win. FOX Sports' Joel Klatt believes there's one ultimate goal in mind for Ryan Day's squad.",
        "url": "http://www.foxsports.com/stories/college-football/how-michigan-winning-the-national-championship-has-influenced-ohio-states-offseason",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/01/1408/814/2024-01-22_How-Much-Does-Michigan-Winning-a-Title-Play-into-Ohio-States-Agressive-Offseason_16x9.jpg?ve=1&tl=1",
        "publishedAt": "2024-01-22T22:16:44Z",
        "content": "There is no greater motive in college football than when your heated rival wins a national championship.\r\nRivals drive each other to greatness, and that is what I love about college football. When yo… [+4228 chars]"
    },
    {
        "source": {
            "id": "les-echos",
            "name": "Les Echos"
        },
        "author": "Paul Turban",
        "title": "Moins de mines, l'autre bonne nouvelle de la transition énergétique",
        "description": "L'électrification des transports et le développement des énergies renouvelables devraient se traduire par une baisse de l'emprise minière globale. La demande nouvelle de certains matériaux ne compensera pas la baisse de l'extraction de charbon.",
        "url": "https://www.lesechos.fr/idees-debats/editos-analyses/moins-de-mines-lautre-bonne-nouvelle-de-la-transition-energetique-2047644",
        "urlToImage": "https://media.lesechos.com/api/v1/images/view/65ae0c2f2ebc70195e23987c/1280x720/0100258908104-web-tete.jpg",
        "publishedAt": "2024-01-22T06:33:10Z",
        "content": "C'est l'un des principaux arguments des opposants à la voiture électrique ou aux énergies renouvelables. La transition énergétique va se traduire par une hausse phénoménale des besoins en métaux, don… [+643 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Sports News | Breaking & Latest Sports News | Reuters",
        "description": "Find latest sports news from every corner of the globe at Reuters.com, your online source for breaking international news coverage.",
        "url": "https://www.reuters.com/sports/",
        "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=172",
        "publishedAt": "2024-01-16T17:22:25.7594988Z",
        "content": null
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Reuters Graphics",
        "title": "Reuters Graphics - Charts, Maps, Interactive Graphics and Videos",
        "description": "The latest world news - politics, sports, culture, science and environment - from our graphics journalists in Singapore, Bangalore, London and New York.",
        "url": "https://www.reuters.com/graphics/",
        "urlToImage": "https://www.reuters.com/graphics/cdn/img/home.jpg",
        "publishedAt": "2020-12-21T00:00:00Z",
        "content": null
    }
]
  constructor(){
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles:this.articles,
      loading:false
    }
  }
  render() {
    return (
      <div className="container my-3">
      <h2>NewsApp - Top headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
          <NewsItems title={element.title.slice(0, 44)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
        </div>
      </div>
    )
  }
}

export default News