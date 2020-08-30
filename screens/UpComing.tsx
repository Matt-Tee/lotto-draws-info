import React, { useState, useEffect, FunctionComponent } from 'react'
import Container from '../components/Container'
import Row from '../components/Row'
import axios, { AxiosResponse } from 'axios'
import { draw } from '../types/drawTypes'
import Loader from '../components/Loader'
import DrawSelector from '../components/DrawSelector'
import { ScrollView } from 'react-native-gesture-handler'

const UpComing: FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [draws, setDraws] = useState<draw[]>([])

  const getData = () => {
    axios
      .post(
        'https://data.api.thelott.com/sales/vmax/web/data/lotto/opendraws',
        {
          CompanyId: 'GoldenCasket',
          MaxDrawCount: 3,
          OptionalProductFilter: ['TattsLotto', 'OzLotto', 'PowerBall'],
        }
      )
      .then((response: AxiosResponse) => {
        console.log(response.data)
        setDraws(response.data.Draws)
        setLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {draws.map((draw, index) => {
          return <DrawSelector key={index} draw={draw} />
        })}
      </ScrollView>
    </Container>
  )
}

export default UpComing
