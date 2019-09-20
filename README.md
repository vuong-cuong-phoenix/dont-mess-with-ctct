# Don't Mess With CTCT (DMWC) 
**Don't Mess With CTCT (DMWC)** là một bộ web app do đội ngũ developer chuyên nghiệp của CLB *CTCT* làm ra với mục đích phủ     định phi lợi nhuận để xây dựng một nền tảng học tập online cho các bạn sinh viên trường đại học Bách Khoa TP.HCM!
## Dành cho Newbie:
  * Dành chỗ
  * Dành chỗ
## Dành cho Developer:
### Mô hình Git của DMWC:
  * Tham khảo cách sử dụng ***Git*** để quản lý ***Version*** cho hiệu quả: [A successful Git branching Model](https://nvie.com/posts/a-successful-git-branching-model/)
  
  * Đối với project **DMWC** chỉ có **3 nhóm branches chính** là: ***master***, ***develop*** và ***hotfix***. Trong đó:
  
    * **master** là branch đóng vai trò ***release branch*** trong model ở trên. Nhánh này sẽ liên tục thêm các ***Tags*** ngay sau khi được đưa lên ở các nhóm branches dưới để kiểm soát *phiên bản release*, với quy tắc đặt tên Tag là: 1.01, 1.02, 1.2,...
    
    * **develop** là các branches đóng vai trò ***feature branch*** cũng như ***develop branch*** trong model. Ở đây có sự kết hợp là bởi vì hiện tại đang có **2 phiên bản Back-end** đang được phát triển song song dựa trên *core* là branch **develop--front-end**. Quy tắc đặt tên của các branches thuộc nhóm này là: **develop--*NAME*** với ***NAME*** được viết liền, phân cách các từ bằng dấu gạch nối "**-**".
    
    * **hotfix** là branch đóng vai trò sửa lỗi nóng ngay sau khi các phiên bản **develop** được đưa lên **master**, với quy tắc đặt tên là: **hotfix--*VERSION***, với ***VERSION*** viết đúng với tên ***Tags*** hiện đang có của branch **master**.

### Quy tắc sử dụng Git:
 * Các Developer chú ý là *branch core* **develop--front-end** là branch ***develop chính*** của toàn bộ project, nên trước khi phát triển một tính năng, hay thêm hẳn một branch develop mới thì cần phải ***merge/pull/checkout branch core về với branch mà mình muốn hoạt động*** để luôn được cập nhật mới nhất các phiên bản, tránh sự nhầm lẫn và mất thời gian trong khâu test, debug và maintain!
 
 * **Tuyệt đối không được merge branch đang làm lên branch core mà chỉ khi đã xong, muốn release thì *thông báo*, *request merge* lên master!**. 
 * Riêng với một số trường hợp có thể sẽ phải thay đổi cấu trúc branch và các phương thức liên quan, nhưng nên hạn chế và phải có sự thông báo, họp bàn đầy đủ để ra quyết định!
