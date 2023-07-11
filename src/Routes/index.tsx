import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/login/register'
import { ForgotPasswordPage } from '../pages/login/forgot-password'
import { DashboardPage } from '../pages/Dashboard/dashboard'
import { UsersPage } from '../pages/Dashboard/users/users'
import { ProjectsPage } from '../pages/Dashboard/projects/projects'
import { SubAccountsPage } from '../pages/Dashboard/sub-accounts/sub-accounts'
import { UserForm } from '../pages/Dashboard/users/form'
import { SubUserForm } from '../pages/Dashboard/sub-accounts/form'
import { TransactionsPage } from '../pages/Dashboard/transactions/transactions'
import { ChatsPage } from '../pages/Dashboard/chats/chats'

interface Props {
    
}

export const RoutesPage = (props:Props) => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
                    <Route path="/dashboard" element={<DashboardPage />}>
                        <Route path="/dashboard/users" element={<UsersPage />}></Route>
                        <Route path="/dashboard/users/form" element={<UserForm />}></Route>
                        <Route path="/dashboard/users/form:id" element={<UsersPage />}></Route>
                        <Route path="/dashboard/projects" element={<ProjectsPage />}></Route>
                        <Route path="/dashboard/sub-accounts" element={<SubAccountsPage />}></Route>
                        <Route path="/dashboard/sub-accounts/form" element={<SubUserForm {...props} />}></Route>
                        <Route path="/dashboard/transactions" element={<TransactionsPage/>}></Route>
                        <Route path="/dashboard/chats" element={<ChatsPage/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
