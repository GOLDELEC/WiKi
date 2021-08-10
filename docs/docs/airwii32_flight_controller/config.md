# 飞控配置软件的使用

1. 将飞控板通过USB转串口烧录器连接到电脑上。 
   ::: warning
   飞控板接USB转串口编程器时，请勿同时让飞控板外接电池，否则会烧坏板子!
   :::
   
2. 打开配置程序CleanFlight Configurator（前文“安装飞控配置软件CleanFlight Configurator”有说明如何安装此配置程序）。

3. 在配置程序左侧选中板子对应的串口，本例中是COM60，波特率设为115200，然后	点击“CONNECT”按钮让AirWii 32飞控板和配置程序开始通信。
   <img src="~@zh_assets/airwii32_flight_controller/config01.jpg">

4. 连接飞控成功后，配置程序会出现多个配置选项卡： 
   Seteup(基本设置)、Ports(串口功能设置)、Configuration(配置)、PID Tuning(PID	参数设置)、Receiver(接收机)、Modes(飞控飞行模式)、 ... 
   在这些选项卡里可查看或配置飞控板的信息。

   <img src="~@zh_assets/airwii32_flight_controller/config02.jpg">
   
   注：AirWii 32飞控板的参数在出厂前已经配置好，但也可根据DIY需求用配置程序更改飞控的参数。
