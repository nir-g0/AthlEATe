import axios from 'axios'
import { OPENAI_API_KEY } from '@env'

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`
  }
})

const generateMealsForDay = async (day, preferences) => {
  try {
    const response = await openai.post('/chat/completions', {
      model: 'gpt-4o-mini',
      // max_tokens: 1000, // Limit tokens per request
      messages: [
        {
          role: 'system',
          content: `You are a meal generator. Respond in JSON with this structure:
          [{
            "meal": "Meal type (e.g., Breakfast, Lunch, Dinner)",
            "time": "Time (e.g., 8:00 AM)",
            "dish": "Dish name (e.g., Turkey Sandwich, Veggie Stir-Fry)",
            "ingredients": [
              { "item": "Ingredient", "quantity": "Amount (e.g., 1 cup)", "calories": "calories (e.g., 100)" }
            ],
            "macros": {
              "calories": 0,
              "protein": 0,
              "carbs": 0,
              "fats": 0
            },
            "hydration": "Water intake in oz (e.g., 8 oz)"
          }]`
        },
        {
          role: 'user',
          content: `Generate 1 day of meals for these preferences: ${JSON.stringify(
            preferences
          )}. 
          Make sure to:
          - Generate the specified number of meals for the day (default: 3 meals: breakfast, lunch, dinner).
          - Include the user's preferred ingredient(s) in **some** meals (e.g., turkey) but not all.
          - Add variety to the meals, ensuring different proteins, carbs, and vegetables are used.
          - Align the total calories to the user's calorie goal (if specified) and balance macros.
          - Avoid repeating ingredients or meal types within the same day as much as possible.`
        }
      ]
    })
    let adjusted = response.data.choices[0].message.content
      .replace('```', '')
      .replace('json', '')
      .replace('```', '')

    return { day, data: adjusted }
  } catch (error) {
    console.error(`Error generating meals for Day ${day}:`, error)
    throw error
  }
}

// Main `chatGPTRequest` function for weekly meals
export const chatGPTRequest = async preferences => {
  try {
    // Create an array of requests for 7 days
    const requests = Array.from({ length: 7 }, (_, i) =>
      generateMealsForDay(i + 1, preferences)
    )

    // Send all requests in parallel
    const results = await Promise.all(requests)

    // Merge results into a single JSON object
    let weeklyMeals = results.reduce((acc, { day, data }) => {
      return (acc += `"${parseInt(day)}":${data},`)
    }, '')
    weeklyMeals = weeklyMeals.slice(0, weeklyMeals.length - 1)
    return `${weeklyMeals}`
  } catch (error) {
    console.error('Error generating weekly meals:', error)
    throw error
  }
}
