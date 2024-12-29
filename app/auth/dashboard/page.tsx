'use client';

import Button from "@mui/joy/Button";
import { redirect } from 'next/navigation'
import {useState} from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(false)

  const logout = async () => {
    setLoading(true)
    await fetch('/api/auth/logout', {
      method: 'POST',
    })

    redirect('/public/login')
  }

    return (
        <div>
            <h1>Dashboard</h1>
            <Button
              type="submit"
              color="primary"
              onClick={logout}
              loading={loading}
            >
              Logout
            </Button>
        </div>
    )
}

export default Dashboard
