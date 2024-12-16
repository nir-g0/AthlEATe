import React, { useState } from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  Dimensions,
  Button,
  TextInput
} from 'react-native'
import compStyles from '../../styles/compStyles'
import fonts from '../../styles/fonts'

const { width } = Dimensions.get('window')

const MealCard = ({ object }) => {
  const [favorited, setFavorited] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [dishName, setDishName] = useState(object.dish)
  const [isEditingDishName, setIsEditingDishName] = useState(false)
  const [ingredients, setIngredients] = useState(object.ingredients)
  const [editingIndex, setEditingIndex] = useState(null)
  const [editingName, setEditingName] = useState('')
  const [editingQuantity, setEditingQuantity] = useState('')
  console.log(object.macros)
  const handleRemoveIngredient = index => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index)
    setIngredients(updatedIngredients)
  }

  const handleEditIngredient = index => {
    setEditingIndex(index)
    setEditingName(ingredients[index].item)
    setEditingQuantity(ingredients[index].quantity)
  }

  const saveIngredientEdit = () => {
    const updatedIngredients = [...ingredients]
    updatedIngredients[editingIndex].item = editingName
    updatedIngredients[editingIndex].quantity = editingQuantity
    setIngredients(updatedIngredients)
    setEditingIndex(null)
    setEditingName('')
    setEditingQuantity('')
  }

  const saveDishNameEdit = () => {
    setIsEditingDishName(false)
  }

  function TitleDesc ({ title = '', desc = '' }) {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: '1%',
          backgroundColor: compStyles.whiteContainer.backgroundColor,
          borderRadius: width * 0.04,
          paddingRight: '3%',
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'center',
          ...compStyles.shadow
        }}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={[
              compStyles.bubble,
              compStyles.themeBrightGreen,
              fonts.greyTextSmall,
              {
                color: 'white',
                fontWeight: '500',
                alignSelf: 'flex-start',
                justifyContent: 'center'
              }
            ]}
          >
            {title}
          </Text>
        </View>
        <Text
          style={[
            fonts.whiteText,
            { color: 'black', fontSize: 16, alignSelf: 'center' }
          ]}
        >
          {desc}
        </Text>
      </View>
    )
  }

  return (
    <>
      {/* Meal Card */}
      <TouchableOpacity
        key={object.dish}
        style={compStyles.whiteContainer}
        onPress={() => setModalVisible(true)}
      >
        <View style={{ flexDirection: 'row', alignContent: 'flex-end' }}>
          <View style={{ flex: 1 }}>
            <Text style={fonts.heading1}>{dishName}</Text>
          </View>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => setFavorited(!favorited)}
          >
            <Image
              style={{ height: width * 0.065, width: width * 0.065 }}
              source={
                favorited
                  ? require('../../../assets/icons/start-filled.png')
                  : require('../../../assets/icons/start-unfilled.png')
              }
            />
          </TouchableOpacity>
        </View>

        <Text style={fonts.greyTextSmall}>
          Calories: {object.macros.calories}
        </Text>
        <Text style={fonts.greyTextSmall}>{object.meal}</Text>
      </TouchableOpacity>

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Editable Dish Name */}
            {isEditingDishName ? (
              <TextInput
                style={[
                  fonts.greyTextSmall,
                  styles.inputBox,
                  { marginBottom: 15 }
                ]}
                value={dishName}
                onChangeText={setDishName}
                onBlur={saveDishNameEdit}
                autoFocus
              />
            ) : (
              <Text
                style={fonts.heading1}
                onPress={() => setIsEditingDishName(true)}
              >
                {dishName}
              </Text>
            )}
            <View style={{ marginVertical: '3%' }}>
              <TitleDesc title={'Meal'} desc={object.meal} />
              <TitleDesc
                title={'Calories'}
                desc={object.macros.calories + ' Cal'}
              />
              <TitleDesc title={'Protein'} desc={object.macros.protein + 'g'} />
              <TitleDesc title={'Carbs'} desc={object.macros.carbs + 'g'} />
              <TitleDesc title={'Fat'} desc={object.macros.fats + 'g'} />
              <TitleDesc title={'Hydration'} desc={object.hydration} />
            </View>
            <Text style={fonts.greyTextSmall}>Ingredients:</Text>
            <View style={{ alignItems: 'center' }}>
              {ingredients.map((ingredient, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: '.21%'
                  }}
                >
                  {editingIndex === index ? (
                    <>
                      {/* Editing Name */}
                      <View style={compStyles.rowContainerLong}>
                        <TextInput
                          style={[
                            fonts.greyTextSmall,
                            styles.inputBox,
                            { flex: 2 }
                          ]}
                          value={editingName}
                          onChangeText={setEditingName}
                          autoFocus
                        />
                        {/* Editing Quantity */}
                        <TextInput
                          style={[
                            fonts.greyTextSmall,
                            styles.inputBox,
                            { flex: 1, marginLeft: 10 }
                          ]}
                          value={editingQuantity}
                          onChangeText={setEditingQuantity}
                        />
                        <TouchableOpacity
                          style={{ justifyContent: 'center' }}
                          onPress={saveIngredientEdit}
                        >
                          <Text
                            style={[
                              fonts.greyTextSmall,
                              {
                                color: compStyles.themeBrightGreen.color,
                                marginLeft: 10
                              }
                            ]}
                          >
                            Save
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  ) : (
                    <View style={compStyles.rowContainerLong}>
                      {/* Displaying Name */}
                      <Text
                        style={[
                          fonts.greyTextSmall,
                          {
                            fontWeight: '500',
                            flex: 1.5
                          }
                        ]}
                        onPress={() => handleEditIngredient(index)}
                      >
                        {ingredient.item}
                      </Text>
                      {/* Displaying Quantity */}
                      <Text
                        style={[fonts.greyTextSmall, { flex: 1 }]}
                        onPress={() => handleEditIngredient(index)}
                      >
                        {ingredient.quantity}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleRemoveIngredient(index)}
                      >
                        <Text
                          style={[
                            fonts.greyTextSmall,
                            { color: 'red', fontWeight: '500' }
                          ]}
                        >
                          (-)
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              ))}
            </View>
            <Button
              title='Close'
              onPress={() => setModalVisible(false)}
              color='#4CAF50'
            />
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  favoriteButton: {
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 0 }
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: '90%',
    backgroundColor: compStyles.themeWhite.color,
    padding: 20,
    borderRadius: width * 0.04,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5
  }
})

export default MealCard
