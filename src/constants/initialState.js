export const initialState = {
    teams: [
        {name: 'Team A'},
        {name: 'Team B'},
        {name: 'Team C'}
    ],
    racers:[
        {fullName:'Tom Jonson',team:'Team A', id: 111},
        {fullName:'Genry Bulash',team:'Team A', id: 222},
        {fullName:'Archi Nilson',team:'Team B', id: 333},
        {fullName:'Bob Granovsky',team:'Team B', id: 444},
        {fullName:'Peter Grubi',team:'Team C', id: 555},
        {fullName:'Kristian Schivalo',team:'Team C', id: 666}
    ],

    races: [
        {
            serialNumber: 336,
            venue: 'Murmansk',
            id: 100,
            racersPositions: [
                {racersName: 'Tom Jonson', position: '3'},
                {racersName: 'Genry Bulash', position: '6'},
                {racersName: 'Archi Nilson', position: '1'},
                {racersName: 'Bob Granovsky', position: '4'},
                {racersName: 'Peter Grubi', position: '2'},
                {racersName: 'Kristian Schivalo', position: '5'}
            ]
        }
    ]
};