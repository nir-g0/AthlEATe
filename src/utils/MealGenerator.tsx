import axios from 'axios'
import { OPENAI_API_KEY } from '@env'

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`
  }
})

const generateMealsForDay = async preferences => {
  try {
    const response = await openai.post('/chat/completions', {
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a meal generator. Respond in JSON with this structure:
          {"day_int": [{
              "meal": "Meal type (e.g., Breakfast, Lunch, Dinner)",
              "time": "Time (e.g., 8:00 AM)",
              "dish": "Dish name (e.g., Turkey Sandwich, Veggie Stir-Fry)",
              "ingredients": [
                { "item": "Ingredient", "quantity": "Amount (e.g., 1 cup)", "calories": "calories (e.g., 100)", "altenatives": [] }
              ],
              "macros": {
                "calories": 0,
                "protein": 0,
                "carbs": 0,
                "fats": 0
              },
              "hydration": "Water intake in oz (e.g., 8 oz)"
        }]
          }
            
          Make sure to:
          - Look at what you have previously generated, make sure to continue being UNIQUE
          - Generate the specified number of meals for the day in the given preferences(default: 3 meals: breakfast, lunch, dinner).
          -  Look at what you have previously generated, include the user's preferred ingredient(s) in SOME meals (e.g., turkey) but not all.
          - Add variety to the meals, ensuring different proteins, carbs, and vegetables are used, less spinach and less quinoa but not zero.
          - Align the total calories to the user's calorie goal (if specified) and balance macros.
          - Avoid repeating ingredients or meal types within the same day and over all generations as much as possible.
          - Avoid repeating any dish or main ingredient across the week.
          - Incorporate at least one creative dish per day`
        },
        {
          role: 'user',
          content: `Generate a week of meals taking into account these preferences: ${JSON.stringify(
            preferences
          )}.`
        }
      ]
    })
    let adjusted = response.data.choices[0].message.content
      .replace('```', '')
      .replace('json', '')
      .replace('```', '')

    return adjusted
  } catch (error) {
    console.error(`Error generating meals:`, error)
    throw error
  }
}

// Main `chatGPTRequest` function for weekly meals
export const chatGPTRequest = async preferences => {
  try {
    // Create an array of requests for 7 days
    let weeklyMeals = await generateMealsForDay(preferences)
    console.log(weeklyMeals)
    // weeklyMeals = weeklyMeals.slice(0, weeklyMeals.length - 1)
    return `${weeklyMeals}`
  } catch (error) {
    console.error('Error generating weekly meals:', error)
    throw error
  }
}
