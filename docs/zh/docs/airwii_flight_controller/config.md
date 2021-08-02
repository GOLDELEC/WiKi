# 飞控配置软件的使用

1. 打开配置程序目录
   
    如果你的电脑操作系统是64位的Windows，那么打开application.windows64目录，如果是32为的Windows，那么打开application.windows32目录。
    <img src="~@zh_assets/airwii_flight_controller/config01.jpg" />

2. 双击MultiWiiConf.exe文件，打开配置程序。
   <img src="~@zh_assets/airwii_flight_controller/config02.jpg" />

    问：如果配置程序MultiWiiConf.exe打不开，并且提示下图所示的错误，这该如何解决？
    <img src="~@zh_assets/airwii_flight_controller/config03.jpg" />

    答:	运行配置程序需要安装配置java运行环境，可按照下面的链接安装配置java运行环境：
    http://jingyan.baidu.com/article/6dad5075d1dc40a123e36ea3.html

3. 在配置程序左侧单击选中板子对应的串口，本例中是COM22。
   <img src="~@zh_assets/airwii_flight_controller/config04.jpg" />

4. 然后点击“START”按钮开始让配置程序和飞控板通信，配置程序功能解析如下。
   <img src="~@zh_assets/airwii_flight_controller/config05.jpg" />
   
    问：水平放置飞控板了，配置程序中显示陀螺仪初始值有不为0，显示的姿态也不对，这个是正常的吗？
    
    答：这是正常的。 因为飞控板在上电的过程中，如果有抖动的情况，会导致陀螺仪初始值不为0，进	而导致姿态计算有误。您可以通过按App软件的解锁按钮，让飞控板自动重新校准	陀螺仪，让陀螺仪的初始值归0，重新计算出准确姿态。
