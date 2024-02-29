import {Character} from "./characters.ts";
import {useParams} from "react-router-dom";

type CharacterDetailPageProps = {
    characters: Character[]
}

export default function CharacterDetailPage(props: Readonly<CharacterDetailPageProps>) {

    const params = useParams();
    const id: string | undefined = params.id;
    if(id === undefined) throw new Error('id is undefined');
    const character:Character = props.characters.filter((character:Character) => character.id === parseInt(id))[0];


    return (
        <div>
            <h2>Character Detail Page:</h2>

            <p>{character.name}</p>
            <p>{character.species}</p>
            <p>{character.status}</p>
            <img src={character.image} alt={character.name}/>

        </div>
    )
}