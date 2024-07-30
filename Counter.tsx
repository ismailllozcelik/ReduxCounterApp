import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, RootState } from './stores/store';
import { Button } from '@ant-design/react-native';

const Counter = () => {
    const count = useSelector((state: RootState) => state.count);
    const dispatch = useDispatch();

    console.log('count:', count);
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>{count}</Text>
            <>
                <Button style={styles.btn} type="primary" onPress={() => dispatch(increment())}>Increment</Button>
                <Button type="warning" onPress={() => dispatch(decrement())}>Decrement</Button>
            </>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    counterText: {
        fontSize: 48,
        marginBottom: 20,
    },
    btn: {
        margin: 10,
    }
});

export default Counter;
