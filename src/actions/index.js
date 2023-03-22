export const SHOW_HEROES = "SHOW_HEROES"

export function showHeroes(){
    /*
    ==head==
    name
    image
    fullname
    ==Atributos==
    Intelligence
    Strength
    Speed
    Durability
    Power
    Combat
    ==APARIENCIA==
    Gender
    Race
    Height
    Weight
    Eye Color
    Hair Color
    */
    const heroes = [
        {
            id: 1, 
            name: 'Ironman',
            image: 'img.com/asd',
            fullname: 'Tony Stark',
            Intelligence: '100',
            Strength: '100',
            Speed: '100',
            Durability: '100',
            Power: '100',
            Combat: '100',
            Gender: '',
            Race: '100',
            Height: '198 cm',
            Weight: ' 191 kg',
            EyeColor: 'Blue',
            HairColor: 'Black'
        },
        {
            id: 2, 
            name: 'Capitan America',
            image: 'img.com/asd',
            fullname: 'Tony Stark',
            Intelligence: '100',
            Strength: '100',
            Speed: '100',
            Durability: '100',
            Power: '100',
            Combat: '100',
            Gender: '',
            Race: '100',
            Height: '198 cm',
            Weight: ' 191 kg',
            EyeColor: 'Blue',
            HairColor: 'Black'
        }
    ]

    return {
        type: "SHOW_HEROES",
        payload: heroes
    }
}