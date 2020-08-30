import React, { FunctionComponent, useEffect, useState } from 'react'
import Container from '../components/Container'
import { Text, StyleSheet, View } from 'react-native'
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useNavigation } from '@react-navigation/native'
import axios, { AxiosResponse } from 'axios'

const ScanScreen: FunctionComponent = () => {
  const [cameraPermission, setCameraPermission] = useState<boolean>(false)
  const [scanned, setScanned] = useState<boolean>(false)
  const navigation = useNavigation()

  const handleScan = (type: string, data: string) => {
    setScanned(true)
    const response = getData(data)
  }

  const getData = (param: string) => {
    axios
      .post(
        'https://data.api.thelott.com/sales/vmax/web/data/lotto/opendraws',
        {
          CompanyId: 'GoldenCasket',
          MaxDrawCount: 1,
          OptionalProductFilter: [param],
        }
      )
      .then((response: AxiosResponse) => {
        console.log(response.data)
        navigation.navigate('Draw Details', { draw: response.data.Draws[0] })
      })
  }

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    setCameraPermission(status === 'granted')
  }

  useEffect(() => {
    getPermissions()
  }, [])

  return (
    <Container>
      <View style={{ flex: 1, marginTop: 17 }}>
        {cameraPermission === false && (
          <Text>Camera access required to scan QR codes</Text>
        )}

        {cameraPermission && (
          <BarCodeScanner
            onBarCodeScanned={
              scanned
                ? () => {}
                : (event) => {
                    console.log(event)
                    handleScan(event.type, event.data)
                  }
            }
            style={StyleSheet.absoluteFillObject}
          />
        )}
      </View>
    </Container>
  )
}

export default ScanScreen
