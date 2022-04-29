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

    get genres(){
        return $('[data-testid="genres"]')
    }
}

module.exports = new MovieDetails;
