"use client";
import { DashboardSidebar, StatsElement } from "@/components";
import ChartLine from "@/components/ChartLine";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const AdminDashboardPage = () => {
  // // State để lưu tổng số đơn hàng
  // const [totalOrders, setTotalOrders] = useState(0);

  // // Hàm để gọi API lấy dữ liệu đơn hàng
  // const fetchOrders = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/api/orders"); // URL của API lấy tất cả orders
  //     const data = await response.json();
  //     setTotalOrders(data.length); // Tính tổng số orders dựa trên length của mảng orders
  //   } catch (error) {
  //     console.error("Error fetching orders:", error);
  //   }
  // };

  // // useEffect để gọi API khi component được mount
  // useEffect(() => {
  //   fetchOrders();
  // }, []);
 // State để lưu tổng số đơn hàng, số đơn hàng theo tháng và theo năm
 const [totalOrders, setTotalOrders] = useState(0);
 const [ordersByMonth, setOrdersByMonth] = useState<{ [key: string]: number }>({});
 const [ordersByYear, setOrdersByYear] = useState<{ [key: string]: number }>({});

 // Hàm để gọi API lấy dữ liệu đơn hàng
 const fetchOrders = async () => {
   try {
     const response = await fetch("http://localhost:3001/api/orders"); // URL của API lấy tất cả orders
     const data = await response.json();

     // Cập nhật tổng số đơn hàng
     setTotalOrders(data.length);

     // Tạo các object để lưu số lượng đơn hàng theo tháng và năm
     const ordersCountByMonth: { [key: string]: number } = {};
     const ordersCountByYear: { [key: string]: number } = {};

     data.forEach((order: any) => {
       const orderDate = new Date(order.createdAt);
       const month = orderDate.getMonth() + 1; // Tháng (1-12)
       const year = orderDate.getFullYear(); // Năm

       // Tạo key cho tháng và năm riêng biệt
       const monthKey = `${month}`;
       const yearKey = `${year}`;

       // Nếu key đã tồn tại, tăng giá trị lên 1, nếu chưa thì đặt là 1
       if (ordersCountByMonth[monthKey]) {
         ordersCountByMonth[monthKey] += 1;
       } else {
         ordersCountByMonth[monthKey] = 1;
       }

       if (ordersCountByYear[yearKey]) {
         ordersCountByYear[yearKey] += 1;
       } else {
         ordersCountByYear[yearKey] = 1;
       }
     });

     // Cập nhật state với số đơn hàng theo tháng và năm
     setOrdersByMonth(ordersCountByMonth);
     setOrdersByYear(ordersCountByYear);
   } catch (error) {
     console.error("Error fetching orders:", error);
   }
 };

 // useEffect để gọi API khi component được mount
 useEffect(() => {
   fetchOrders();
 }, []);

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto max-xl:flex-col">
      <DashboardSidebar />
      <div className="xl:ml-5 w-full max-xl:mt-5 overflow-auto w-full h-[90vh]">
        <div className="flex flex-col items-center ml-5 gap-y-4 w-full max-xl:ml-0 max-xl:px-2 max-xl:mt-5 max-md:gap-y-1">
          <div className="flex justify-between w-full max-md:flex-col max-md:w-full max-md:gap-y-1">
            <div className="w-80 h-32 bg-blue-500 text-white flex flex-col justify-center items-center rounded-md max-md:w-full">
              <h4 className="text-xl text-white">Number of orders</h4>
              <p className="text-2xl font-bold">45</p>
              <p className="text-green-300 flex gap-x-1 items-center">
                <FaArrowUp /> 11.5% Since last month
              </p>
            </div>
          <div className="w-80 h-32 bg-blue-500 text-white flex flex-col justify-center items-center rounded-md max-md:w-full">
            <h4 className="text-xl text-white">Number of oders month</h4>
            <p className="text-2xl font-bold">
            <ul>
              {Object.keys(ordersByMonth).map((month) => (
                <li key={month}>
                  Tháng {month}: {ordersByMonth[month]} đơn hàng
                </li>
              ))}
            </ul>
            </p>
            <p className="text-green-300 flex gap-x-1 items-center"><FaArrowUp />12.5% Since last month</p>
          </div>
          <div className="w-80 h-32 bg-blue-500 text-white flex flex-col justify-center items-center rounded-md max-md:w-full">
            <h4 className="text-xl text-white">Number of oders year</h4>
            <p className="text-2xl font-bold">
            <ul>
        {Object.keys(ordersByYear).map((year) => (
          <li key={year}>
            Năm {year}: {ordersByYear[year]} đơn hàng
          </li>
        ))}
      </ul>
            </p>
            <p className="text-green-300 flex gap-x-1 items-center"><FaArrowUp />20.5% Since last month</p>
          </div>
           
        </div>
        <div className="w-full bg-blue-500 text-white h-40 flex flex-col justify-center items-center gap-y-2">
          <h4 className="text-3xl text-gray-100 max-[400px]:text-2xl">
            Number of oders today
          </h4>
          <p className="text-3xl font-bold">{totalOrders}</p>
          <p className="text-green-300 flex gap-x-1 items-center">
            <FaArrowUp />
            10% Since last month
          </p>
          
        </div>
          <div className="w-full">
          <h1 className="text-3xl font-semibold text-center mb-5">Total: 12.460$</h1>
          </div>
          <div className="xl:ml-5 w-full max-xl:mt-5 overflow-auto w-full h-[80vh]">   
          
            <ChartLine/>
          </div>
      </div>     
    </div>
    </div>
  );
};

export default AdminDashboardPage;
