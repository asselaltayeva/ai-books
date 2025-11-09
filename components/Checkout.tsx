'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'

type Props = object

const Checkout = (props: Props) => {
  const { items } = useCart()
  const [loading, setLoading] = useState(false)

  const onCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const { url } = await response.json()
      if (!url) throw new Error('Checkout URL is missing')

      // Redirect user manually to Stripe Checkout
      window.location.href = url

    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-6 grid gap-4">
      <Button
        size="lg"
        className="w-full"
        disabled={loading || items.length === 0}
        onClick={onCheckout}
      >
        {loading ? 'Processing...' : 'Checkout'}
      </Button>
    </div>
  )
}

export default Checkout
