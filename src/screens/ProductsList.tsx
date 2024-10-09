// src/components/ProductsList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../Redux/action/product';
import { View, Text, FlatList, ActivityIndicator ,StyleSheet,Image} from 'react-native';
import {Card} from 'react-native-paper';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <View style={{flexDirection:'row',padding:20}}>
                    <Image source={{uri: item.image}} style={styles.productImage} />
        <View style={{ width: '70%', borderBottomColor: '#ccc' }}>
          <Text style={styles.Textstyle}>{item.title}</Text>
        </View>
        </View>
        </Card>

      )}
    />
  );
};
const styles = StyleSheet.create({
  Textstyle:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',

  },
  card: {
    margin: 10,
    // flexDirection:'row'
  },
  productImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 15,
    borderRadius:100
  },
})

export default ProductsList;
