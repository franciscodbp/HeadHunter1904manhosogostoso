import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import { Icon } from 'native-base'


class LikesTab extends Component {
    constructor() {
        super();
        this.state = {
            pressed: false
        };

        this.clickLikeButton = this.clickLikeButton.bind(this);
    }

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart" style={{ color: "#e22e16" }} />
        )
    }

    clickLikeButton() {
        this.setState({ pressed: !this.state.pressed });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    title=""
                    onPress={
                        () => {
                            this.clickLikeButton();
                        }
                    }
                >
                    <Icon
                        size={60}
                        name="ios-heart"
                        style={[
                            {color: "#4c4c4c"},
                            this.state.pressed && {color: "#e22e16"}
                        ]}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
export default LikesTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});