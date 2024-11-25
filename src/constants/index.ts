export const mock_fountains:FountainResponseFromApi[] = [
    {
        
        avg_temp: 200,
        avg_pressure: 1000,
        avg_would_recommend: 0.2,
        total_entries: 10,
        meta: {
            name: "Fountain 1",
            description: "This is a fountain",

        },
        entries: [
            {
                temp: 20,
                pressure: 100,
                would_recommend: true,
                fountain_id: "1"
            },
            {
                temp: 20,
                pressure: 100,
                would_recommend: false,
                fountain_id: "1"
            }
        ]
    }, {
            
            avg_temp: 20,
            avg_pressure: 100,
            avg_would_recommend: 0.5,
        total_entries: 100,
        meta: {
            name: "Fountain 2",
            description: "This is a fountain",
            },
            entries: [
                {
                    temp: 20,
                    pressure: 100,
                    would_recommend: true,
                    fountain_id: "2"
                },
                {
                    temp: 20,
                    pressure: 100,
                    would_recommend: false,
                    fountain_id: "2"
                }
            ]
        }
]
export const mock_data: FountainData = {
    responses: 10000,
    fountains: mock_fountains
}

export interface Entry {
    // email of the user is not given to the client fyi
    temp: number;
    pressure: number;
    would_recommend: boolean
    extra_comments?: string
    fountain_id: string
    
}
export type FountainResponseFromApi = {
    avg_temp: number;
    avg_pressure: number;
    avg_would_recommend: number;
    total_entries: number;
    entries: Entry[];
    meta: {
        name: string;
        description: string;
        image_url?: string; // could be local but idrk atp
    }
}; 
export interface FountainData {
    fountains: FountainResponseFromApi[]
    responses: number
}