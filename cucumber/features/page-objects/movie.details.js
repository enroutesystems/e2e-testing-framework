class MovieDetails { 
    

    get director(){
        return $('[data-testid="title-pc-principal-credit"] li:first-child a');
    }

    get actor(){
        return $('[data-testid="title-cast-item__actor"]');
    }

  get imbdRating(){
        return $('.jGRxWM');
    }
}

module.exports = new MovieDetails;
