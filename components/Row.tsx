import React, { FunctionComponent } from 'react'
import { View, FlexAlignType } from 'react-native'
import { FlexJustifyType, FlexWrapType } from '../types/flexTypes'

type RowProps = {
  ph?: number
  pv?: number
  jc?: string
  ai?: FlexAlignType
  wrap?: string
}

const Row: FunctionComponent<RowProps> = ({
  ph,
  pv,
  jc,
  ai,
  wrap,
  children,
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: ph || 0,
        paddingVertical: pv || 0,
        justifyContent: (jc as FlexJustifyType) || 'flex-start',
        alignItems: ai || 'flex-start',
        flexWrap: (wrap as FlexWrapType) || 'wrap',
      }}
    >
      {children}
    </View>
  )
}

export default Row
