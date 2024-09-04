import React from 'react';

// Định nghĩa component cho từng mục
interface TimelineItemProps {
    title: string;
    date: string;
    icon: React.ReactNode;
  }
  
  const TimelineItem = ({ title, date, icon }: TimelineItemProps) => (
    <div className="timeline-item">
      <div className="timeline-icon">{icon}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );

// Định nghĩa component cho toàn bộ trang
const TimelinePage = () => (
    <div className="timeline-page">
      <h1>Trò lại</h1>
      <div className="timeline">
        <TimelineItem
          title="Đơn hàng đã đặt"
          date="21-06-2019"
          icon={<i className="fas fa-shopping-cart"></i>}
        />
        <TimelineItem
          title="Đã xác nhận Thông tin thanh toán"
          date="20-07-2019"
          icon={<i className="fas fa-check"></i>}
        />
        <TimelineItem
          title="Chờ lấy hàng"
          date="01-08-2019"
          icon={<i className="fas fa-truck"></i>}
        />
        <TimelineItem
          title="Đang giao"
          date="29-11-2019"
          icon={<i className="fas fa-shipping-fast"></i>}
        />
        <TimelineItem
          title="Đã nhận"
          date="01-12-2019"
          icon={<i className="fas fa-check-circle"></i>}
        />
      </div>
      <button className="btn">Liên hệ người bán</button>
    </div>
  );

export default TimelinePage;