
import { Outlet } from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
   <body className="">
    <div className="flex">
        <div className="w-64 h-screen bg-blue-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-bold">Dashboard</div>
            <nav className="flex-grow w-full">
                <a href="/dashboard/product-list" className="block py-2.5 px-4 hover:bg-blue-700">Danh Sách</a>
                <a href="/dashboard/product/add" className="block py-2.5 px-4 hover:bg-blue-700">Thêm Danh Sách</a>
                <a href="/dashboard/category" className="block py-2.5 px-4 hover:bg-blue-700">Danh Mục</a>
                <a href="/dashboard/category/add" className="block py-2.5 px-4 hover:bg-blue-700">Thêm Danh Mục</a>
            </nav>
            <div className="p-4">
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded">Logout</button>
            </div>
        </div>
        <div className="flex-1 flex flex-col">
            <header className="bg-white shadow p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <input type="text" placeholder="Search..." className="p-2 border rounded-lg"/>
                </div>
            </header>
            <main className="flex-grow p-6">
            <Outlet></Outlet>
            </main>
        </div>
    </div>
</body>
    </>
  )
}

export default Dashboard