import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, Pressable } from 'react-native';
import { SymbolView, SFSymbol } from 'expo-symbols';
import DateTimePicker from '@react-native-community/datetimepicker';


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header} />

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('@/assets/icons/home-icon.png')}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('@/assets/icons/menu-icon.png')}
          />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Calendar</Text>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Calendar Header */}
        <View style={styles.calendarHeader}>
          <Text style={styles.monthText}>March 2025</Text>
          <View style={styles.arrowIcon}>
            <SymbolView name="chevron.down" style={styles.icon} />
          </View>
        </View>

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>

        {/* Week Days */}
        <View style={styles.weekDays}>
          {['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'].map((day, index) => (
            <Text key={index} style={styles.weekDayText}>{day}</Text>
          ))}
        </View>

        {/* Calendar Grid */}
        {[...Array(6)].map((_, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {[...Array(7)].map((_, dayIndex) => (
              <View key={dayIndex} style={styles.dayCell}>
                <Text style={styles.dayText}>{dayIndex + 1 + weekIndex * 7}</Text>
                <Image
                  style={styles.dayImage}
                  source={require('@/assets/images/angry.png')}
                />
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        
      </View>

      {/* Footer Bar */}
      <View style={styles.footerBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE873',
  },
  header: {
    height: 62,
    backgroundColor: '#000000',
    opacity: '0.0',
  },
  navBar: {
    height: 72,
    paddingHorizontal: 23.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 22.44,
    height: 22.44,
    position: 'relative',
  },
  iconOutline: {
    width: 16.83,
    height: 18.7,
    position: 'absolute',
    top: 1.87,
    left: 2.81,
    borderWidth: 1.87,
    borderColor: 'black',
  },
  iconInner: {
    width: 5.61,
    height: 9.35,
    position: 'absolute',
    top: 11.22,
    left: 8.42,
    borderWidth: 1.87,
    borderColor: 'black',
  },
  icon: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 36,
    paddingTop: 29,
    backgroundColor: 'white',
    borderRadius:40,
  },
  title: {
    fontSize: 24,
    fontFamily: 'LINE Seed Sans',
    fontWeight: '700',
    color: 'black',
    marginBottom: 50,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: {
    fontSize: 15,
    fontFamily: 'LINE Seed Sans',
    fontWeight: '700',
    color: 'black',
  },
  arrowIcon: {
    width: 23.26,
    height: 23.26,
    position: 'relative',
  },
  arrow: {
    width: 8.23,
    height: 5.48,
    position: 'absolute',
    top: 9.06,
    left: 7.52,
    backgroundColor: 'black',
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },
  weekDayText: {
    width: 40,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'LINE Seed Sans',
    fontWeight: '400',
    color: 'black',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayCell: {
    width: 40,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    fontFamily: 'LINE Seed Sans',
    fontWeight: '400',
    color: 'black',
  },
  dayImage: {
    width: 26.33,
    height: 26.33,
  },
  footer: {
    height: 51,
    paddingHorizontal: 23.5,
    paddingVertical: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFE873',
  },
  footerIcon: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  footerIconInner: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
  },
  footerBar: {
    height: 34,
    backgroundColor: '#FFE873',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;