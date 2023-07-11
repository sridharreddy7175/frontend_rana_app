import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsersPage } from '../pages/Dashboard/users/users'
import { ProjectsPage } from '../pages/Dashboard/projects/projects'
import { SubAccountsPage } from '../pages/Dashboard/sub-accounts/sub-accounts'
import { UserForm } from '../pages/Dashboard/users/form'
import { SubUserForm } from '../pages/Dashboard/sub-accounts/form'
import { TransactionsPage } from '../pages/Dashboard/transactions/transactions'
import { ChatsPage } from '../pages/Dashboard/chats/chats'

export const DashboardRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<UsersPage/>}></Route>
            <Route path="/users" element={<UsersPage/>}></Route>
            <Route path="/users/form" element={<UserForm/>}></Route>
            <Route path="/users/form:id" element={<UsersPage/>}></Route>
            <Route path="/projects" element={<ProjectsPage/>}></Route>
            <Route path="/sub-accounts" element={<SubAccountsPage/>}></Route>
            <Route path="/sub-accounts/form" element={<SubUserForm />}></Route>
            <Route path="/transactions" element={<TransactionsPage/>}></Route>
            <Route path="/chats" element={<ChatsPage/>}></Route>
        </Routes>
    </div>
  )
}
