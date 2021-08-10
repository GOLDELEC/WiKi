# FAQ

---

**问：控制AirWii 32飞控板的安卓App的安装要求是什么？**

答：安卓手机的系统版本大于等于4.0。

---

**问: 当只加大油门的时候，飞机不是垂直向上飞，而是有点水平漂移，这是怎么回事呢？**

答：这是正常的，理论上只有马达、桨叶、机身绝对平衡、空气无扰动、传感器和传感器	姿态算法无误差，飞机才能垂直向上飞。 

   可用App设置页面中的“飞行初始角度”在一定程度上修正漂移。比如往左漂移的话，就按箭头往右的修正按钮，按一次修正一个微小的值。
   <img src="~@zh_assets/airwii32_flight_controller/faq01.jpg" />

---

**问：水平放置AirWii 32飞控板，App软件中显示飞控板姿态为什么不为0，而是在0左右？**

答：“姿态X”和“姿态Y”值会是0左右为正常现象（±2，放置不是绝对水平和姿态算法误差会导致有些偏差）。

<img src="~@zh_assets/airwii32_flight_controller/faq02.jpg" />

---

**问：水平放置AirWii 32飞控板，App软件中显示飞控板姿态为什么跟0相差很大？**

答：加速计没校准对造成，请按下一问题的回答进行校准加速计。

---

**问：如何校准飞控板的加速计？**

答：AirWii 32飞控板出厂时，已对加速计作了校准，无需用户校准。

但如果用户自行重新烧写了飞控软件，或加速计处于异常状态时（水平放置飞控板	时红色状态灯会不停闪烁），则可用遥控App软件设置界面中的加速计校准按钮进	行重新校准。

加速计正确校准方法：水平放置飞行器，上电，然后按校准按钮进行校准。

加速计校准后，会自动将校准值保存到芯片里，所以只需校准一次。

<img src="~@zh_assets/airwii32_flight_controller/faq03.jpg" />

---

**问：如何校准飞控板的加速计？**

答：飞控板每次上电时，飞控会自动重新校准加速计，所以无需手动校准。

---

**问：如何让飞控板恢复到出厂时默认的设置？**

答：通过点击设置界面中的“默认设置”按钮，可让AirWii 32恢复到出厂时的默认设置。
注：出厂时的默认设置中的飞行遥控方式为手机遥控。

---

**问：如何编译飞控代码？**

AirWii 32运行的是修改过的开源CleanFlight飞控软件，代码编译方法可查看
CleanFlight飞控软件编译方法(编译时，使用命令“make TARGET=AIRWII32”)：

Windows下编译方法：
https://github.com/cleanflight/cleanflight/blob/master/docs/development/Building%20in%20Windows.md

Ubuntu下编译方法：
https://github.com/cleanflight/cleanflight/blob/master/docs/development/Building%20in%20Ubuntu.md
