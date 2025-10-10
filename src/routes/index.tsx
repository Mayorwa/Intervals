import React from 'react'
import { Routes, Route } from 'react-router-dom'
import VisitorGuard from './VisitorGuard.tsx'
import DefaultLayout from "@/components/layouts/default.tsx";

import { AppRoutes } from './Approutes'

import HomePage from '@/pages/Index.tsx'
import NotFoundPage from "@/pages/NotFound/404.tsx";

const Router: React.FC = () => {
  return (
      <Routes>
        <Route
          path={AppRoutes.home}
          element={
            <VisitorGuard>
                <DefaultLayout>
                    <HomePage />
                </DefaultLayout>
            </VisitorGuard>
          }
        />
        {/* not found */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  )
}

export default Router
