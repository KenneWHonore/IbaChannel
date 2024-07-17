import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const setting = () => {
  const [mode, setMode] = useState('light');

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mode apparence</Text>
      <View style={styles.modesContainer}>
        <TouchableOpacity
          style={[styles.modeButton, mode === 'light' && styles.activeMode]}
          onPress={() => handleModeChange('light')}
        >
          <Text style={styles.modeButtonText}>Mode clair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modeButton, mode === 'dark' && styles.activeMode]}
          onPress={() => handleModeChange('dark')}
        >
          <Text style={styles.modeButtonText}>Mode sombre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modeButton, mode === 'auto' && styles.activeMode]}
          onPress={() => handleModeChange('auto')}
        >
          <Text style={styles.modeButtonText}>Automatique</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Langue</Text>
      <View style={styles.languageContainer}>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>Francais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>English</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Notification</Text>
      <View style={styles.notificationContainer}>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationButtonText}>Activé</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationButtonText}>Désactivé</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.applyButton} onPress={() => {}}>
        <Text style={styles.applyButtonText}>Appliquer</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  modesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  modeButton: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  activeMode: {
    backgroundColor: '#007AFF',
  },
  modeButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  languageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  languageButton: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  languageButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  notificationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  notificationButton: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  notificationButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  applyButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  applyButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default setting;