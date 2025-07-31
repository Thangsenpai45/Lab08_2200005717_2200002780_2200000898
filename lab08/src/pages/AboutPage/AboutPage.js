import React from 'react';
import './AboutPage.css';

function AboutPage() {
  // Thông tin thành viên nhóm (thay đổi theo nhóm thực tế)
  const teamMembers = [
    {
      name: "Lưu Vĩnh Thắng",
      studentId: "2200005717",
      role: "Team Lead",
      github: "Thangsenpai45",
      description: "Phụ trách quản lý dự án và thiết lập cấu trúc Git Flow"
    },
    {
      name: "Hoàng Phi Hùng", 
      studentId: "2200002780",
      role: "Frontend Developer",
      github: "hoangphihung",
      description: "Phát triển giao diện người dùng và components"
    },
    {
      name: "Phạm Sinh Tài",
      studentId: "2200000898", 
      role: "UI/UX Designer",
      github: "phamsinhtai",
      description: "Thiết kế giao diện và trải nghiệm người dùng"
    }
  ];

  const projectInfo = {
    name: "Website Giới Thiệu Phim",
    description: "Ứng dụng React hiển thị danh sách phim với routing",
    technologies: ["React", "React Router", "JavaScript", "CSS", "Git", "GitHub"],
    features: [
      "Hiển thị danh sách phim",
      "Xem chi tiết phim", 
      "Điều hướng giữa các trang",
      "Responsive design",
      "Git Flow workflow"
    ]
  };

  return (
    <div className="about-page">
      <div className="container">
        {/* Header Section */}
        <div className="about-header">
          <h1>Giới Thiệu Về Nhóm</h1>
          <p className="about-subtitle">
            Chúng tôi là nhóm sinh viên đang thực hiện bài tập thực hành React và Git
          </p>
        </div>

        {/* Team Members Section */}
        <div className="team-section">
          <h2>🧑‍💻 Thành Viên Nhóm</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="student-id"><strong>MSSV:</strong> {member.studentId}</p>
                  <p className="role"><strong>Vai trò:</strong> {member.role}</p>
                  <p className="github"><strong>GitHub:</strong> @{member.github}</p>
                  <p className="description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Info Section */}
        <div className="project-section">
          <h2>🎬 Về Dự Án</h2>
          <div className="project-content">
            <div className="project-description">
              <h3>{projectInfo.name}</h3>
              <p>{projectInfo.description}</p>
            </div>
            
            <div className="project-details">
              <div className="technologies">
                <h4>🛠️ Công Nghệ Sử Dụng</h4>
                <div className="tech-tags">
                  {projectInfo.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="features">
                <h4>✨ Tính Năng</h4>
                <ul className="feature-list">
                  {projectInfo.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Course Info Section */}
        <div className="course-section">
          <h2>📚 Thông Tin Bài Tập</h2>
          <div className="course-info">
            <p><strong>Môn học:</strong> Lập trình Web</p>
            <p><strong>Bài tập:</strong> Thực hành 8 - Xây dựng Website React với Git</p>
            <p><strong>Mục tiêu:</strong></p>
            <ul>
              <li>Làm quen với Git và GitHub</li>
              <li>Xây dựng ứng dụng React có routing</li>
              <li>Thực hành làm việc nhóm với Git Flow</li>
              <li>Xử lý merge conflicts và pull requests</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
