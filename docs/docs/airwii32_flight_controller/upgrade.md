# 烧录飞控固件

使用USB转串口烧录器，通过 CleanFlight的配置软件，可往飞控板烧录飞控软件。

## 所需工具
USB转串口烧录器(电平为3.3V)；
CleanFlight的配置软件CleanFlight Configurator；

## 安装飞控配置软件

飞控配置软件CleanFlight Configurator的运行环境为Chrome浏览器。

1. 打开目录“Chrome浏览器”，双击ChromePortable.exe文件，打开Chrome浏览器。
   <img src="~@zh_assets/airwii32_flight_controller/upgrade01.jpg">

2. 依次点击A-->B-->C进入扩展程序管理界面。
   <img src="~@zh_assets/airwii32_flight_controller/upgrade02.jpg">

3. 在扩展程序管理页面中，选中开发者选项
   <img src="~@zh_assets/airwii32_flight_controller/upgrade03.jpg">

4. 然后点击“加载已解压缩的扩展程序...” ，然后选择目录“CleanFlight配置程序”。	选择好后，按确定按钮。
   <img src="~@zh_assets/airwii32_flight_controller/upgrade04.jpg">


5. 加载后，CleanFlight配置程序会出现在扩展程列表里，然后点启动按钮即可启动。
   <img src="~@zh_assets/airwii32_flight_controller/upgrade05.jpg">


## 烧录飞控固件步骤

1. 打开飞控配置软件CleanFlight Configurator。


2. 将USB转串口编程器的接到AirWii 32飞控板子上，如下图所示。
   注：飞控板接USB转串口编程器时，请勿同时让飞控板外接电池，否则会烧坏板子!
   <img src="~@zh_assets/airwii32_flight_controller/upgrade001.jpg" />

   将飞控板的BOOT0引脚和3.3V引脚短接(比如用导线)在一起。
   <img src="~@zh_assets/airwii32_flight_controller/upgrade002.jpg" />

3. 将USB串口编程器的USB头接到电脑的USB端口。等5秒左右让电脑识别飞控板的
   USB串口。本例的USB串口号是COM60，波特率使用默认的115200。
   <img src="~@zh_assets/airwii32_flight_controller/upgrade003.jpg" />


4. 选中“No reboot sequence”和“Full Chip Erase”，然后按“Load Firmware [local]”。
   在出现的文件选择框中，选择目录“飞控固件”下的“AIRWII32_v1.9.0.hex”。
   <img src="~@zh_assets/airwii32_flight_controller/upgrade004.jpg" />

5. 最后按“Flash Firmware”开始烧录软件
   <img src="~@zh_assets/airwii32_flight_controller/upgrade005.jpg" />

6. 烧录成功后会提示“SUCCESSFUL”，然后取下烧录器，并让飞控板的BOOT0引脚和3.3V引脚之前的短接断开，这样飞控固件就烧录好了。
   <img src="~@zh_assets/airwii32_flight_controller/upgrade006.jpg" />

7. 重新烧录飞控后，需要重新校准加速计。如何校准加速计，见后文FAQ中的“如何校准飞控板的加速计？”
