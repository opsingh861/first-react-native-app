import React, { Component, useState } from "react";
import { Button, TextInput, Text, View } from "react-native";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    } // we cannot use useState in class component
    name = () => { // we cannot simply use function in class component
        console.warn(this.state.name);
    }
    render() {
        return (
            <View>
                <Text style={{ color: "red", fontSize: 30 }}>Class Component</Text>
                <TextInput placeholder="Enter your name" onChangeText={(text) => this.setState({ name: text })} />
                <Button title="Click here" onPress={ this.name} />
            </View>
        )
    }
}

export default ClassComponent;