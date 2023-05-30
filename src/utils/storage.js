import AsyncStorage from "@react-native-async-storage/async-storage";


// Buscar os filmes salvos
export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];

    return moviesSave;

}


// Salvar um novo filme
export async function saveMovie(key, newMovie){
    let moviesStored = await getMoviesSave(key);

    //Se tiver algum filme com esse mesmo ID / ou dublicado precisamos ignorar.
    const hasMovie = moviesStored.some( item => item.id === newMovie.id )

    if(hasMovie){
        console.log("ESSE FILME JA EXISTE NA SUA LISTA!");
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("FILMES SALVO COM SUCESSO!");
}


// Deletar algum filme especifico
export async function deleteMovie(id){
    let moviesStored = await getMoviesSave('@primereact');

    let myMovies = moviesStored.filter( item => {
        return(item.id !== id)
    })

    await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
    console.log('FIlme deletado com sucesso!');
    return myMovies;

}


// Filtrar algum filme se ja está salvo na lista
export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@primereact');

    const hasMovie = moviesStored.find( item => item.id === movie.id);

    if(hasMovie){
        return true;
    }

    return false;
}