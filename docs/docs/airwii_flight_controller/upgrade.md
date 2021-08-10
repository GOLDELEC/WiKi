# 烧录飞控代码

使用Arduino 1.6.3的开发环境，通过板子的USB接口烧录飞控代码。

注意：确保使用的Arduino开发环境版本为1.6.3，这样才能顺利编译。

1. 安装Arduino 1.6.3的开发环境； 
   Arduino 1.6.3的开发环境下载地址：
   http://downloads.arduino.cc/arduino-1.6.3-windows.exe

2. 通过USB，将AirWii飞控板连接到电脑，等5秒左右让电脑识别飞控板的USB串口。

3. 打开飞控代码文件夹，然后用鼠标双击AirCopter.ino这个文件。
   <img src="~@zh_assets/airwii_flight_controller/06.jpg" />

4. 双击AirCopter.ino后，Arduino开发环境会自动加载所有的飞控代码文件。
   <img src="~@zh_assets/airwii_flight_controller/07.jpg" />

5. 在Arduino开发环境中，选择中菜单“工具”-->“板”-->“Arduino Leonardo”，设置板子的类型。
   <img src="~@zh_assets/airwii_flight_controller/08.jpg" />

6. 在Arduino开发环境中，在菜单“工具”-->“端口”中选择飞控板子对应的串口，本例是COM22(Arduino Leonardo)。
   
   <img src="~@zh_assets/airwii_flight_controller/09.jpg" />
   
7. 按上传按钮进行上传，等待固件上传完。
   <img src="~@zh_assets/airwii_flight_controller/10.jpg" />
   
8. 上传完后，状态栏会提示“上传成功”。
   <img src="~@zh_assets/airwii_flight_controller/11.jpg" />
