import React from 'react'
import { Routes, Route } from 'react-router-dom'
import VisitorGuard from './VisitorGuard.tsx'
import DefaultLayout from "@/components/layouts/default.tsx";
import BoardLayout from "@/components/layouts/Board/index.tsx";

import { AppRoutes } from './Approutes'
import HomePage from '@/pages'
// board
import BoardIndex from '@/pages/Board'
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
          <Route
              path={AppRoutes.board}
              element={
                  <VisitorGuard>
                      <BoardLayout>
                          <BoardIndex />
                      </BoardLayout>
                  </VisitorGuard>
              }
          />
        {/* not found */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  )
}

export default Router
