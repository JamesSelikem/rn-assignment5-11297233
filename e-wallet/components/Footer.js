
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.footerItem}>
          <Image source={require('../assets/home.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Home</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.footerItem}>
        <Image source={require('../assets/mycards.png')} style={styles.footerIcon} />
        <Text style={styles.footerText}>My Cards</Text>
      </View>
      <View style={styles.footerItem}>
        <Image source={require('../assets/statistics.png')} style={styles.footerIcon} />
        <Text style={styles.footerText}>Statistics</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <View style={styles.footerItem}>
          <Image source={require('../assets/settings.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: { flexDirection: 'row', justifyContent: 'space-around', padding: 20, marginBottom: 15 },
  footerItem: { alignItems: 'center' },
  footerIcon: { width: 15, height: 15, marginBottom: 5 },
  footerText: { fontSize: 12 },
});

export default Footer;
