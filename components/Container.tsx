import React, { FunctionComponent } from 'react'
import { SafeAreaView } from 'react-native'

type ContainerProps = {
}

const Container: FunctionComponent<ContainerProps> = ({children}) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingVertical: 7
        }}>
            {children}
        </SafeAreaView>
    )
}

export default Container