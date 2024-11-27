import {useState, useEffect} from 'react';
import { FlatList } from 'react-native';
import {CardHorizontalFood} from './food'

export interface FoodProps{
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
}

export function TrendingFoods(){
const [foods, setFoods] = useState([])

useEffect(() => {
    async function getFoods(){
        const response = await fetch('https://apifakedelivery.vercel.app.foods')
        const data = response.json()
        console.log(data)
    }
})

    return(
        <FlatList
        data={foods}
        renderItem={ ({item}) => <CardHorizontalFood food={item}/>}
        horizontal={true}
        />
    )
}