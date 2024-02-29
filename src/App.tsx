import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./components/characters.ts";
import CharacterGallery from "./components/CharacterGallery.tsx";
import {Link, Route, Routes} from "react-router-dom";
import CharacterDetailPage from "./components/CharacterDetailPage.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <nav>
                <Link className={'lonk'} to="/">Home</Link>
                <Link className={'lonk'} to={"/about"}>About</Link>
                <Link className={'lonk'} to={"/characters"}>Characters</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>helloWorld</h1>}/>
                <Route path="/about" element={<h1>About</h1>}/>
                <Route path="/characters" element={<CharacterGallery  characters={characters}/>}/>
                <Route path="/characters/:id" element={<CharacterDetailPage characters={characters}/>}/>
            </Routes>


        </>
    )
}

export default App
