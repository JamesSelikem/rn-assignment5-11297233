import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const transactions = [
  { id: '1', name: '      Apple Store', category: '      Entertainment', amount: '- $5,99', icon: require('../assets/apple.png') },
  { id: '2', name: 'Spotify', category: 'Music', amount: '- $12,99', icon: require('../assets/spotify.png') },
  { id: '3', name: '        Money Transfer', category: '        Transaction', amount: '$300', icon: require('../assets/transfer.png') },
  { id: '4', name: 'Grocery', category: 'Grocery', amount: '- $88', icon: require('../assets/grocery.png') },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Eric Atsu</Text>
        </View>
        <Image source={require('../assets/search.png')} style={styles.searchIcon} />
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
      </View>

      <View style={styles.actions}>
        <View style={styles.actionItem}>
          <Image source={require('../assets/send.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Sent</Text>
        </View>
        <View style={styles.actionItem}>
          <Image source={require('../assets/receive.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Receive</Text>
        </View>
        <View style={styles.actionItem}>
          <Image source={require('../assets/loan.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Loan</Text>
        </View>
        <View style={styles.actionItem}>
          <Image source={require('../assets/topup.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Topup</Text>
        </View>
      </View>

      <Text style={styles.transactionHeader}>Transaction</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Image source={item.icon} style={styles.transactionIcon} />
            <View>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionCategory}>{item.category}</Text>
            </View>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={require('../assets/home.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Home</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../assets/mycards.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>My Cards</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../assets/statistics.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Statistics</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../assets/settings.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop: 25 },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  welcomeText: { fontSize: 16, color: '#aaa', paddingRight: 120 },
  nameText: { fontSize: 20, fontWeight: 'bold' },
  searchIcon: { width: 30, height: 30 },
  card: { margin: 20, alignItems: 'center' },
  cardImage: { width: '100%', height: 200, resizeMode: 'contain' },
  actions: { flexDirection: 'row', justifyContent: 'space-around', padding: 20 },
  actionItem: { alignItems: 'center' },
  actionIcon: { width: 20, height: 20, marginBottom: 5 },
  actionText: { fontSize: 16 },
  transactionHeader: { fontSize: 18, fontWeight: 'bold', padding: 20 },
  transaction: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  transactionIcon: { width: 20, height: 20 },
  transactionName: { fontSize: 16, paddingRight: 150, },
  transactionCategory: { fontSize: 14, color: '#aaa' },
  transactionAmount: { fontSize: 16, fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'space-around', padding: 20, marginBottom: 15 },
  footerItem: { alignItems: 'center' },
  footerIcon: { width: 15, height: 15, marginBottom: 5 },
  footerText: { fontSize: 12 },
});

export default HomeScreen;
