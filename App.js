// import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  SafeAreaView, 
  View, 
  Text, 
  Button, 
  StatusBar,
  TouchableHighlight,
  Image
} from 'react-native';

export default function App() {
  const depositButtonHandler = () => {
    // console.log('Deposit Now');
  }

  const notificationsHandler = () => {
    // console.log('Notifications');
  }
  let amount = '1,432.00';
  let cardNumber = '**** **** **** 5432';
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1,}}>
        <Image source={require('./assets/icons/avatar.png')}/>
        <Text style={{color: '#fff', paddingLeft: '2%',}}>
          Welcome back
          {"\n"}
          Jeanne
        </Text>
        <TouchableHighlight onPress={notificationsHandler}>
        <Image style={{marginLeft: '65%',}} source={require('./assets/icons/Union.png')}/>
        </TouchableHighlight>
      </View>
        
      <View style={{flex: 4,}}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: '300',}} >My Card</Text>
        <Text style={{color: '#fff', fontSize: 12, fontWeight: '300', alignSelf: 'flex-end', marginRight: '1%',}} >Manage ></Text>
        <View 
          style={{
            height: '100%',
            width: '90%',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'blueviolet',
            marginTop: '5%',
            marginLeft: '5%',
            transform: [{rotate: '3.41deg'}],
          }}
        >
        <View 
          style={{
            height: '100%',
            width: '100%',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'blueviolet',
            transform: [{rotate: '-6.5deg'}],
          }}
        >
          <View 
          style={{
            height: '100%',
            width: '100%',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'blueviolet',
            transform: [{rotate: '3.5deg'}],
          }}
          >
            <Image style={{marginTop: '6%', marginLeft: '3%',}} source={require('./assets/icons/visa.png')} />
            <Text style={{color: '#fff', fontSize: 14, fontWeight: '300', marginTop: '6%', marginLeft: '3%',}} >Balance</Text>
            <Text style={{color: '#fff', fontSize: 30, fontWeight: '300', marginLeft: '3%',}} >{amount}</Text>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '300', marginLeft: '3%',}} >{cardNumber}</Text>
          </View>
        </View>
        </View>
      </View>
      <View style={{flex: 2,}}></View>
      <View style={{flex: 3,}}>
        <View style={{height: '100%', width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: 'blueviolet'}}>
        <Text style={{color: '#fff', padding: '1%', alignSelf: 'center',}}>Deposit your cryptos to get instant credit limit on the card. Start using your card to earn XCoins @ 5% cashback rate (offer could change in the future)</Text>
        <TouchableHighlight onPress={depositButtonHandler}>
          <View>
          <View style={styles.roundButton}>
            <Image style={{width: '40%', height: '40%',}} source={require('./assets/icons/deposit.png')} />
          </View>
          <Text style={{color:'#fff', alignSelf: 'center',}}>Deposit Now</Text>
          </View>
        </TouchableHighlight>
        </View>
      </View>

      <View style={[styles.boxOuterStyle, {flex: 2,}]}>
        <View style={styles.boxInnerStyle}>
          <Text style={[styles.boxInnerText]}>My Portfolio</Text>
        </View>
      </View>

      <View style={[styles.boxOuterStyle, {flex: 2,}]}>
        <View style={styles.boxInnerStyle}>
          <Text style={styles.boxInnerText}>My Rewards</Text>
        </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingTop: '5%',
  },
  roundButton: {
    height: '50%',
    width: '12%',
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'blueviolet',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxOuterStyle: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: '5%',
  },

  boxInnerStyle: {
    backgroundColor: 'grey', 
    // opacity: 0.3, 
    height: '100%', 
    width: '90%', 
    borderRadius: 20, 
    shadowColor: 'cyan', 
    shadowOpacity: 0.2, 
    elevation: 20, 
    shadowRadius: 3,
    shadowOffset: {width: -2, height: 4},
  },

  boxInnerText: {
    color: '#fff',
    marginTop: '1%', 
    marginLeft: '5%',
  }
})