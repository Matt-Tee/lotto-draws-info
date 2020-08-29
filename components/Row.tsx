import React, { FunctionComponent } from 'react'
import { View, FlexAlignType } from 'react-native'

enum FlexJustifyType{
    "flex-start" = "flex-start",
    "flex-end" = "flex-end",
    "center"= "center",
    "space-between" = "space-between",
    "space-around" = "space-around",
    "space-evenly" = "space-evenly"
} 

type RowProps = {
    ph?: number,
    pv?: number,
    jc?: FlexJustifyType,
    ai?: FlexAlignType,
}

const Row: FunctionComponent<RowProps> = ({ph, pv, jc, ai, children}) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: ph || 0,
            paddingVertical: pv || 0,
            justifyContent: jc || "flex-start",
            alignItems: ai || "flex-start"
        }}>
            {children}
        </View>
    )
}

export default Row