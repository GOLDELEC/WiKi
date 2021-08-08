# 软硬件信息
AirWii 32有刷微型四轴飞控板的主控是32位ARM微处理STM32F103CBT6(主频72MHZ，128KB可编程Flash)；

飞控板配备六轴传感器MPU6050，MPU6050中含3轴陀螺仪和3轴加速计；

运行修改过的开源CleanFlight飞控软件，CleanFlight飞控软件是基于8位的MWC飞控而提升优化的32位版本飞控；

预留接收机接口，方便用户外接遥控接收机；

预留I2C接口方便扩展传感器；

预留串口通信接口，可通过此接口升级飞控软件、查看或配置飞控参数，或接上WiFi通信模块而通过专用手机软件App来遥控；

板载直流电机驱动电路,能直接驱动716、720、820空心杯电机；

板载5V和3.3V电源系统，5V电源系统能提供高达600ma的电流，3.3V电源系统能提供高达400ma的电流，这能很方便的给各扩展模块(如外接接收机、WiFi通信模块)供电；

遥控AirWii 32飞控板的手机软件App能够完全模拟物理遥控器的功能，且用户可根据习惯选择App的摇杆模式（模式可为中国手、美国手、欧洲手，或日本手）。用户能够在视线完全脱离手机屏幕的情况下，准确操作App摇杆，达到自由控制飞行的效果。

单个马达最大驱动输出电流：4.2A

尺寸：2.7cm x 3cm ，是最小的CleanFlight的飞控板

飞控板重量：3.9g

::: tip MWC、BaseFlight和CleanFlight之间的关系
* MWC是全称MultiWii Copter，是基于Arduino板子的8位飞控软件；
* BaseFlight是在MWC的基础行改造、优化、提升而成的32位飞控软件；
* CleanFlight是在BaseFlight的基础上改造、优化、提升而成的32位飞控软件；
* CleanFlight的官网地址：https://github.com/cleanflight/cleanflight
:::


**AirWii 32飞控板**

<img src="~@zh_assets/airwii32_flight_controller/01.jpg" style="width:600px">

<img src="~@zh_assets/airwii32_flight_controller/02.jpg" style="width:600px">
