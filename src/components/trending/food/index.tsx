import { View, Pressable, Text, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { FoodProps } from '..';

export function CardHorizontalFood({food}:{food: FoodProps}){
    return(
        <Pressable className=" flex felx-col rounded-x1">
            <Text>{food.name}</Text>
        </Pressable>
    )
}