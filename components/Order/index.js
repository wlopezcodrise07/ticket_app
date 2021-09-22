import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import { getOrders } from '../../store/actions/order.action';
import OrderList from './OrderList';
import URI_ORDER_API from '../../constanst/Database'
const Order = () => {
    const dispatch = useDispatch()
    const userSession = useSelector(state => state.users.userSession)
    const [Orders, setOrders] = useState([])

    const getOrders = async () => {
        const response = await fetch('https://ticketnet.codrise.net/order/get_orders',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                email:userSession[0].email
            })
        })

        const result = await response.json();
        setOrders(result)
        console.log(result);  
        }
    useEffect(() => {
        
        getOrders()
    
      }, [])  
    

    const renderItem = (data) => (
    <OrderList item={data.item} />
    );

  return (
    <FlatList
      data={Orders}
      keyExtractor={(val, index) => val.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 20,
  },
});

export default Order;