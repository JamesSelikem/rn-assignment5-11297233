import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#333' : '#fff' }]}>
      <View style={styles.content}>
        <Text style={[styles.header, { color: isDark ? '#fff' : '#000' }]}>Settings</Text>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: isDark ? '#fff' : '#000' }]}>Language</Text>
        </View>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: isDark ? '#fff' : '#000' }]}>My Profile</Text>
        </View>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: isDark ? '#fff' : '#000' }]}>Contact Us</Text>
        </View>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: isDark ? '#fff' : '#000' }]}>Change Password</Text>
        </View>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: isDark ? '#fff' : '#000' }]}>Privacy Policy</Text>
        </View>
        <View style={styles.themeOption}>
          <Text style={[styles.optionText, { color: isDark ? '#fff' : '#000' }]}>Theme</Text>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFED',
  },
  optionText: {
    fontSize: 16,
    padding: 8,
  },
  themeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 55,
  },
});

export default SettingsScreen;
