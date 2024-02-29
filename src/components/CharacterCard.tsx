import {Character} from "./characters.ts";
import {Link} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    return (
        <Link to={`/characters/${props.character.id}`}>
            <div className={'cards'}>
                <div>
                    <p>
                        <img src={props.character.image} alt={props.character.name}/>
                    </p>
                </div>
                <div>
                    <p>
                        {props.character.name}
                    </p>
                    <p>
                        {props.character.species}
                    </p>
                    <p>
                        {props.character.status}
                    </p>
                </div>
            </div>
        </Link>
)
}
