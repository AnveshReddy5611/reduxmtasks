import { StyleSheet, Text,Button, View } from 'react-native'
import { connect } from 'react-redux';
import React from 'react'
import { multiplyTwo } from '../src/redux';
import { useSelector, useDispatch } from 'react-redux';
const TwoContainer = (props) => {
    const dispatch = useDispatch();
    //const val_two = useSelector((state) => state.two.val_two);

    const handlepress=()=>{
        console.log("here")
        dispatch(multiplyTwo)
    }
  return (
    <View>
      <Text>TwoContainer</Text>
      <Text>{props.val_two}</Text>
      <Button onPress={props.multiplyTwo}><Text>Multiply by 2</Text></Button>
    </View>
  )
}

const mapStateToProps = state => {
	return {
		val_two: state.two.val_two
	}
}


const mapDispatchToProps = dispatch => {
	return {
		multiplyTwo: () => dispatch(multiplyTwo())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TwoContainer);

const styles = StyleSheet.create({})