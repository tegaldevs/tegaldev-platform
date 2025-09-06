'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ShoppingBag,
  Package,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Star,
  AlertTriangle,
  CheckCircle,
  Clock,
  Truck,
} from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  status: 'active' | 'inactive' | 'out_of_stock';
  image?: string;
  sales: number;
  rating: number;
  createdAt: string;
}

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  shippingAddress: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'TegalDev T-Shirt',
    description: 'Premium cotton t-shirt with TegalDev logo',
    price: 25.99,
    stock: 150,
    category: 'Apparel',
    status: 'active',
    sales: 89,
    rating: 4.5,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Developer Mug',
    description: 'Ceramic mug perfect for coding sessions',
    price: 12.99,
    stock: 75,
    category: 'Accessories',
    status: 'active',
    sales: 156,
    rating: 4.8,
    createdAt: '2024-01-10',
  },
  {
    id: '3',
    name: 'Coding Stickers Pack',
    description: 'Set of 20 programming-themed stickers',
    price: 8.99,
    stock: 0,
    category: 'Accessories',
    status: 'out_of_stock',
    sales: 234,
    rating: 4.3,
    createdAt: '2024-01-05',
  },
  {
    id: '4',
    name: 'TegalDev Hoodie',
    description: 'Comfortable hoodie for developers',
    price: 45.99,
    stock: 32,
    category: 'Apparel',
    status: 'active',
    sales: 67,
    rating: 4.7,
    createdAt: '2024-01-20',
  },
];

const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    items: [
      {
        productId: '1',
        productName: 'TegalDev T-Shirt',
        quantity: 2,
        price: 25.99,
      },
      {
        productId: '2',
        productName: 'Developer Mug',
        quantity: 1,
        price: 12.99,
      },
    ],
    total: 64.97,
    status: 'processing',
    orderDate: '2024-01-20',
    shippingAddress: 'Jakarta, Indonesia',
  },
  {
    id: 'ORD-002',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    items: [
      {
        productId: '4',
        productName: 'TegalDev Hoodie',
        quantity: 1,
        price: 45.99,
      },
    ],
    total: 45.99,
    status: 'shipped',
    orderDate: '2024-01-19',
    shippingAddress: 'Bandung, Indonesia',
  },
  {
    id: 'ORD-003',
    customerName: 'Mike Johnson',
    customerEmail: 'mike@example.com',
    items: [
      {
        productId: '3',
        productName: 'Coding Stickers Pack',
        quantity: 3,
        price: 8.99,
      },
    ],
    total: 26.97,
    status: 'delivered',
    orderDate: '2024-01-18',
    shippingAddress: 'Surabaya, Indonesia',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'inactive':
      return 'bg-gray-100 text-gray-800';
    case 'out_of_stock':
      return 'bg-red-100 text-red-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'processing':
      return 'bg-blue-100 text-blue-800';
    case 'shipped':
      return 'bg-purple-100 text-purple-800';
    case 'delivered':
      return 'bg-green-100 text-green-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <CheckCircle className="h-3 w-3" />;
    case 'inactive':
      return <Clock className="h-3 w-3" />;
    case 'out_of_stock':
      return <AlertTriangle className="h-3 w-3" />;
    case 'pending':
      return <Clock className="h-3 w-3" />;
    case 'processing':
      return <Package className="h-3 w-3" />;
    case 'shipped':
      return <Truck className="h-3 w-3" />;
    case 'delivered':
      return <CheckCircle className="h-3 w-3" />;
    case 'cancelled':
      return <AlertTriangle className="h-3 w-3" />;
    default:
      return <Clock className="h-3 w-3" />;
  }
};

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<
    'products' | 'orders' | 'analytics'
  >('products');
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [orders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === 'all' || product.category === filterCategory;
    const matchesStatus =
      filterStatus === 'all' || product.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === 'all' || order.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const handleDeleteProduct = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const lowStockProducts = products.filter(
    (product) => product.stock < 20,
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Store Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage products, orders, and inventory
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="/dashboard/(admins)/store/products/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  ${totalRevenue.toFixed(2)}
                </p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5%
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Products
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalProducts}
                </p>
                <p className="text-sm text-blue-600 flex items-center mt-1">
                  <Package className="h-3 w-3 mr-1" />
                  Active inventory
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Orders
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalOrders}
                </p>
                <p className="text-sm text-purple-600 flex items-center mt-1">
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  This month
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Low Stock Alert
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {lowStockProducts}
                </p>
                <p className="text-sm text-orange-600 flex items-center mt-1">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Need attention
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'products'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'orders'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder={`Search ${activeTab}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                {activeTab === 'products' && (
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                )}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  {activeTab === 'products' ? (
                    <>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="out_of_stock">Out of Stock</option>
                    </>
                  ) : (
                    <>
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      <div className="flex items-center justify-center h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                        <Package className="h-12 w-12 text-gray-400" />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {product.name}
                        </h3>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            product.status,
                          )}`}
                        >
                          {getStatusIcon(product.status)}
                          <span className="ml-1 capitalize">
                            {product.status.replace('_', ' ')}
                          </span>
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-gray-900">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-500">
                            {product.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Stock: {product.stock}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          {product.sales} sold
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-600 border-blue-200 hover:bg-blue-50"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-gray-600 border-gray-200 hover:bg-gray-50"
                          >
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Items
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {order.customerName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {order.customerEmail}
                            </div>
                            <div className="text-sm text-gray-500">
                              {order.shippingAddress}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {order.items.map((item, index) => (
                              <div key={index}>
                                {item.quantity}x {item.productName}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          ${order.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                              order.status,
                            )}`}
                          >
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">
                              {order.status}
                            </span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(order.orderDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-blue-600 border-blue-200 hover:bg-blue-50"
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-gray-600 border-gray-200 hover:bg-gray-50"
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="text-center py-12">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Detailed analytics and reports will be available here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
