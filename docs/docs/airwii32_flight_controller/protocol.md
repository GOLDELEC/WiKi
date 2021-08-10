# 通信方式和协议

AirWii 32飞控板跟App软件的通信方式是WiFi UDP通信。

AirWii 32飞控板上电后，板上的WiFi模块会建立一个地址为192.168.4.1，端口号为5000的UDP服务。

AirWii 32飞控板上的WiFi模块跟主板通过UART串口通信：
* 通信波特率115200bps
* 校验位 NONE
* 数据位 8bit
* 停止位 1bit

通信时，手机UDP客户端发往飞控板WiFi UDP端口的数据会被转发到飞控板的RX端口（Arduino 的RX端口）；而来自飞控板的TX端口（Arduino的TX端口）的数据会通过WiFi模块发送到跟飞控板通信的手机UDP客户端。

飞控通信协议是CleanFlight飞控的通信协议，具体情况可查阅飞控的通信代码。
