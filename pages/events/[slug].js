import React from 'react'
import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
export default function EventPage() {
  const router = useRouter()
  console.log(router)
  
  return (
    <Layout>
    <h1>My Events</h1>
    </Layout>
  )
}
