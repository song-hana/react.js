const foods = [
    {foodName: 'cabbage', isFruit: false, foodId: 1},
    {foodName: 'garlic', isFruit: false, foodId: 2},
    {foodName: 'apple', isFruit: true, foodId: 3}
]

export default function Main() {
    const items = foods.map(food => 
        <li key={food.foodId}
            style={{
                color: food.isFruit ? 'magenta' : 'darkgreen'
            }}>
            {food.foodName}
        </li>
    )

    return <ul>{items}</ul>
}