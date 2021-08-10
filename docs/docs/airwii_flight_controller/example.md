# 马达控制原理与参考代码

飞控板通过PWM输出控制MOS场效应管的开关来实现对马达转速的控制；

D5、D6、D9、D10都是PWM输出口（与Arduino Leonardo的D5、D6、D9、D10相同）；

马达驱动原理图与实物图

<img src="~@zh_assets/airwii_flight_controller/example01.jpg" />
<img src="~@zh_assets/airwii_flight_controller/example02.jpg" />

下面是飞控板马达控制参考Arduino参考代码，功能是通过变量throttle 来控制马达的转速。throttle值范围为0到255，为0时马达停止转动，值越大马达转速越快。

注意：当throttle值取比较大时，马达高速转动，要小心桨叶伤手！

```c
void setup(){
    pinMode(5, OUTPUT);   
    pinMode(6, OUTPUT);   
    pinMode(9, OUTPUT);  
    pinMode(10, OUTPUT);
    delay(100);
}

void loop () {
    int throttle = 8;//0~255

    analogWrite(5, throttle);
    analogWrite(6, throttle);
    analogWrite(9, throttle);
    analogWrite(10, throttle);
}
```
