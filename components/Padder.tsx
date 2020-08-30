import React from 'react'
import { View } from 'react-native'

export default function Padder({ height }: { height?: string }) {
  return <View style={{ height: height || 30 }} />
}
